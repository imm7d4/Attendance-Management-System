# Student Portal Web Application

A full-stack web application built with Node.js, Express, MongoDB, and React for managing student attendance, teacher functions, and admin operations.

## Features

- **Authentication**: User registration, login/logout using JWT tokens.
- **Role-based Access Control**: Different access levels for students, teachers, and admins.
- **Attendance Management**: Teachers can mark attendance for students.
- **Admin Functions**: Assign classes, create subjects, and edit attendance records.
- **Profile Management**: Users can update their profiles.

## File Structure

```
.
├── backend/                    # Backend Node.js application
│   ├── config/                 # Configuration files (e.g., MongoDB connection)
│   ├── controllers/            # Route controllers
│   ├── middlewares/            # Middleware functions (e.g., authentication)
│   ├── models/                 # MongoDB models (e.g., User, Class, Subject)
│   ├── routes/                 # Express routes (e.g., authentication, admin, student)
│   └── server.js               # Entry point for backend server
└── frontend/                   # Frontend React application
    ├── public/
    └── src/
        ├── components/         # React components (e.g., Login, Register, Profile)
        ├── pages/              # Page components (e.g., Attendance, MarkAttendance)
        ├── services/           # API service functions
        ├── App.js              # Main component with routing
        ├── index.js            # Entry point for React application
        └── ...
```

## Backend

### Models

- **User**: Represents user details and role.
- **Class**: Represents classes assigned to students.
- **Subject**: Represents subjects assigned to classes.
- **Attendance**: Records attendance for each student.

### Middleware

- **authMiddleware**: Verifies JWT token for protected routes.
- **roleMiddleware**: Restricts access based on user roles.

## Frontend

The frontend is built using React with React Router for navigation. Components are structured for modularity and reusability.

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/imm7d4/Attendence-Management-System.git
   cd student-portal
   ```

2. **Set up backend**:
   ```bash
   cd backend
   npm install
   # Create .env file with and JWT Secret
   npm start
   ```

3. **Set up frontend**:
   ```bash
   cd frontend
   npm install
   npm start
   ```

4. **Open your browser** and visit `http://localhost:3000` to view the application.

## Technologies Used

- **Backend**: Node.js, Express.js, MongoDB
- **Frontend**: React, React Router
- **Middleware**: JWT Authentication, Helmet for HTTP headers, Express Rate Limiting
