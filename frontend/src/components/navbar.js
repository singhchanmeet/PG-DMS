import axios from 'axios';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ loggedin, handleLogout }) => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem('accessToken');
  const handleLogoutclick = async () => {
    try {
      // Make a POST request to the logout endpoint
      axios.get('http://localhost:8000/auth/user-details/', {
        headers: {
          'Authorization': `Bearer ${accessToken}`, // Add the token to the 'Authorization' header
          'Content-Type': 'application/json', // Adjust headers as needed
        }
      })
      // Remove the access token from localStorage
      localStorage.removeItem('accessToken');

      // Remove the Authorization header
      delete axios.defaults.headers.common['Authorization'];

      // Set the logged-in state to false
      handleLogout();

      // Redirect to the home page or login page, whichever is appropriate
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">Dissertation Portal</Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-200">Home</Link>
          </li>
          {loggedin ?
            (<li>
              <Link to="/dashboard" className="text-white hover:text-gray-200">Dashboard</Link>
            </li>) : (null)
          }
          <li>
            <Link to="/explore" className="text-white hover:text-gray-200">Explore</Link>
          </li>
          {loggedin ? (
            <li>
              <button
                onClick={handleLogoutclick}
                className="text-white hover:text-gray-200 focus:outline-none"
              >
                Logout
              </button>
            </li>
          ) : (<li>
            <Link to={'/login'}><button className="text-white hover:text-gray-200 focus:outline-none"
            >
              Login
            </button></Link>
          </li>)}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
