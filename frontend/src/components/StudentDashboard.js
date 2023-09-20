import React from 'react';
import DissertationList from './DissertationList'; // Adjust the import path as needed
import DissertationDetail from './DissertationDetails'; // Adjust the import path as needed
import DissertationForm from './DissertationForm'; // Adjust the import path as needed
import { Link, useNavigate } from 'react-router-dom';

const StudentDashboard = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleCreateButtonClick = () => {
    // Navigate to the /dstrn-create URL when the button is clicked
    navigate('/dstrn-create');
  };

  return (
    <div>
      <div className='flex justify-between items-center w-[90%]'>

      <h2 className='text-2xl text-blue-700 ml-16'>Student Dashboard</h2>
      <button
        onClick={handleCreateButtonClick}
        className="bg-blue-500 text-white hover:bg-blue-600 py-2 px-4 rounded-md mt-4 ml-16"
        >Publish a Thesis</button>
        <Link to="/mydissertations" className="bg-blue-500 text-white hover:bg-blue-600 py-2 px-4 rounded-md mt-4 ml-16">
        Your Dissertations
      </Link>
      </div>
      {/* Render the DissertationList component to display a list of dissertations */}
      <DissertationList />

      {/* Render the DissertationDetail component to display details of a dissertation */}
      {/* <DissertationDetail /> */}
      
    </div>
  );
}

export default StudentDashboard;
