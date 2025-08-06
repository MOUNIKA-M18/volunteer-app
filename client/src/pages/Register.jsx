import React, { useState } from 'react';
import axios from 'axios';
import './Register.css'; // Import your CSS file

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', role: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  console.log('Submitting:', form);
  try {
    const res = await axios.post('http://localhost:5000/api/users', form);
    console.log('Response:', res.data);
    setStatus('success');
    setForm({ name: '', email: '', role: '' });
  } catch (err) {
    console.error('Error:', err.response?.data || err.message);
    setStatus('error');
  }
};

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h2>Register</h2>

        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="form-input"
        />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="form-input"
        />
        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          className="form-input"
        >
          <option value="">Select Role</option>
          <option value="Intern">Intern</option>
          <option value="Volunteer">Volunteer</option>
        </select>

        <button type="submit" className="form-button">Submit</button>

        {status === 'success' && <p className="success-msg">Registered successfully!</p>}
        {status === 'error' && <p className="error-msg">Something went wrong. Try again.</p>}
      </form>
    </div>
  );
}


