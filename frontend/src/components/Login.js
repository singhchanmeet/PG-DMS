import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ setLoggedInUser }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/login', credentials);
      setLoggedInUser(response.data.user);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="bg-blue-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-3xl font-bold mb-4 text-center">Login Page</h2>
        <input
          type="text"
          placeholder="Username"
          value={credentials.username}
          onChange={(e) =>
            setCredentials({ ...credentials, username: e.target.value })
          }
          className="w-full border border-gray-300 rounded px-4 py-2 mb-4 focus:outline-none focus:border-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
          className="w-full border border-gray-300 rounded px-4 py-2 mb-4 focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white hover:bg-blue-600 py-2 rounded-md focus:outline-none"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
