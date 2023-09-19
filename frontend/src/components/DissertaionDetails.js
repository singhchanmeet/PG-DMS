// DissertationDetail.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DissertationDetail = ({ dissertationId }) => {
  const [dissertation, setDissertation] = useState(null);

  useEffect(() => {
    // Fetch details of a single dissertation record
    axios.get(`/api/dissertations/${dissertationId}`)
      .then((response) => {
        setDissertation(response.data);
      })
      .catch((error) => {
        console.error('Error fetching dissertation:', error);
      });
  }, [dissertationId]);

  if (!dissertation) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{dissertation.title}</h2>
      <p>Author: {dissertation.author_name}</p>
      {/* Display other dissertation details */}
    </div>
  );
};

export default DissertationDetail;
