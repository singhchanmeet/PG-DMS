import React from 'react';

const UniversityDetails = () => {
  // You can fetch university-related data here using Axios or other methods
  // For this example, we'll use dummy data
  const universityData = {
    name: 'Sample University',
    guides: [
      { id: 1, name: 'Guide 1' },
      { id: 2, name: 'Guide 2' },
      // Add more guides as needed
    ],
    students: [
      { id: 1, name: 'Student 1' },
      { id: 2, name: 'Student 2' },
      // Add more students as needed
    ],
    dissertations: [
      { id: 1, title: 'Dissertation 1', author: 'Author 1' },
      { id: 2, title: 'Dissertation 2', author: 'Author 2' },
      // Add more dissertations as needed
    ],
  };

  return (
    <div>
      <h2>University Details - {universityData.name}</h2>

      {/* Display guides */}
      <div>
        <h3>Guides</h3>
        <ul>
          {universityData.guides.map((guide) => (
            <li key={guide.id}>{guide.name}</li>
          ))}
        </ul>
      </div>

      {/* Display students */}
      <div>
        <h3>Students</h3>
        <ul>
          {universityData.students.map((student) => (
            <li key={student.id}>{student.name}</li>
          ))}
        </ul>
      </div>

      {/* Display dissertations */}
      <div>
        <h3>Dissertations</h3>
        <ul>
          {universityData.dissertations.map((dissertation) => (
            <li key={dissertation.id}>
              {dissertation.title} by {dissertation.author}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UniversityDetails;
