import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [dissertations, setDissertations] = useState(null);
  const [loading, setLoading] = useState(true);
  const accessToken = localStorage.getItem('accessToken');
  // let [authToken, setAuthToken] = useState(()=> localStorage.getItem('accessToken') ? JSON.parse(localStorage.getItem('accessToken')) : null)

  useEffect(() => {
    // Fetch the user details from your API
    axios.get('http://localhost:8000/dissertation/get/', {
			headers: {
				'Authorization': `Bearer ${accessToken}`, // Add the token to the 'Authorization' header
        'Content-Type': 'application/json', // Adjust headers as needed
			}
		})
      .then((response) => {
        // Response is coming successfully (checked by chanmeet)
        // TODO(Aman) : render the response
        console.log(response);    
        setDissertations(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching dissertation data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className='text-2xl text-center py-5 text-red-600 font-semibold'>Loading dissertation data...</p>;
  }

  if (!dissertations) {
    return <p className='text-2xl text-center py-5 text-red-600 font-semibold'>Error loading dissertation data</p>;
  }

  

  return (
    <div className='pt-10 w-[90%] m-auto'>
    <h2 className='text-xl font-sans'>Dissertations Published</h2>
    <ul>
      {dissertations.map((dissertation) => (
        
        <li key={dissertation.article_id}>
          <Link to={`/dissertations/${dissertation.article_id}`} className="text-blue-500 hover:underline">
            {dissertation.article_id}: {dissertation.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
  );
};

export default Dashboard;
