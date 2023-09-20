import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GuideDashboard = ({ loggedInUser }) => {
  const [assignedStudents, setAssignedStudents] = useState([]);

  // useEffect(() => {
  //   // Fetch the list of students assigned to the guide based on the guide's ID
  //   axios.get(`/api/guide/${loggedInUser.id}/students`)
  //     .then((response) => {
  //       setAssignedStudents(response.data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching assigned students:', error);
  //     });
  // }, [loggedInUser.id]);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Guide Dashboard</h2>
      <ul>
        {assignedStudents.map((student) => (
          <li key={student.id} className="mb-2">
            <a href={`/students/${student.id}`} className="text-blue-500 hover:underline">
              {student.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GuideDashboard;
