import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const UniversityDetails = () => {
  const [studentData, setStudentData] = useState([]);
  const [guideData, setGuideData] = useState([]);

  useEffect(() => {
    // Fetch all students from your Django API
    axios.get('https://localhost:8000/api/get-all-students/') // Update the URL
      .then((response) => {
        setStudentData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching student data:', error);
      });
  }, []);

  useEffect(() => {
    // Fetch all guides from your Django API
    axios.get('https://localhost:8000/api/get-all-guides/') // Update the URL
      .then((response) => {
        setGuideData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching guide data:', error);
      });
  }, []);

  return (
    <div>
      {/* Buttons for My Organization and Manage Thesis Approvals */}
      <div className="mb-4">
        <Link to="/my-organization">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-4 rounded">
            My Organization
          </button>
        </Link>
        <Link to="/manage-thesis-approvals">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Manage Thesis Approvals
          </button>
        </Link>
      </div>

      {/* Display guides */}
      <div className="mb-4">
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

export default UniversityDetails;
