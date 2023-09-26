import React from 'react';
import DissertationList from './DissertationList'; // Adjust the import path as needed
import DissertationDetail from './DissertationDetails'; // Adjust the import path as needed
import DissertationForm from './DissertationForm'; // Adjust the import path as needed
import { Link, Route, useNavigate } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import AnalyticNavbar from './AnalyticNavbar';
import StudentPanel from './StudentPanel';
import GraphicalData from './GraphicalData';
import NumberData from './NumberData';
import LatestAddedThesis from './LatestAddedThesis';
import MyDissertations from './MyDisserations';

const StudentDashboard = ({ loggedin, handleLogout }) => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleCreateButtonClick = () => {
    // Navigate to the /dstrn-create URL when the button is clicked
    navigate('/dstrn-create');
  };

  // Check if the user is not logged in, then render the ErrorPage
  if (!loggedin) {
    return <ErrorPage />;
  }

  // If the user is logged in, render the dashboard
  return (
    <div className='flex'>
      <div className=''>
        <StudentPanel handleLogout={handleLogout}/>
      </div>
      <div className="flex-[70%] bg-blue-50">
        <AnalyticNavbar />
        <div className='flex flex-col'>
          <div className='flex items-center'>
            <div className=''>
              <GraphicalData />
            </div>
            <div>
              <NumberData />
            </div>
          </div>
            {/* <Link to={'/mydissertations'}><button className='bg-pink-600 text-white p-2 rounded shadow hover:bg-pink-500 h-10 w'>Manage Your Dissertations</button></Link> */}
        </div>
      </div>
    </div>
    // <div className='flex'>
    //   <div className=''>
    //     <StudentPanel handleLogout={handleLogout} />
    //   </div>
    //   <div className="flex-[70%] bg-blue-50">
    //     <AnalyticNavbar />
    //     <div className='flex flex-col'>
    //       <div className='flex justify-between h-[500px]'>
    //         <div className='flex-[500px]'>
    //           <GraphicalData />
    //         </div>
    //       </div>
    //       <NumberData />
    //       <div className='flex justify-between items-center w-[90%]'>

    //         <h2 className='text-2xl text-blue-700 ml-16'>Student Dashboard</h2>
    //         <button
    //           onClick={handleCreateButtonClick}
    //           className="bg-blue-500 text-white hover:bg-blue-600 py-2 px-4 rounded-md mt-4 ml-16"
    //         >Publish a Thesis</button>
    //         <Link to="/mydissertations" className="bg-blue-500 text-white hover:bg-blue-600 py-2 px-4 rounded-md mt-4 ml-16">
    //           Your Dissertations
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default StudentDashboard;
