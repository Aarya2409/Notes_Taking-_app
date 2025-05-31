# 📝 Note Taking App – Backend API

A secure and extensible **Note-Taking REST API** built using **Node.js**, **Express**, **MongoDB (via Mongoose)**, and **JWT authentication**. This project is designed as a learning-level backend but follows clean architecture principles.

---

## 🚀 Features

- 🔐 User Registration & Login
- 🧾 JWT Authentication (Access Token)
- 🧠 Role-Based Access Control (RBAC)
- 🗒️ Create, Read, Update, Delete Notes
- 🚫 Protected Routes with Middleware
- 🧪 Swagger API Documentation
- 🌱 Modular Codebase ready for scaling

---

## 📁 Folder Structure

src/
├── config/ # DB & Swagger configs
├── controllers/ # Auth & Note logic
├── middleware/ # Auth & Role check middleware
├── models/ # Mongoose schemas
├── routes/ # Route definitions
├── services/ # (Optional) Business logic layer
├── utils/ # (Optional) Reusable helpers
└── app.js # Entry point

yaml
Copy
Edit

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/note-taking-api.git
cd note-taking-api
2. Install Dependencies
bash
Copy
Edit
npm install
3. Set Up Environment Variables
Create a .env file in the root:

env
Copy
Edit
PORT=5000
Postres URL = 
JWT_SECRET=your_jwt_secret_here
4. Run the Server
bash
Copy
Edit
npm run dev
Server runs on http://localhost:5000

📚 API Documentation
Swagger docs available at:

bash
Copy
Edit
http://localhost:5000/api-docs
🧪 Example API Endpoints
POST /api/auth/register – Register a new user

POST /api/auth/login – Login and get token

GET /api/notes/ – Get all notes (protected)

POST /api/notes/ – Create a new note (protected)

Use the Authorization: Bearer <token> header for protected routes.

🛡️ Tech Stack
Node.js + Express

MongoDB + Mongoose

JWT for authentication

Swagger for API docs

🙌 Author
Made with ❤️ by Arya2409

Feel free to fork, star, or contribute!