const express = require("express");
const router = express.Router();
const { getCollections } = require("../config/db");
const verifyToken = require("../middlewares/verifyToken");

// Called on register and on first-time Google login.
// Idempotent: won't create a duplicate if the email already exists.
router.post("/users", async (req, res) => {
  const { usersCollection } = getCollections();
  const newUser = req.body;

  const existing = await usersCollection.findOne({ email: newUser.email });
  if (existing) {
    return res.send({ message: "user already exists", inserted: false });
  }

  const result = await usersCollection.insertOne(newUser);
  res.send(result);
});

// Used by useUserRole on the client to decide which dashboard links/routes to show.
router.get("/users/role/:email", verifyToken, async (req, res) => {
  const { usersCollection } = getCollections();
  const user = await usersCollection.findOne({ email: req.params.email });

  if (!user) {
    return res.status(404).send({ message: "user not found" });
  }

  res.send({ role: user.role });
});

module.exports = router;
