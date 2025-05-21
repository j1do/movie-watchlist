# 🎬 Movie Watchlist App

A full-stack web application for tracking movies you want to watch — built using React, Express, and MongoDB. Easily add, delete, and manage your personal movie list in the cloud.

---

## 🌐 Live Demo

* **Frontend (Vercel)**: [https://movie-watchlist-woad.vercel.app](https://movie-watchlist-woad.vercel.app)
* **Backend (Render API)**: [https://movie-watchlist-api-frt7.onrender.com/movies](https://movie-watchlist-api-frt7.onrender.com/movies)

---

## 🚀 Features

* Add movies to your personal watchlist
* Delete movies you no longer want to watch
* Toggle dark/light mode for UI
* Responsive and modern styling with clean layout
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

## 🧪 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/j1do/movie-watchlist.git
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
VITE_API=https://movie-watchlist-api-frt7.onrender.com
```

* Start the frontend:

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) to view the app locally.

---

## 👤 Author

**Jimmy (@j1do)**