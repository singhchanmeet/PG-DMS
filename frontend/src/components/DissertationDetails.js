// DissertationDetail.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DissertationDetail = ({ }) => {
  const [dissertation, setDissertation] = useState(null);
  const { dissertationId } = useParams();

  useEffect(() => {
    // Fetch details of a single dissertation record
    axios.get(`http://localhost:8000/dissertation/get/${dissertationId}/`)
      .then((response) => {
        setDissertation(response.data);
        console.log(response);
        // Response is coming successfully (checked by chanmeet)
        // TODO(Aman) : render the response
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
      <h2>Title: {dissertation.title}</h2>
      <p>Author: {dissertation.author_name}</p>
      <p>  Response is coming successfully (checked by chanmeet)
         TODO(Aman) : render the response
         Check console for the response</p>
      {/* Display other dissertation details */}
    </div>
  );
};

export default DissertationDetail;
