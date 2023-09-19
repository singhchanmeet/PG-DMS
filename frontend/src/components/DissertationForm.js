// DissertationForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DissertationForm = ({ dissertationId, onFormSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    author_name: '',
    // Add other fields here
  });

  useEffect(() => {
    if (dissertationId) {
      // Fetch data for an existing dissertation if editing
      axios.get(`/api/dissertations/${dissertationId}`)
        .then((response) => {
          setFormData(response.data);
        })
        .catch((error) => {
          console.error('Error fetching dissertation:', error);
        });
    }
  }, [dissertationId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form data to create or update the dissertation
    onFormSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />
      </div>
      {/* Add input fields for other dissertation attributes */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default DissertationForm;
