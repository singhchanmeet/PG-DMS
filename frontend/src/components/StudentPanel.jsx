import axios from 'axios';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/logo thesismate.png"

const StudentPanel = ({loggedin , handleLogout}) => {
    const navigate = useNavigate();
    const accessToken = localStorage.getItem('accessToken');
    const handleLogoutclick = async () => {
      try {
        // Make a POST request to the logout endpoint
        
        // Remove the access token from localStorage
        localStorage.removeItem('accessToken');
  
        // Remove the Authorization header
        delete axios.defaults.headers.common['Authorization'];
  
        // Set the logged-in state to false
        handleLogout();

        alert("You have been logged out")
        // Redirect to the home page or login page, whichever is appropriate
        navigate('/');

      } catch (error) {
        console.error('Logout failed:', error);
      }
    };
    return (
      <div className=' flex-col flex pr-10'>
        <div className='flex justify-center items-center '>
          <span><img className='w-16' src={logo} alt="" /></span>
          <Link to={'/dashboard'}><h1 className='font-semibold py-5  text-lg text-center'>ThesisMate</h1></Link>
        </div>
        <br /><br />
        <div className='flex flex-col gap-3'>
          <Link to={'/managedstrn'}><button className=' ml-5 px-2 rounded py-1 hover:bg-slate-300 text-left hover:text-blue-600 focus:text-blue-600 focus:bg-blue-50 '>Manage Dissertations</button></Link>
          <Link to={'/feedbacks'}><button className=' ml-5 px-2 rounded py-1 hover:bg-slate-300 text-left hover:text-blue-600 focus:text-blue-600 focus:bg-blue-50 '>Feedbacks/Inbox</button></Link>
          <Link to={'/mydissertations'}><button className=' ml-5 px-2 rounded py-1 hover:bg-slate-300 text-left hover:text-blue-600 focus:text-blue-600 focus:bg-blue-50 '>My Dissertations</button></Link>
          <Link to={'/help'}><button className=' ml-5 px-2 rounded py-1 hover:bg-slate-300 text-left hover:text-blue-600 focus:text-blue-600 focus:bg-blue-50 '>Help and Support</button></Link>
          <Link to={'/services'}><button className=' ml-5 px-2 rounded py-1 hover:bg-slate-300 text-left hover:text-blue-600 focus:text-blue-600 focus:bg-blue-50 '>Services</button></Link>
          <button className=' ml-5 px-2 rounded py-1 hover:bg-slate-300 text-left hover:text-blue-600 focus:text-blue-600 focus:bg-blue-50 ' onClick={handleLogoutclick}>Logout</button>
        </div>
      </div>
    )
}

export default StudentPanel