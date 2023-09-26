import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AnalyticNavbar from './AnalyticNavbar';

const MyDissertations = () => {
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
    <>
      <AnalyticNavbar />
       <br /> 
      <Link to={'/dashboard'}><button className='bg-purple-700 p-2 mx-2 rounded shadow text-white hover:bg-purple-600 '>&lt;- Go Back</button></Link>
      <div className="flex bg-white rounded  shadow p  mx-3 my-2 p-2">
        <div className=" p-4">
          <h2 className="text text-zinc-400 mb-4">Your Dissertations</h2>
          <table className="table">
            <thead>
              <tr>
                <th className='text-indigo-500 w-20 text-left border-b-[1px] pb-2 border-r-[1px] px-2 '>ID</th>
                <th className='text-indigo-500 w-52 text-left border-b-[1px] pb-2 border-r-[1px] px-2 '>Title</th>
                <th className='text-indigo-500 text-left border-b-[1px] pb-2 border-r-[1px] px-2 w-20'>Status</th>
                <th className='text-indigo-500 text-left border-b-[1px] pb-2 border-r-[1px] px-2 w-20'>Date</th>
              </tr>
            </thead>
            <tbody>
              {dissertations.map((dissertation) => (
                <tr key={dissertation.article_id}>
                  <td className='border-r-2 px-2'>{dissertation.article_id}</td>
                  <td className='border-r-2 px-2'>
                    <Link to={`/dissertations/${dissertation.article_id}`} className="">
                      {dissertation.title}
                    </Link>
                  </td>
                  <td className='border-r-2 px-2'>
                  </td>
                  <td className=' px-2'>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    </>
  );
};

export default MyDissertations;
