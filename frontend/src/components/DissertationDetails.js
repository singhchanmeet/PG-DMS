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
      <p>Abstract: {dissertation.abstract}</p>
      <p>Article ID: {dissertation.article_id}</p>
      <p>Author ID: {dissertation.author_id.join(', ')}</p>
      <p>Category: {dissertation.category}</p>
      <p>Disease Related: {dissertation.disease_related}</p>
      <p>Institute: {dissertation.institute}</p>
      <p>Journal Name: {dissertation.journal_name}</p>
      <p>Keywords: {dissertation.keywords}</p>
      <p>Medical System: {dissertation.medical_system}</p>
      {/* Display other dissertation details */}
    </div>
  );
};

export default DissertationDetail;
