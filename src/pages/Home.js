import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";
import '../App.css';

const Home = () => {
  const [users, setUsers] = useState([]);
  const { logout } = useAuth();
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/"); 
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  return (
    <div className="home-page">
      {/* Navbar */}
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/albums">Albums</Link></li>
          <li><Link to="/photos">Photos</Link></li>
        </ul>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title">Welcome to Savannah QA</h1>
        <p className="hero-description">
          Your platform for testing, analyzing, and ensuring software quality. Join us in making applications more reliable and efficient.
        </p>
        <div className="hero-actions">
          <Link to="/users" className="hero-button">
            Explore Users
          </Link>
          <Link to="/albums" className="hero-button">
            Explore Albums
          </Link>
          <Link to="/photos" className="hero-button">
            Explore Photos
          </Link>
        </div>
      </div>

      {/* Quick Links for Logged-In Users */}
      <div className="quick-links">
        <h2 className="quick-links-title">Quick Access</h2>
        <div className="quick-links-grid">
          <Link to="/users" className="quick-link">
            <h3>Users</h3>
            <p>View and manage all users.</p>
          </Link>
          <Link to="/albums" className="quick-link">
            <h3>Albums</h3>
            <p>Explore user albums and photos.</p>
          </Link>
          <Link to="/photos" className="quick-link">
            <h3>Photos</h3>
            <p>Explore user albums and photos.</p>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Savannah QA. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;