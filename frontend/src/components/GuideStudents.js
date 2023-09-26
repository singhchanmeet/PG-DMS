import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ErrorPage from './ErrorPage';

const GuideStudents = ({ handleLogout, userRole }) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch the list of students under the guide
    axios.get('http://localhost:8000/guide/students', {
      // You may need to provide appropriate headers, such as Authorization, if required by your API
    })
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.error('Error fetching students:', error);
      });
  }, []);

  // if (!loggedin) {
  //   return <ErrorPage />;
  // }

  return (
    <div className="p-4 bg-blue-50 ">
      <div className="flex bg-zinc-100 p-2 shadow rounded flex-col">
          <Link
            className="hover:bg-zinc-400 p-2 bg-indigo-500 text-white rounded shadow-lg mb-4 w-20"
            to={'/dashboard'}
          >
            Back
          </Link>
          {/* Back Button */}
        <div className="flex-[70%] bg-blue-50">
          {/* Render the list of students */}
          <h2 className="text-purple-700 text-2xl font-semibold mb-4">Students under Guide</h2>
          <ul>
            {students.map((student) => (
              <li key={student.id} className="mb-2">
                {student.name}
              </li>
            ))}
          </ul> 
        </div>
      </div>
    </div>
  );
};

export default GuideStudents;
