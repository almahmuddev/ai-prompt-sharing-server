const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let db;

// Call once at server startup (see index.js).
async function connectDB() {
  if (db) return db;
  await client.connect();
  db = client.db("promptMarketplaceDB");
  console.log("Connected to MongoDB");
  return db;
}

// Call from any route/middleware after connectDB() has resolved.
function getCollections() {
  if (!db) {
    throw new Error("Database not connected yet — connectDB() must run first");
  }
  return {
    usersCollection: db.collection("users"),
    promptsCollection: db.collection("prompts"),
    reviewsCollection: db.collection("reviews"),
    reportsCollection: db.collection("reports"),
    paymentsCollection: db.collection("payments"),
  };
}

module.exports = { connectDB, getCollections };
