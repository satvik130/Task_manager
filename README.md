# 📝 Task Management System

A full-stack task management web application built with **React**, **Node.js**, **Express**, **MongoDB**, and **Tailwind CSS**.

This project was developed as part of a Full-Stack Developer Assignment and includes full JWT authentication, role-based access (admin vs. regular users), CRUD operations, file uploads, and filtering/sorting of tasks.

---

## 📁 Project Structure
TASK_MANAGER/
├── backend/ # Node.js + Express REST API
├── node_modules/
├── public/ # React public assets
├── src/ # React components, pages, store
├── .gitignore
├── package.json # React frontend config
├── package-lock.json
├── tailwind.config.js # Tailwind CSS config
└── README.md


## ⚙️ Tech Stack

| Frontend              | Backend             | Database |
|-----------------------|---------------------|----------|
| React + Redux Toolkit | Node.js + Express.js| MongoDB  |
| Tailwind CSS          | JWT Auth            | Mongoose |
| React Router DOM      | Multer (file upload)|          |

---

## 🛠️ Features

### ✅ Regular User
- Register and login (JWT-based)
- Manage personal tasks (create, view, update, delete)

### 🛡️ Admin
- Full CRUD on all users
- Assign tasks to any user
- Delete or update any task

### 📁 File Upload
- Supports file attachments in tasks
- Files saved on server and served via `/uploads/`

### 🔍 Task Filters
- Filter tasks by status
- Sort tasks by priority or due date

  Getting Started Locally

### 1. Clone the Repository

```
git clone https://github.com/<your_username>/TASK_MANAGER.git
cd TASK_MANAGER
```

### 2. Setup Backend
```
bash
Copy
Edit
cd backend
npm install
cp .env.example .env    # Create a .env file with your config
npm run dev             # Starts backend on http://localhost:4000
```
### 3. Setup Frontend
```
bash
Copy
Edit
cd ..
npm install
npm run dev             # Starts frontend on http://localhost:3000
```

## DOCKER USAGE
docker-compose up --build

## Testing
-All routes tested via Postman

-Auth headers required for protected routes



