import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AnalyticNavbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(localStorage.getItem('accessToken'))
  const accessToken = localStorage.getItem('accessToken');
  // let [authToken, setAuthToken] = useState(()=> localStorage.getItem('accessToken') ? JSON.parse(localStorage.getItem('accessToken')) : null)

  useEffect(() => {
    // Fetch the user details from your API
    axios.get('http://localhost:8000/auth/user-details/', {
			headers: {
				'Authorization': `Bearer ${accessToken}`, // Add the token to the 'Authorization' header
        'Content-Type': 'application/json', // Adjust headers as needed
			}
		})
      .then((response) => {
        // Assuming the API response contains user data
        setUser(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className='text-2xl text-center py-5 text-red-600 font-semibold'>Loading user data...</p>;
  }

  if (!user) {
    return <p className='text-2xl text-center py-5 text-red-600 font-semibold'>Error loading user data</p>;
  }

  return (
    
    <div className=' flex justify-between gap-10 p-3 bg-blue-50'>

      {/* Hamburger Menu */}
      {/* <div
        className={`hamburger ${isNavOpen ? 'open' : ''} cursor-pointer`}
        onClick={toggleNav}
      >
        <div className="hamburger-line w-6 h-1 bg-gray-600 mb-1"></div>
        <div className="hamburger-line w-6 h-1 bg-gray-600 mb-1"></div>
        <div className="hamburger-line w-6 h-1 bg-gray-600"></div>
      </div> */}

      {/* Side Panel */}
      {/* <div
        className={`side-panel bg-white w-48 h-screen absolute top-0 left-0 transition-transform transform ${
          isNavOpen ? 'translate-x-0' : '-translate-x-48'
        }`}
      >
        <ul className="mt-2">
          <button className='font-semibold px-4 text-3xl' onClick={toggleNav}>X</button>
          <li className="mb-2">
            <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-blue-100">
              Button 1
            </button>
          </li>
          <li className="mb-2">
            <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-blue-100">
              Button 2
            </button>
          </li> */}
      {/* Add more buttons as needed */}
      {/* </ul>
      </div> */}

      {/* Search Button */}
      <div className="relative ">
        <input
          type="text"
          className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search..."
        />
        <button className="absolute right-3 top-2 text-gray-700 hover:text-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11a4 4 0 11-8 0 4 4 0 018 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 17L22 22"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M2 11L7 6 12 11"
            />
          </svg>
        </button>
      </div>

      {/* <div className='text-center'>
        <Link className='hover:bg-gray-200 px-2 py-1 rounded transition-colors duration-300 ease-in-out'>
          <span className='text-blue-500 hover:text-blue-700'>AI Chatbot Support</span>
        </Link>
      </div> */}

      {/* Profile Icon */}
      <div className="mx-5 font-semibold profile-icon text-pink-700 bg-white p-2  rounded">
        {user.username}
      </div>

      {/* Dashboard */}
      {/* <div className={`dashboard ${isNavOpen ? 'open' : ''}`}> */}
      {/* Your dashboard content, graphs, and number analytics go here */}
      {/* </div> */}
    </div>
  );
};

export default AnalyticNavbar;
