# prompt_ — AI Prompt Sharing & Marketplace Platform (Server)

A robust REST API built to power the **prompt_** platform—a marketplace and sharing ecosystem for AI prompts. This backend handles secure authentication, strict server-side business logic, premium content gating, and complex analytical aggregations.

---

## 🔗 Live Links

* **Backend API:** [https://ai-prompt-sharing-server.onrender.com](https://ai-prompt-sharing-server.onrender.com)
* **Frontend Client:** [https://ai-prompt-sharing-client-nine.vercel.app](https://ai-prompt-sharing-client-nine.vercel.app)

---

## 🚀 Key Features

### 🛡️ Authentication & Authorization
* **Secure Session Management:** JWT issued upon successful registration or login, stored and transmitted securely via `httpOnly` cookies.
* **Layered Middleware Architecture:** * `verifyToken`: Validates incoming JWT credentials on all protected routes.
    * `verifyAdmin` / `verifyCreatorOrAdmin`: Fine-grained, role-based access control layers for restricted endpoints.

### 📊 Advanced Data Management
* **Performant CRUD Operations:** Full prompt lifecycle management with integrated server-side search, multi-attribute filtering (category, AI tool, difficulty), dynamic sorting (latest, popular, copied), and pagination.
* **Aggregation Pipelines:** Complex MongoDB pipelines driving key dashboard metrics:
    * *Home Page:* Dynamic calculation of Top Creators.
    * *Creator Dashboard:* Creator growth tracking statistics.
    * *Admin Analytics:* Platform-wide operational totals.

### 🔒 Business Logic & Monetization
* **Server-Enforced Premium Gating:** `promptContent` is completely stripped from the raw API payload for non-premium consumers, eliminating client-side inspection workarounds.
* **Free-Tier Restrictions:** Strict, server-side enforcement of a 3-prompt listing limit for free accounts.
* **Stripe Integration:** Production-ready Stripe Payment Intent creation and absolute transaction recording that automatically upgrades user tiers to Premium upon success.

### 💬 Social & Moderation Ecosystem
* **Interactions:** Idempotent bookmark toggling with duplicate prevention, a comprehensive review framework featuring automatic average rating recalculations, and an explicit prompt reporting system.
* **Admin Panel Endpoints:** Complete operational control over user accounts/roles, dynamic prompt moderation (approve, reject with feedback, feature, or delete), payment auditing, and report resolution.

---

## 🛠️ Tech Stack & Dependencies

* **Core Framework:** Express.js (Node.js runtime)
* **Database:** MongoDB
* **Security & Auth:** `jsonwebtoken`, `cookie-parser`, `cors`
* **Payments:** `stripe`
* **Environment Management:** `dotenv`
* **Development Utilities:** `nodemon`

---
