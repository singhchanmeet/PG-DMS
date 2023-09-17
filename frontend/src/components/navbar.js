// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ loggedInUser }) => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">Dissertation Portal</Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-200">Home</Link>
          </li>
          {loggedInUser && (
            <li>
              <Link to="/dashboard" className="text-white hover:text-gray-200">Dashboard</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

