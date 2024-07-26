import React, { useState } from 'react';
import axios from 'axios';

const EditAttendance = () => {
  const [attendanceId, setAttendanceId] = useState('');
  const [status, setStatus] = useState('present');

  const handleEditAttendance = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.put('http://localhost:5000/api/admin/attendance', { attendanceId, status }, {
        headers: { Authorization: token }
      });
      alert('Attendance updated');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Edit Attendance</h2>
      <form onSubmit={handleEditAttendance}>
        <div>
          <label>Attendance ID</label>
          <input type="text" value={attendanceId} onChange={(e) => setAttendanceId(e.target.value)} />
        </div>
        <div>
          <label>Status</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="present">Present</option>
            <option value="absent">Absent</option>
          </select>
        </div>
        <button type="submit">Edit Attendance</button>
      </form>
    </div>
  );
};

export default EditAttendance;
