# 🎬 CineView - MERN Movie App

A professional, full-stack movie management application built with the MERN stack (MongoDB, Express, React, Node.js). 

This project features a clean UI, Role-Based Access Control (RBAC), and persistent JWT authentication using HTTP-only cookies.

---

## 🚀 Features

### **👤 User Features**
- **Browse Movies:** Explore a collection of 250+ movies.
- **Advanced Search:** Find movies by title instantly.
- **Pagination & Sorting:** Efficiently navigate through large lists.
- **Session Persistence:** Stay logged in even after refreshing or closing the browser.

### **🛡️ Admin Features**
- **Dashboard:** Specialized management interface for administrators.
- **CRUD Operations:** Create, update, and delete movie entries.
- **RBAC:** Secure access restricted to authorized administrators only.

### **🏗️ Technical Highlights**
- **Auth Flow:** Secure JWT-based authentication with `httpOnly` cookies.
- **Clean Architecture:** Context API for state management and Axios for API communication.
- **Responsive Design:** Beautifully styled with Material UI (MUI).

---

## 🛠️ Tech Stack

- **Frontend:** React, Vite, Material UI, Axios, React Router.
- **Backend:** Node.js, Express, MongoDB (Mongoose).
- **Security:** JWT, BcryptJS, Cookie-parser.

---

## 📋 Prerequisites

List of things you need to install the project:
- [Node.js](https://nodejs.org/) (v16.0.0 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (Running locally or a Cloud Atlas URI)

---

## ⚙️ Installation & Setup

Follow these steps to get the project running locally:

### 1. Clone the repository
```bash
git clone <your-repo-link>
cd <folder-name>
```

### 2. Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables:
   - Create a `.env` file in the `backend` folder.
   - You can use `.env.example` as a template:
     ```bash
     cp .env.example .env
     ```
   - Update `MONGO_URI` with your database connection string.

4. Start the backend server:
   ```bash
   npm start
   ```

### 3. Frontend Setup
1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

---

## 🔑 Demo Credentials

| Role  | Username | Password |
|-------|----------|----------|
| User  | testuser | password123 |
| Admin | admin    | admin123  |

> **Note:** For the first setup, you can register a new user and adjust the role in the database or registration form if demo mode is active.

---

## 📂 Project Structure

```text
├── backend          # Express & Node.js server
│   ├── controllers  # Business logic
│   ├── models       # Database schemas
│   ├── routes       # API endpoints
│   └── server.js    # Entry point
├── frontend         # React & Vite application
│   ├── src
│   │   ├── api      # Axios instance configuration
│   │   ├── context  # Auth & Movie contexts
│   │   ├── pages    # Home, Login, Admin, etc.
│   │   └── components # Reusable UI elements
└── README.md
```

---

## 📄 License

This project is licensed under the ISC License.
