import React from 'react';
import { Link } from 'react-router-dom';
import Explore from './Explore';

const Home = () => {
  return (
    <Explore/>
    // <div className="bg-blue-100 min-h-screen flex items-center justify-center">
    //   <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
    //     <h2 className="text-3xl font-bold mb-4 text-center">Welcome to the Dissertation Portal</h2>
    //     <p className="text-gray-600 text-center mb-6">
    //       This portal helps students, guides, and universities manage the PG dissertation process efficiently.
    //     </p>
    //     <div className="flex justify-between">
    //       <Link to="/login">
    //         <button className="px-1 bg-blue-500 text-white hover:bg-blue-600 py-2 rounded-md">
    //           Login
    //         </button>
    //       </Link>
    //       <Link to="/signup">
    //         <button className="px-1 bg-gray-200 text-gray-800 hover:bg-gray-300 py-2 rounded-md">
    //           Sign Up
    //         </button>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Home;
