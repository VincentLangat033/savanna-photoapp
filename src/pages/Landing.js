import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Savannah QA</h1>
        <Link
          to="/login"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Login
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center px-6 py-20">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Savannah QA Assessment
        </h2>
        <p className="text-lg text-gray-600 max-w-xl">
          A platform to test, analyze, and ensure software quality. Join us in
          making applications more reliable and efficient.
        </p>
        <Link
          to="/home"
          className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
