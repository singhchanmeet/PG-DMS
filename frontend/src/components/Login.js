import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
const Login = ({ setLoggedInUser }) => {
  const [credentials, setCredentials] = useState({ user_id: '', password: '' });
   const navigate = useNavigate();
   const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8000/auth/login/', credentials);
  
      if (response.data.access_token) {
        // Token received upon successful login
        const accessToken = response.data.access_token;
  
        // Store the access token in localStorage
        localStorage.setItem('accessToken', accessToken);
  
        // Set the Axios Authorization header for future requests
        axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        // Pass user details to the Dashboard component
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-3xl font-bold mb-4 text-center">Login Page</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">User ID:</label>
            <input
              type="text"
              placeholder="User ID"
              value={credentials.user_id}
              onChange={(e) =>
                setCredentials({ ...credentials, user_id: e.target.value })
              }
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password:</label>
            <input
              type="password"
              placeholder="Password"
              value={credentials.password}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="button"
            onClick={handleLogin}
            className="w-full bg-blue-500 text-white hover:bg-blue-600 py-2 rounded-md focus:outline-none"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
