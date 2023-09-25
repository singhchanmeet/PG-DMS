import React from 'react'
import SidePanel from './SidePanel'
import AnalyticNavbar from './AnalyticNavbar'

const AnalyticDashboard = () => {
    return (
        <div className='flex'>
            <div className=''>
            <SidePanel/>
            </div>
            <div className="flex-[70%] bg-blue-50">
                <AnalyticNavbar/>
                AnalyticDashboard
            </div>
        </div>
    )
}

export default AnalyticDashboard