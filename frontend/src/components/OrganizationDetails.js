import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SidePanel from './SidePanel';
import AnalyticNavbar from './AnalyticNavbar';

const OrganizationDetails = ({handleLogout}) => {
  const [studentData, setStudentData] = useState([]);
  const [guideData, setGuideData] = useState([]);
  const accessToken = localStorage.getItem('accessToken');
  useEffect(() => {
    // Fetch all students from your Django API
    axios.get('http://localhost:8000/university/all-students/', {
      headers: {
        'Authorization': `Bearer ${accessToken}`, // Add the token to the 'Authorization' header
        'Content-Type': 'application/json', // Adjust headers as needed
      }
    })
      .then((response) => {
        setStudentData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching student data:', error);
      });
  }, []);

  useEffect(() => {
    // Fetch all guides from your Django API
    axios.get('http://localhost:8000/university/all-guides/', {
      headers: {
        'Authorization': `Bearer ${accessToken}`, // Add the token to the 'Authorization' header
        'Content-Type': 'application/json', // Adjust headers as needed
      }
    })
      .then((response) => {
        setGuideData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching guide data:', error);
      });
  }, []);
  return (
    <div className='flex'>
      <div className=''>
        <SidePanel handleLogout={handleLogout}/>
      </div>
      <div className="flex-[70%] bg-blue-50">
        <AnalyticNavbar />
        <div className="w-[90%] m-auto">

          <h2 className="text-2xl py-5">Organization Details</h2>

          {/* Button to Register Member */}
          <Link to="/signup">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-4 rounded">
              Register Member
            </button>
          </Link>

          {/* Button to go back to /dashboard */}
          <Link to="/dashboard">
            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
              Back to Dashboard
            </button>
          </Link>

          {/* Display Student and Guide Details */}
          {/* Display guides */}

          <div className="mb-4 mt-7">
            <h3 className="text-xl font-semibold mb-2">Guides</h3>
            <ul>
              {guideData.map((guide) => (
                <li key={guide.id} className="mb-1">
                  {guide.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Display students */}

          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Students</h3>
            <ul>
              {studentData.map((student) => (
                <li key={student.id} className="mb-1">
                  {student.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationDetails;
