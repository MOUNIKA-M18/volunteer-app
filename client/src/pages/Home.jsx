import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="home-wrapper">
      <div className="home-card">
        <h1 className="home-title">Basthi Ki Pathshala Organization</h1>

        <div className="home-links">
          <Link to="/register" className="home-button">Register</Link>
          <Link to="/admin" className="home-button">Admin Login</Link>
        </div>
      </div>
    </div>
  );
}

