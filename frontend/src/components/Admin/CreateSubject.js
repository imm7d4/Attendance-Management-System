// src/components/Admin/CreateSubject.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CreateSubject = () => {
  const [name, setName] = useState('');
  const [teacherId, setTeacherId] = useState('');
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:5000/api/admin/teachers', {
          headers: { Authorization: token }
        });
        setTeachers(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTeachers();
  }, []);

  const handleCreateSubject = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/admin/create-subject', { name, teacherId }, {
        headers: { Authorization: token }
      });
      alert('Subject created');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Create Subject</h2>
      <form onSubmit={handleCreateSubject}>
        <div>
          <label>Subject Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Teacher</label>
          <select value={teacherId} onChange={(e) => setTeacherId(e.target.value)}>
            <option value="">Select Teacher</option>
            {teachers.map((teacher) => (
              <option key={teacher._id} value={teacher._id}>{teacher.username}</option>
            ))}
          </select>
        </div>
        <button type="submit">Create Subject</button>
      </form>
    </div>
  );
};

export default CreateSubject;
