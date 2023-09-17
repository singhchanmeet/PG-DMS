import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const [formData, setFormData] = useState({
    role: '',
    username: '',
    password: '',
    // Add more fields as needed for each user type
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the registration data to the backend for processing
      const response = await axios.post('/api/register', formData);
      console.log('Registration successful:', response.data);
      // Redirect to the login page after successful registration
      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  // Define a mapping of roles to registration headings
  const roleHeadings = {
    student: 'Student Registration',
    guide: 'Guide Registration',
    university: 'University Registration',
  };

  // Determine the registration heading based on the selected role
  const registrationHeading = roleHeadings[formData.role] || 'Registration';

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">{registrationHeading}</h2>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700">Role:</label>
          <select
            name="role"
            onChange={handleChange}
            value={formData.role}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          >
            <option value="">Select Role</option>
            <option value="student">PG Student</option>
            <option value="guide">Guide</option>
            <option value="university">University</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>
        {/* Add more fields as needed */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white hover:bg-blue-600 rounded px-4 py-2"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
