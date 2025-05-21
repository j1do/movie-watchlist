# 🎬 Movie Watchlist App

A full-stack web application for tracking movies you want to watch — built using React, Express, and MongoDB. Easily add, delete, and manage your personal movie list in the cloud.

---

## 🌐 Live Demo

* **Frontend (Vercel)**: [https://your-frontend-url.vercel.app](https://your-frontend-url.vercel.app)
* **Backend (Render API)**: [https://your-backend-url.onrender.com/movies](https://your-backend-url.onrender.com/movies)

> Replace these links with your actual deployed URLs above

---

## 🚀 Features

* Add movies to your personal watchlist
* Delete movies you no longer want to watch
* Real-time updates via API
* Persistent data storage with MongoDB Atlas
* Fully deployed frontend + backend stack

---

## 🛠️ Tech Stack

**Frontend**

* Vite + React
* Axios for API requests

**Backend**

* Express.js (Node.js)
* MongoDB Atlas (via Mongoose)

**Deployment**

* Vercel (Frontend)
* Render (Backend API)

---

## 🥪 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/movie-watchlist.git
cd movie-watchlist
```

### 2. Backend Setup (`/server`)

```bash
cd server
npm install
```

* Create a `.env` file in the `server/` folder:

```
MONGO_URI=your_mongodb_connection_string
```

* Start the backend:

```bash
node index.js
```

### 3. Frontend Setup (`/client`)

```bash
cd ../client
npm install
```

* Create a `.env` file in the `client/` folder:

```
VITE_API=https://your-backend-url.onrender.com
```

* Start the frontend:

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) to view the app locally.

---

## 👤 Author

**Jimmy (@j1do)**
Had fun building this as a final project