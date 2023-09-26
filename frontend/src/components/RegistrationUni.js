import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegistrationUni = () => {
  const [formData, setFormData] = useState({
    role: 'UNIVERSITY',
    name: '',
    email: '',
    user_id: '',
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
      const response = await axios.post('http://localhost:8000/university/create/', formData);
      console.log('Registration successful:', response.data);
      // Redirect to the login page after successful registration
      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  // Define a mapping of roles to registration headings
  const roleHeadings = {
    STUDENT: 'Student Registration',
    GUIDE: 'Guide Registration',
    UNIVERSITY: 'University Registration',
  };

  // Determine the registration heading based on the selected role
  const registrationHeading = roleHeadings[formData.role] || 'Registration';

  return (
    <div className="container mx-auto mt-8">
      
      <h2 className="text-pink-700 text-2xl px-2 font-bold mb-4 text-center">{registrationHeading}</h2>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto px-2 my-2 py-2 w-[400px] bg-zinc-100  rounded shadow mt-8">
        <div className="mb-4 ">
          <label className="block text-pink-700 font-semibold p-1 ">Role:</label>
          <select
            name="role"
            onChange={handleChange}
            value={formData.role}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          >
            <option value="">Select Role</option>
            <option value="UNIVERSITY">University</option>
          </select>
        </div>
        <div className="mb-4 ">
          <label className="block text-pink-700 font-semibold p-1 ">Name of University:</label>
          <input
            type="text"
            name="name"
            placeholder='Name Of University'
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>
        <div className="mb-4 ">
          <label className="block text-pink-700 font-semibold p-1 ">University Email ID:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>
        <div className="mb-4 ">
          <label className="block text-pink-700 font-semibold p-1 ">University ID:</label>
          <input
            type="text"
            name="user_id"
            value={formData.user_id}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>
        <div className="mb-4 ">
          <label className="block text-pink-700 font-semibold p-1 ">Password:</label>
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

export default RegistrationUni;
