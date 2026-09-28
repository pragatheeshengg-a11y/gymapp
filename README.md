# 🏋️ GYM APP

A full-stack Gym Management Web Application built using the **MERN Stack**.

The application provides separate authentication and dashboards for **Admin** and **Client** users. Clients can register and log in, while admins can manage gym-related information such as workouts.

---
## 🔗 Demo Link
click here:https://gymapp-kappa-five.vercel.app/
---
## 📌 Project Overview

GYM APP is a full-stack web application developed using:

- React.js
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- CSS

The application contains two main types of users:

- **Admin**
- **Client**

### Admin

The admin can log in securely and access the admin dashboard. Admin authentication is implemented using JWT.

### Client

Clients can register, log in, access their dashboard, and view gym-related information such as plans and workouts.

---

# 🚀 Features

## 👨‍💼 Admin Features

- Admin Login
- JWT Authentication
- Protected Admin Routes
- Admin Dashboard
- Workout Management
- Secure API Access
- Admin Logout

## 👤 Client Features

- Client Registration
- Client Login
- JWT Authentication
- Protected Client Dashboard
- Client Logout
- View Gym Plans
- View Workout Information

## 🏠 Home Page

- Gym introduction
- Navigation bar
- Image slider
- About Gym section
- Gym information
- Gym plans
- Login options
- Responsive design

---

# 🛠️ Technologies Used

## Frontend

- React.js
- JavaScript
- React Router
- HTML5
- CSS3
- Vite

## Backend

- Node.js
- Express.js
- JavaScript
- JWT
- bcrypt
- dotenv
- CORS

## Database

- MongoDB
- Mongoose
- MongoDB Atlas
- MongoDB Compass

---

# 📂 Project Structure

```text
GYM_APP/
│
├── backend/
│   │
│   ├── middleware/
│   │   ├── adminauth.js
│   │   └── clientauth.js
│   │
│   ├── models/
│   │   ├── adminmodel.js
│   │   ├── clientusers.js
│   │   └── workout.js
│   │
│   ├── routes/
│   │   ├── adminroute.js
│   │   ├── clientroute.js
│   │   └── workoutroute.js
│   │
│   |
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── frontend/
│   │
│   ├── public/
│   │
│   ├── src/
│   │   │
│   │   ├── assets/
│   │   │
│   │   ├── components/
│   │   │   ├── homeslider.css
│   │   │   ├── homeslider.jsx
│   │   │   ├── navbar.css
│   │   │   └── navbar.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── clientlogin.css
│   │   │   ├── clientregister.css
│   │   │   ├── clientregister.jsx
│   │   │   ├── home.css
│   │   │   ├── home.jsx
│   │   │   ├── loginadmin.jsx
│   │   │   ├── loginclient.jsx
│   │   │   ├── logindashboard.jsx
│   │   │   ├── loginpage_1.jsx
│   │   │   ├── plans.css
│   │   │   └── plans.jsx
│   │   │
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   |
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
│
|
└── README.md
```

---

# 🔑 Environment Variables

Create a `.env` file inside the `backend` folder.

```env
PORT=5000
MONGO_URL=your_mongodb_connection_string
JWT_ADMIN=your_admin_secret
JWT_CLIENT=your_client_secret
```

### Important

Do not upload your actual `.env` file to GitHub.

Add the following to `.gitignore`:

```gitignore
node_modules/
.env
.env.*
!.env.example
```

You can create an `.env.example` file:

```env
PORT=5000
MONGO_URL=your_mongodb_connection_string
JWT_ADMIN=your_admin_secret
JWT_CLIENT=your_client_secret
```

---

# ⚙️ Installation

# 🔧 Backend Setup

Open a terminal:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file and add your MongoDB connection string and JWT secrets.

Start the backend:

```bash
npm run dev
```

Backend server:

```text
http://localhost:5000
```

---

# 💻 Frontend Setup

Open another terminal:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the React application:

```bash
npm run dev
```

Frontend application:

```text
http://localhost:5173
```

---

# 🔄 Application Flow


                    GYM APP
                       │
          ┌────────────┴────────────┐
          │                         │
        ADMIN                     CLIENT
          │                         │
      Admin Login             Registration
          │                         │
          ↓                         ↓
    JWT Authentication        Client Login
          │                         │
          ↓                         ↓
   Admin Dashboard          JWT Authentication
          │                         │
          ↓                         ↓
 Workout Management         Client Dashboard


---

# 🧪 Running the Project

The frontend and backend should run in separate terminals.

### Terminal 1 - Backend

```bash
cd backend
npm install
npm run dev
```

### Terminal 2 - Frontend

```bash
cd frontend
npm install
npm run dev
```

Then open:

http://localhost:5173


---

# 📦 Main Dependencies

## Backend

express
mongoose
bcrypt
jsonwebtoken
dotenv
cors


## Frontend

react
react-dom
react-router-dom


---

# 🛡️ Security

The application uses:

- JWT authentication
- Password hashing
- Protected backend routes
- Authentication middleware
- Environment variables for secrets

Sensitive information such as MongoDB connection strings and JWT secrets should never be committed to GitHub.

---

# 🐛 Error Handling

The application handles common errors such as:

- Invalid login credentials
- Duplicate client registration
- Missing authentication token
- Invalid JWT token
- Database connection errors
- Invalid API requests

---

# 🎯 Learning Outcomes

This project helped implement and understand:

- React component development
- React Router
- React state management
- Form handling
- REST APIs
- Express.js
- Node.js
- MongoDB
- Mongoose
- JWT Authentication
- Password hashing
- Authentication middleware
- Protected routes
- CRUD operations
- Environment variables
- Frontend and backend integration
- Responsive CSS

---

# 🔮 Future Improvements

The following features can be added in future versions:

- [ ] Membership Management
- [ ] Payment Integration
- [ ] Trainer Management
- [ ] Attendance Management
- [ ] Workout Progress Tracking
- [ ] Client Profile Management
- [ ] Password Reset
- [ ] Email Notifications
- [ ] Membership Expiry Notifications
- [ ] Admin CRUD Dashboard
- [ ] Online Payment
- [ ] Workout History
- [ ] Client Progress Reports

---

# 👨‍💻 Author

**Pragatheesh**

Fresher MERN Stack Developer

GitHub:

https://github.com/pragatheeshengg-a11y/gymapp

---

# 📄 License

This project was developed for learning and portfolio purposes.