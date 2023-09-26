import React from 'react';
import SidePanel from './SidePanel';
import AnalyticNavbar from './AnalyticNavbar';
import GraphicalData from './GraphicalData';
import NumberData from './NumberData';
import LatestAddedThesis from './LatestAddedThesis';
import ErrorPage from './ErrorPage';
import { useNavigate } from 'react-router-dom';

const AnalyticDashboard = ({ loggedin ,handleLogout}) => {
  const navigate = useNavigate();

  // Check if the user is not logged in, then render the ErrorPage
  if (!loggedin) {
    return <ErrorPage />;
  }

  // If the user is logged in, render the dashboard
  return (
    <div className='flex'>
      <div className=''>
        <SidePanel handleLogout={handleLogout}/>
      </div>
      <div className="flex-[70%] bg-blue-50">
        <AnalyticNavbar />
        <div className='flex flex-col'>
          <div className='flex justify-between h-[500px]'>
            <div className='flex-[500px]'>
              <GraphicalData />
            </div>
            <LatestAddedThesis />
          </div>
          <NumberData />
        </div>
      </div>
    </div>
  );
}

export default AnalyticDashboard;
