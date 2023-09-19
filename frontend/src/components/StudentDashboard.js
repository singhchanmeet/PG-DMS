import React from 'react';
import DissertationList from './DissertationList'; // Adjust the import path as needed
import DissertationDetail from './DissertationDetail'; // Adjust the import path as needed
import DissertationForm from './DissertationForm'; // Adjust the import path as needed

const StudentDashboard = () => {
  return (
    <div>
      <h2>Student Dashboard</h2>

      {/* Render the DissertationList component to display a list of dissertations */}
      <DissertationList />

      {/* Render the DissertationDetail component to display details of a dissertation */}
      <DissertationDetail />

      {/* Render the DissertationForm component to create or edit dissertations */}
      <DissertationForm />
    </div>
  );
}

export default StudentDashboard;
