# 📝 Notes Taking App – Fullstack (PERN Stack)

A secure and fast **Note Taking App** built using **React**, **Node.js**, **Express**, and **PostgreSQL**. This fullstack app includes user authentication with JWT, protected routes, and a beautiful frontend UI with modern UX.

---

## 🚀 Features

### 🔧 Backend (Node.js + Express + PostgreSQL)
- ✅ Register / Login with JWT auth
- 🛡️ HTTP-only cookie-based token storage
- 🗒️ CRUD operations on Notes (protected routes)
- 📄 Swagger API docs (localhost:8000/api-docs)
- 🧱 Sequelize ORM with PostgreSQL

### 💻 Frontend (React + Vite)
- 🔐 Auth flow (Register/Login)
- 🗃️ View/Add/Edit/Delete personal notes
- 🍪 Auth token managed via cookie
- ⚠️ Handles error states and form validation

---

## 🗂️ Folder Structure

Notes_Taking-_app/
├── backend/
│ ├── src/
│ │ ├── controllers/
│ │ ├── models/
│ │ ├── routes/
│ │ ├── middleware/
│ │ └── app.js
│ ├── .env
│ └── package.json
├── frontend/
│ ├── src/
│ │ ├── pages/
│ │ ├── components/
│ │ └── App.jsx
│ └── package.json
└── README.md

yaml
Copy
Edit

---

## ⚙️ Getting Started

### 1️⃣ Clone the Repo

```bash
git clone https://github.com/Aarya2409/Notes_Taking-_app.git
cd Notes_Taking-_app
2️⃣ Setup Backend
bash
Copy
Edit
cd backend
npm install
Create a .env file:

ini
Copy
Edit
PORT=8000
DATABASE_URL=postgres://<username>:<password>@localhost:5432/<yourdbname>
JWT_SECRET=your_secret
Run migrations (if using Sequelize CLI):

bash
Copy
Edit
npx sequelize db:migrate
Start the server:

bash
Copy
Edit
npm run dev
3️⃣ Setup Frontend
bash
Copy
Edit
cd ../frontend
npm install
npm run dev
App runs at: http://localhost:5173

📚 API Docs (Swagger)
Visit after backend runs:
🔗 http://localhost:8000/api-docs

🔐 Auth Routes
Method	Endpoint	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	Login user
GET	/api/notes	Get all user notes
POST	/api/notes	Create a note
PUT	/api/notes/:id	Update a note by ID
DELETE	/api/notes/:id	Delete a note by ID

Use cookie-based JWT for auth — no token in header required

🛠️ Tech Stack
Frontend: React + Vite

Backend: Express + Node.js

Database: PostgreSQL via Sequelize

Auth: JWT (stored in HTTP-only cookie)

Docs: Swagger UI

🙌 Author
Made with ❤️ by @Aarya2409
Star ⭐ and Fork 🍴 if you like it!

