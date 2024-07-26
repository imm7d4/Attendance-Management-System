import React, { useState } from 'react';
import axios from 'axios';

const CreateClass = () => {
  const [name, setName] = useState('');

  const handleCreateClass = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/admin/create-class', { name }, {
        headers: { Authorization: token }
      });
      alert('Class created');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Create Class</h2>
      <form onSubmit={handleCreateClass}>
        <div>
          <label>Class Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <button type="submit">Create Class</button>
      </form>
    </div>
  );
};

export default CreateClass;
