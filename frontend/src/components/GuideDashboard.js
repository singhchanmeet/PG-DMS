import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const GuideDashboard = ({ loggedInUser }) => {
  const [assignedStudents, setAssignedStudents] = useState([]);

  // Dummy URL to get the list of students assigned to the guide
  const studentsUrl = `/api/guide/${loggedInUser}/students`;

  useEffect(() => {
    // Fetch the list of students assigned to the guide based on the guide's ID
    axios.get(studentsUrl)
      .then((response) => {
        setAssignedStudents(response.data);
      })
      .catch((error) => {
        console.error('Error fetching assigned students:', error);
      });
  }, [studentsUrl]);

  return (
    <div className="w-[90%] m-auto">
      <h2 className="text-2xl font-semibold mb-4">Guide Dashboard</h2>
      <div className="flex gap-5">  
      <Link><button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded"
        >
        Manage Students
      </button>
      </Link>

      {/* Button to manage approvals */}
      <Link>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mt-4 rounded"
      >
        Manage Approvals
      </button>
      </Link>
      </div>
      <br />
      <h1 className='text-2xl py-5'>Assigned Students</h1>
      {/* <ul>
        {assignedStudents.map((student) => (
          <li key={student.id} className="mb-2">
            <a href={`/students/${student.id}`} className="text-blue-500 hover:underline">
              {student.name}
            </a>
          </li>
        ))}
      </ul> */}

      {/* Button to manage students under the guide */}
    </div>
  );
};

export default GuideDashboard;
