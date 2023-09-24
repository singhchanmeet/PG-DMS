import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const OrganizationDetails = () => {
    const [studentData, setStudentData] = useState([]);
    const [guideData, setGuideData] = useState([]);
  
    useEffect(() => {
      // Fetch all students from your Django API
      axios.get('https://localhost:8000/api/get-all-students/')
        .then((response) => {
          setStudentData(response.data);
        })
        .catch((error) => {
          console.error('Error fetching student data:', error);
        });
    }, []);
  
    useEffect(() => {
      // Fetch all guides from your Django API
      axios.get('https://localhost:8000/api/get-all-guides/')
        .then((response) => {
          setGuideData(response.data);
        })
        .catch((error) => {
          console.error('Error fetching guide data:', error);
        });
    }, []);
  return (
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
  );
};

export default OrganizationDetails;
