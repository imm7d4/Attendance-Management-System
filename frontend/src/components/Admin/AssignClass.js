import React, { useState } from 'react';
import axios from 'axios';

const AssignClass = () => {
  const [classId, setClassId] = useState('');
  const [studentId, setStudentId] = useState('');

  const handleAssignClass = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/admin/assign-class', { classId, studentId }, {
        headers: { Authorization: token }
      });
      alert('Class assigned');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Assign Class</h2>
      <form onSubmit={handleAssignClass}>
        <div>
          <label>Class ID</label>
          <input type="text" value={classId} onChange={(e) => setClassId(e.target.value)} />
        </div>
        <div>
          <label>Student ID</label>
          <input type="text" value={studentId} onChange={(e) => setStudentId(e.target.value)} />
        </div>
        <button type="submit">Assign Class</button>
      </form>
    </div>
  );
};

export default AssignClass;
