import React from 'react'
import logo from "../assets/logo thesismate.png"
import { Link } from 'react-router-dom'

const SidePanel = ({handlelogout}) => {
  return (
    <div className=' flex-col flex pr-10'>
        <div className='flex justify-center items-center '>
          <span><img className='w-16' src={logo} alt="" /></span>
        <Link to={'/dashboard'}><h1 className='font-semibold py-5  text-lg text-center'>ThesisMate</h1></Link>
          </div>
        <br /><br />
        <div className='flex flex-col gap-3'>
            <Link to={'/organization'}><button className=' ml-5 px-2 rounded py-1 hover:bg-slate-300 text-left hover:text-blue-600 focus:text-blue-600 focus:bg-blue-50 '>My Organization</button></Link>
            <Link to={'/evaluation'}><button className=' ml-5 px-2 rounded py-1 hover:bg-slate-300 text-left hover:text-blue-600 focus:text-blue-600 focus:bg-blue-50 '>Evaluate Dissertations</button></Link>
            <Link to={'/publication'}><button className=' ml-5 px-2 rounded py-1 hover:bg-slate-300 text-left hover:text-blue-600 focus:text-blue-600 focus:bg-blue-50 '>Publication Management</button></Link>
            <Link to={'/help'}><button className=' ml-5 px-2 rounded py-1 hover:bg-slate-300 text-left hover:text-blue-600 focus:text-blue-600 focus:bg-blue-50 '>Help and Support</button></Link>
            <Link to={'/services'}><button className=' ml-5 px-2 rounded py-1 hover:bg-slate-300 text-left hover:text-blue-600 focus:text-blue-600 focus:bg-blue-50 '>Services</button></Link>
            <Link><button className=' ml-5 px-2 rounded py-1 hover:bg-slate-300 text-left hover:text-blue-600 focus:text-blue-600 focus:bg-blue-50 '>Logout</button></Link>
        </div>
    </div>
  )
}

export default SidePanel