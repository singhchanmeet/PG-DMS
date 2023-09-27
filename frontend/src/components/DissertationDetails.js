import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import SidePanel from './SidePanel';
import AnalyticNavbar from './AnalyticNavbar';
import ErrorPage from './ErrorPage';
import PlagCheck from './PlagCheck';

const DissertationDetail = ({ handleLogout, loggedin }) => {
  const [dissertation, setDissertation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [feedback, setFeedback] = useState('');
  const { dissertationId } = useParams();
  const [user, setUser] = useState(null);
  const accessToken = localStorage.getItem('accessToken');

  // const [user, setUser] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const accessToken = localStorage.getItem('accessToken');

  const [formData, setFormData] = useState({
    article_id: dissertationId,
    feedback: '',
    // Add more fields as needed for each user type
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

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
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });

    // Fetch details of a single dissertation record
    axios
      .get(`http://localhost:8000/dissertation/get/${dissertationId}/`)
      .then((response) => {
        setDissertation(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.error('Error fetching dissertation:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [dissertationId, accessToken]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const accessToken = localStorage.getItem('accessToken');
      // Send the registration data to the backend for processing

      const response = await axios.post('http://localhost:8000/dissertation/feedback/', formData, {
        headers: {
          'Authorization': `Bearer ${accessToken}`, // Add the token to the 'Authorization' header
          'Content-Type': 'application/json', // Adjust headers as needed
        }
      });
      console.log('Feedback successful:', response.data);
      alert("Feedback Submitted.")
    } catch (error) {
      console.error('Feeback submission failed:', error);
    }
  };


  const handleApprove = async () => {
    // Handle approval logic (e.g., send a request to approve the dissertation)
    // You can implement this based on your backend requirements.
    try {
      const accessToken = localStorage.getItem('accessToken');
      // Send the registration data to the backend for processing

      const response = await axios.post('http://localhost:8000/dissertation/approve/', { 'article_id': dissertationId, 'approve': 1 }, {
        headers: {
          'Authorization': `Bearer ${accessToken}`, // Add the token to the 'Authorization' header
          'Content-Type': 'application/json', // Adjust headers as needed
        }
      });
      console.log('approval successful:', response.data);
      alert("Approval Given Successfully.")
    } catch (error) {
      console.error('Approval failed:', error);
    }
  };

  const handleReject = async () => {
    // Handle rejection logic (e.g., send a request to reject the dissertation)
    // You can implement this based on your backend requirements.
    try {
      const accessToken = localStorage.getItem('accessToken');
      // Send the registration data to the backend for processing

      const response = await axios.post('http://localhost:8000/dissertation/approve/', { 'article_id': dissertationId, 'approve': 0 }, {
        headers: {
          'Authorization': `Bearer ${accessToken}`, // Add the token to the 'Authorization' header
          'Content-Type': 'application/json', // Adjust headers as needed
        }
      });
      console.log('approval rejection successful:', response.data);
      alert("Approval Rejected Successfully.")
    } catch (error) {
      console.error('Approval rejection failed:', error);
    }
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

              {/* Conditional rendering of university feedback */}
              {dissertation.university_feedback !== '' && (
                <div className="mt-4">
                  <p className="text-xl font-semibold mb-2">Latest feedback by the University:</p>
                  <p className="text-gray-600">{dissertation.university_feedback}</p>
                </div>
              )}

              {/* Conditional rendering of guide feedback */}
              {dissertation.guide_feedback !== '' && (
                <div className="mt-4">
                  <p className="text-xl font-semibold mb-2">Latest feedback by Guide:</p>
                  <p className="text-gray-600">{dissertation.guide_feedback}</p>
                </div>
              )}
              <PlagCheck/>

              {/* Conditional rendering of feedback form and approval/rejection buttons based on user role */}
              {user && user.role !== 'STUDENT' && (
                <div>
                  <form onSubmit={handleSubmit} className="max-w-sm">
                    {/* Feedback */}
                    <div className="mt-4">
                      <h3 className="text-xl font-semibold mb-2">Feedback</h3>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:shadow-outline"
                        placeholder="Provide feedback..."
                        name="feedback"
                        value={formData.feedback}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="">
                      <button
                        type="submit"
                        className="bg-blue-500 text-white hover:bg-blue-600 rounded px-4 py-2 my-2"
                      >
                        Send Feedback
                      </button>
                    </div>
                  </form>
                  {/* Approval/Rejection Buttons */}
                  {/* If not accepted , then we will show the accept button */}
                  {/* If not accepted, then show the accept button */}
                  {user && user.role === 'GUIDE' && dissertation.approved_by_guide === false && (
                    <button
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 mr-2 rounded"
                      onClick={handleApprove}
                    >
                      Approve
                    </button>
                  )}

                  {/* If already accepted, then show a message */}
                  {user && user.role === 'GUIDE' && dissertation.approved_by_guide === true && (
                    <div className="mt-4">
                      <p className="text-xl font-semibold mb-2">You have approved this dissertation</p>
                    </div>
                  )}

                  {/* If not accepted, then show the accept button */}
                  {user && user.role === 'UNIVERSITY' && dissertation.approved_by_university === false && (
                    <button
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 mr-2 rounded"
                      onClick={handleApprove}
                    >
                      Approve
                    </button>
                  )}

                  {/* If already accepted, then show a message */}
                  {user && user.role === 'UNIVERSITY' && dissertation.approved_by_university === true && (
                    <div className="mt-4">
                      <p className="text-xl font-semibold mb-2">You have approved this dissertation</p>
                    </div>
                  )}
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                    onClick={handleReject}
                  >
                    Reject
                  </button>
                </div>
              )}
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