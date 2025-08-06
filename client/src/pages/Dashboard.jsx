import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css';

export default function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/register', {
      withCredentials: true, // ✅ Include cookie for auth
    })
    .then(res => setUsers(res.data))
    .catch(err => console.error('Fetch error:', err));
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Registered Users</h2>
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, i) => (
            <tr key={i}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

