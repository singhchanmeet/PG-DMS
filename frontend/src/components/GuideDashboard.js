import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import SideGuidePanel from './SideGuidePanel';
import ErrorPage from './ErrorPage';
import AnalyticNavbar from './AnalyticNavbar';
import GraphicalData from './GraphicalData';
import NumberData from './NumberData';

const GuideDashboard = ({ loggedin, handleLogout }) => {
  const navigate = useNavigate();

  // Check if the user is not logged in, then render the ErrorPage
  if (!loggedin) {
    return <ErrorPage />;
  }

  // If the user is logged in, render the dashboard
  return (
    <div className='flex'>
      <div className=''>
        <SideGuidePanel loggedin={loggedin } handleLogout={handleLogout}/>
      </div>
      <div className="flex-[70%] bg-blue-50">
        <AnalyticNavbar />
        <div className='flex flex-col'>
          <div className='flex items-center '>
            <div className=''>
              <GraphicalData />
            </div>
            <NumberData />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuideDashboard;
