import React, { useState } from 'react';
import axios from 'axios';

const MarkAttendance = () => {
  const [studentId, setStudentId] = useState('');
  const [classId, setClassId] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('present');

  const handleMarkAttendance = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/teacher/attendance', { studentId, classId, date, status }, {
        headers: { Authorization: token }
      });
      alert('Attendance marked');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Mark Attendance</h2>
      <form onSubmit={handleMarkAttendance}>
        <div>
          <label>Student ID</label>
          <input type="text" value={studentId} onChange={(e) => setStudentId(e.target.value)} />
        </div>
        <div>
          <label>Class ID</label>
          <input type="text" value={classId} onChange={(e) => setClassId(e.target.value)} />
        </div>
        <div>
          <label>Date</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div>
          <label>Status</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="present">Present</option>
            <option value="absent">Absent</option>
          </select>
        </div>
        <button type="submit">Mark Attendance</button>
      </form>
    </div>
  );
};

export default MarkAttendance;
