// src/components/VolunteerForm.jsx
import axios from 'axios';
import { useState } from 'react';

export default function VolunteerForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skills: '',
    availability: '',
    reason: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/volunteers', formData);
      setStatus('success');
      console.log('Submitted:', res.data);
    } catch (err) {
      setStatus('error');
      console.error('Submission error:', err.response?.data || err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md space-y-4">
      <h2 className="text-2xl font-semibold text-center">Volunteer Registration</h2>

      <input name="name" placeholder="Full Name" onChange={handleChange} className="w-full p-2 border rounded" />
      <input name="email" placeholder="Email Address" onChange={handleChange} className="w-full p-2 border rounded" />
      <input name="phone" placeholder="Phone Number" onChange={handleChange} className="w-full p-2 border rounded" />
      <input name="skills" placeholder="Skills (comma separated)" onChange={handleChange} className="w-full p-2 border rounded" />

      <select name="availability" onChange={handleChange} className="w-full p-2 border rounded">
        <option value="">Select Availability</option>
        <option value="Weekdays">Weekdays</option>
        <option value="Weekends">Weekends</option>
        <option value="Flexible">Flexible</option>
      </select>

      <textarea name="reason" placeholder="Why do you want to volunteer?" onChange={handleChange} className="w-full p-2 border rounded h-24" />

      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Submit</button>

      {status === 'success' && <p className="text-green-600 text-center">Thank you for registering!</p>}
      {status === 'error' && <p className="text-red-600 text-center">Something went wrong. Try again.</p>}
    </form>
  );
}
