import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Attendance = () => {
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:5000/api/student/attendance/:studentId', {
          headers: { Authorization: token }
        });
        setAttendance(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchAttendance();
  }, []);

  return (
    <div>
      <h2>Attendance</h2>
      <ul>
        {attendance.map((record) => (
          <li key={record._id}>
            {record.date}: {record.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Attendance;
