import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ErrorPage from './ErrorPage';

const Feedback = ({ handleLogout, loggedin }) => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    // Fetch the feedbacks/inbox received on dissertations
    axios.get('http://localhost:8000/feedbacks', {
      // You may need to provide appropriate headers, such as Authorization, if required by your API
    })
      .then((response) => {
        setFeedbacks(response.data);
      })
      .catch((error) => {
        console.error('Error fetching feedbacks:', error);
      });
  }, []);

  if (!loggedin) {
    return <ErrorPage />;
  }

  return (
    <div className="p-4 bg-blue-50 ">
      <div className="flex bg-zinc-100 p-2 shadow rounded flex-col">
          <Link
            className="hover:bg-zinc-400 p-2 bg-indigo-500 text-white rounded shadow-lg mb-4 w-20"
            to={'/dashboard'}
          >
            Back
          </Link>
        <div className="flex-[70%] ">
          {/* Render the feedbacks */}
          <h2 className="text-2xl text-purple-700 font-semibold mb-4">Feedbacks/Inbox</h2>
          <table className="table">
            <thead>
              <tr>
                <th className="text-left w-40 border-r-2 px-2 border-zinc-400 border-b-2 font-normal text-pink-700 text-lg">Dissertation ID</th>
                <th className="text-left w-40 border-r-2 px-2 border-zinc-400 border-b-2 font-normal text-pink-700 text-lg">Verdict</th>
                <th className="text-left w-40 px-2 border-zinc-400 border-b-2 font-normal text-pink-700 text-lg">Date & Time Received</th>
              </tr>
            </thead>
            <tbody>
              {feedbacks.map((feedback) => (
                <tr key={feedback.id}>
                  <td className='border-r-2 border-zinc-400 font-normal'>{feedback.dissertationId}</td>
                  <td className='border-r-2 border-zinc-400 font-normal'>{feedback.verdict}</td>
                  <td className=' border-zinc-400 font-normal'>{feedback.dateTimeReceived}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
