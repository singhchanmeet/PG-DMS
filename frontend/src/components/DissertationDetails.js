import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import SidePanel from './SidePanel';
import AnalyticNavbar from './AnalyticNavbar';
import ErrorPage from './ErrorPage';

const DissertationDetail = ({ handleLogout, loggedin }) => {
  const [dissertation, setDissertation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [feedback, setFeedback] = useState('');
  const { dissertationId } = useParams();
  const [user, setUser] = useState(null);
  const accessToken = localStorage.getItem('accessToken');

  useEffect(() => {
    // Fetch the user details from your API
    axios.get('http://localhost:8000/auth/user-details/', {
      headers: {
        'Authorization': `Bearer ${accessToken}`, // Add the token to the 'Authorization' header
        'Content-Type': 'application/json', // Adjust headers as needed
      }
    })
      .then((response) => {
        // Assuming the API response contains user data
        setUser(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });

    // Fetch details of a single dissertation record
    axios
      .get(`http://localhost:8000/dissertation/get/${dissertationId}/`)
      .then((response) => {
        setDissertation(response.data);
      })
      .catch((error) => {
        console.error('Error fetching dissertation:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [dissertationId, accessToken]);

  const handleApprove = () => {
    // Handle approval logic (e.g., send a request to approve the dissertation)
    // You can implement this based on your backend requirements.
    console.log('Dissertation Approved');
  };

  const handleReject = () => {
    // Handle rejection logic (e.g., send a request to reject the dissertation)
    // You can implement this based on your backend requirements.
    console.log('Dissertation Rejected');
  };

  if (loading) {
    return <p>Loading... Please wait</p>
  }

  if (!user) {
    return <p>Please wait loading</p>
  }

  const userRole = user.role;

  // if (!loggedin) {
  //   return <ErrorPage />;
  // }

  return (
    <div className="p-4">
      <div className="flex">
        
        <div className="flex-[70%] bg-blue-50">
          
          {dissertation ? (
            <div className="bg-white p-4 rounded shadow-lg">
              <Link
                className="hover:bg-zinc-400 p-2 bg-indigo-500 text-white rounded shadow-lg"
                to={'/dashboard'}
              >
                Go back
              </Link>

              <h2 className="mt-5 text-2xl font-semibold mb-2">
                Title: {dissertation.title}
              </h2>
              <p className="text-gray-600">Author: {dissertation.author_name}</p>
              <p className="text-gray-600">Abstract: {dissertation.abstract}</p>
              <p className="text-gray-600">Article ID: {dissertation.article_id}</p>
              {/* Display other dissertation details */}

              {/* Plagiarism Check Report */}
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2">
                  Plagiarism Check Report
                </h3>
                <p className="text-gray-600">
                  Plagiarism check result: {dissertation.plagiarism_check_result}
                </p>
              </div>

              {userRole === 'GUIDE' || userRole === 'UNIVERSITY' ? (
                <>
                  {/* Feedback and Approval/Rejection */}
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold mb-2">Feedback</h3>
                    <textarea
                      rows="4"
                      className="w-full px-3 py-2 border rounded focus:outline-none focus:shadow-outline"
                      placeholder="Provide feedback..."
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                    ></textarea>
                  </div>

                  {/* Approval/Rejection Buttons */}
                  <div className="mt-4">
                    <button
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 mr-2 rounded"
                      onClick={handleApprove}
                    >
                      Approve
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                      onClick={handleReject}
                    >
                      Reject
                    </button>
                  </div>
                </>
              ) : null}
            </div>
          ) : (
            <p className="text-center">Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DissertationDetail;
