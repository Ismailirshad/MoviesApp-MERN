# 🎬 CineView - MERN Movie App

A professional, full-stack movie management application built with the MERN stack (MongoDB, Express, React, Node.js). 

This project features a clean UI, Role-Based Access Control (RBAC), and persistent JWT authentication using HTTP-only cookies.

---

## 🚀 Features

### **👤 User Features**
- **Browse Movies:** Explore a collection of 250+ movies.
- **Advanced Search:** Find movies by title instantly.
- **Pagination & Sorting:** Efficiently navigate through large lists with optimized data fetching.
- **Session Persistence:** Stay logged in securely using HTTP-only JWT cookies.

### **🛡️ Admin Features**
- **Admin Dashboard:** Centralized hub for managing the movie catalog.
- **Full CRUD Support:** Create, Read, Update, and Delete movies with ease.
- **Admin Pagination:** Efficient management of large datasets in the dashboard.
- **Protected Access:** Routes and actions secured via role-based middleware.

### **🏗️ Technical Highlights**
- **State Management:** React Context API for global auth and data management.
- **Component Architecture:** Reusable, memoized components (like `MovieCard` and `MovieRow`) for high performance.
- **Backend Security:** BcryptJS for password hashing and JWT for secure session tokens.
- **Modern UI:** Responsive design crafted with Material UI (MUI).

---

## 🛠️ Tech Stack

- **Frontend:** React 18, Vite, Material UI (MUI), Axios, React Router 6.
- **Backend:** Node.js, Express.js, MongoDB (Mongoose).
- **Security:** JWT (JSON Web Tokens), BcryptJS, Cookie-Parser.

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16.0.0 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (Running locally or a Cloud Atlas URI)

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone <your-repo-link>
cd Movies
```

### 2. Backend Setup

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure environment variables:**
    - Create a `.env` file in the `backend` folder.
    - Add the following variables:
      ```env
      PORT=5000
      MONGO_URI=your_mongodb_connection_string
      JWT_SECRET=your_jwt_secret_key
      NODE_ENV=development
      ```

4.  **Start the backend server:**
    ```bash
    npm start
    # or for development mode:
    npm run dev
    ```

### 3. Frontend Setup

1.  **Open a new terminal and navigate to the frontend directory:**
    ```bash
    cd frontend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure environment variables:**
    - Create a `.env` file in the `frontend` folder.
    - Add the API URL (matching your backend port):
      ```env
      VITE_API_URL=http://localhost:5000/api
      ```

4.  **Start the development server:**
    ```bash
    npm run dev
    ```

---

## 📂 Project Structure

```text
├── backend          # Express & Node.js server
│   ├── controllers  # Business logic (Auth, Movies)
│   ├── models       # Mongoose schemas (User, Movie)
│   ├── routes       # Express API routes
│   └── server.js    # Application entry point
├── frontend         # React & Vite application
│   ├── src
│   │   ├── api      # Centralized Axios configuration
│   │   ├── components # Reusable UI (Navbar, MovieRow, MovieCard)
│   │   ├── context  # Global State (Auth, Movie)
│   │   └── pages    # Views (Home, Admin, Login, Register)
└── README.md
```

---

## 📄 License

This project is licensed under the ISC License.
