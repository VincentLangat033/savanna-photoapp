import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">Savannah QA</h1>
        <div className="auth-buttons">
          <Link to="/login" className="auth-button">
            Login
          </Link>
          <Link to="/register" className="auth-button">
            Register
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <h2 className="hero-title">
          Welcome to Savannah QA Assessment
        </h2>
        <p className="hero-description">
          A platform to test, analyze, and ensure software quality. Join us in
          making applications more reliable and efficient.
        </p>
        <Link to="/home" className="cta-button">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;