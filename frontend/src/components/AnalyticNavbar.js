import React, { useState } from 'react';

const AnalyticNavbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className=' flex justify-around p-3 bg-blue-50'>

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


      {/* Profile Icon */}
      <div className="profile-icon bg-gray-400 h-8 w-8 rounded-full flex items-center justify-center">
        Profile
      </div>

      {/* Dashboard */}
      <div className={`dashboard ${isNavOpen ? 'open' : ''}`}>
        {/* Your dashboard content, graphs, and number analytics go here */}
      </div>
    </div>
  );
};

export default AnalyticNavbar;
