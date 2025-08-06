import React, { useState } from 'react';
import axios from 'axios';
import './AdminLogin.css';

export default function AdminLogin() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/admin/login', form, {
        withCredentials: true, // ✅ Send cookie
      });
      setStatus('success');
      console.log('Logged in!');
      // Optional: redirect to dashboard
    } catch (err) {
      setStatus('error');
      console.error('Login failed:', err.response?.data || err.message);
    }
  };

  return (
    <div className="admin-container">
      <form onSubmit={handleSubmit} className="admin-form">
        <h2>Admin Login</h2>

        <input
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          className="form-input"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="form-input"
        />

        <button type="submit" className="form-button">Login</button>

        {status === 'success' && <p className="success-msg">Login successful!</p>}
        {status === 'error' && <p className="error-msg">Invalid credentials. Try again.</p>}
      </form>
    </div>
  );
}

