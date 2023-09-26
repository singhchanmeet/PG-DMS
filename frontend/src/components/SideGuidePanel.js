import React from 'react'
import logo from "../assets/logo thesismate.png"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const SideGuidePanel = ({ handleLogout , loggedin }) => {
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
      });
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
    <div className=' flex-col flex pr-10'>
      <div className='flex justify-center items-center '>
        <span><img className='w-16' src={logo} alt="" /></span>
        <Link to={'/dashboard'}><h1 className='font-semibold py-5  text-lg text-center'>ThesisMate</h1></Link>
      </div>
      <br /><br />
      <div className='flex flex-col gap-3'>
        <Link to={'/evaluation'}><button className=' ml-5 px-2 rounded py-1 hover:bg-slate-300 text-left hover:text-blue-600 focus:text-blue-600 focus:bg-blue-50 '>Evaluate Dissertations</button></Link>
        <Link to={'/guidestds'}><button className=' ml-5 px-2 rounded py-1 hover:bg-slate-300 text-left hover:text-blue-600 focus:text-blue-600 focus:bg-blue-50 '>List of Students</button></Link>
        <Link to={'/help'}><button className=' ml-5 px-2 rounded py-1 hover:bg-slate-300 text-left hover:text-blue-600 focus:text-blue-600 focus:bg-blue-50 '>Help and Support</button></Link>
        <Link to={'/services'}><button className=' ml-5 px-2 rounded py-1 hover:bg-slate-300 text-left hover:text-blue-600 focus:text-blue-600 focus:bg-blue-50 '>Services</button></Link>
        <Link><button className=' ml-5 px-2 rounded py-1 hover:bg-slate-300 text-left hover:text-blue-600 focus:text-blue-600 focus:bg-blue-50 ' onClick={handleLogoutclick}>Logout</button></Link>
      </div>
    </div>
  )
}

export default SideGuidePanel
