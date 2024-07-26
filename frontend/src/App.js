import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Attendance from './components/Student/Attendance';
import MarkAttendance from './components/Teacher/MarkAttendance';
import AssignClass from './components/Admin/AssignClass';
import EditAttendance from './components/Admin/EditAttendance';
import Profile from './components/Profile/Profile';
import CreateClass from './components/Admin/CreateClass';
import CreateSubject from './components/Admin/CreateSubject';

function App() {
  return (
    <Router>
      <div>
        <h1>Student Portal</h1>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/student/attendance" element={<Attendance />} />
          <Route path="/teacher/attendance" element={<MarkAttendance />} />
          <Route path="/admin/assign-class" element={<AssignClass />} />
          <Route path="/admin/edit-attendance" element={<EditAttendance />} />
          <Route path="/admin/create-class" element={<CreateClass />} />
          <Route path="/admin/create-subject" element={<CreateSubject />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
