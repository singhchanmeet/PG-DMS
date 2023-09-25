import React from 'react'

const SidePanel = () => {
  return (
    <div className=' flex-col flex pr-10'>
        <h1 className='font-semibold py-5 text-xl ml-5 text-center'>ThesisMate</h1>
        <br /><br />
        <div className='flex flex-col gap-3'>
            <button className=' ml-5 px-2 rounded py-1 hover:bg-slate-300 text-left '>My Organization</button>
            <button className=' ml-5 px-2 rounded py-1 hover:bg-slate-300 text-left focus:text-'>Services</button>
            <button className=' ml-5 px-2 rounded py-1 hover:bg-slate-300 text-left '>Evaluate Dissertation</button>
            <button className=' ml-5 px-2 rounded py-1 hover:bg-slate-300 text-left '>Publication Management</button>
            <button className=' ml-5 px-2 rounded py-1 hover:bg-slate-300 text-left '>Help and Support</button>
            <button className=' ml-5 px-2 rounded py-1 hover:bg-slate-300 text-left '>Publication Management</button>
            <button className=' ml-5 px-2 rounded py-1 hover:bg-slate-300 text-left '>Logout</button>
        </div>
    </div>
  )
}

export default SidePanel