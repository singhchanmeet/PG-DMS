import React from 'react'
import graphwave from '../assets/Graph-wave.png'
import graphbar from '../assets/graphbar.png'
import graphlogo1 from '../assets/graphlogo1.png'
import graphlogo2 from '../assets/graphlogo2blue.png'
const NumberData = () => {
  return (
    <div className='flex gap-3  mx-3 my-2 p-2'>
        <div className="info-numbers flex px-2 py-3 bg-blue-500 shadow rounded text-white">
            <div className='flex flex-col '>
                <p>Total Disserations Under Evaluation</p>
                <p className='font-bold text-lg'>13</p>
            </div>
            <img className='w-20' src= {graphwave} alt="" />

        </div>
        <div className="info-numbers flex px-2 py-3 bg-orange-400 shadow rounded">
            <div className='flex flex-col '>
                <p>Registered Members</p>
                <p className='font-bold text-lg'>9</p>
            </div>
            <img className='w-20' src= {graphbar} alt="" />

        </div>
        <div className="info-numbers flex px-2 py-3 bg-indigo-400 shadow rounded">
            <div className='flex flex-col '>
                <p>Total Dissertations Published</p>
                <p className='font-bold text-lg'>2</p>
            </div>
            <img className='w-20' src= {graphlogo2} alt="" />

        </div>
        <div className="info-numbers flex px-2 py-3 bg-pink-400 shadow rounded ">
            <div className='flex flex-col '>
                <p>Dissertations Ready for Publication</p>
                <p className='font-bold text-lg'>7</p>
            </div>
            <img className='w-20' src= {graphlogo1} alt="" />

        </div>
    </div>
  )
}

export default NumberData