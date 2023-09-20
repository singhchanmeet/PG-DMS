// DissertationList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DissertationList = () => {
  const [dissertations, setDissertations] = useState([]);

  useEffect(() => {
    // Fetch a list of dissertation records
    axios.get('/api/dissertations')
      .then((response) => {
        setDissertations(response.data);
      })
      .catch((error) => {
        console.error('Error fetching dissertations:', error);
      });
  }, []);

  // const handleDelete = (dissertationId) => {
  //   // Delete a dissertation record
  //   axios.delete(`/api/dissertations/${dissertationId}`)
  //     .then(() => {
  //       // Remove the deleted item from the list
  //       setDissertations(dissertations.filter((item) => item.article_id !== dissertationId));
  //     })
  //     .catch((error) => {
  //       console.error('Error deleting dissertation:', error);
  //     });
  // };

  return (
    <div className='pt-10 w-[90%] m-auto'>
      <h2 className='text-xl font-sans'>Dissertations Published</h2>
      <ul>
        {dissertations.map((dissertation) => (
          <li key={dissertation.article_id}>
            <span>{dissertation.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DissertationList;
