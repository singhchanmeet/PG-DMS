import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DissertationForm = ({ dissertationId, onFormSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    author_name: '',
    journal_name: '',
    institute: '',
    abstract: '',
    medical_system: '', // Initialize with an empty string
    category: '', // Initialize with an empty string
    disease_related: '',
    keywords: '',
    // Assuming full_paper is not editable in the form
  });

  useEffect(() => {
    if (dissertationId) {
      // Fetch data for an existing dissertation if editing
      axios.get(`http://localhost:8000/api/dissertations/${dissertationId}/`)
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
    <form onSubmit={handleSubmit} className=' w-[90%] m-auto'>
      <div className="mb-4">
        <label className="block text-gray-700">Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Author Name:</label>
        <input
          type="text"
          name="author_name"
          value={formData.author_name}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Journal Name:</label>
        <input
          type="text"
          name="journal_name"
          value={formData.journal_name}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Institute:</label>
        <input
          type="text"
          name="institute"
          value={formData.institute}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
        />
      </div>
      {/* Add input fields for other dissertation attributes */}
      <div className="mb-4">
        <label className="block text-gray-700">Medical System:</label>
        <select
          name="medical_system"
          value={formData.medical_system}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
        >
          <option value="">Select Medical System</option>
          <option value="AYURVEDA">Ayurveda</option>
          <option value="YOGA_AND_NATUROPATHY">Yoga & Naturopathy</option>
          <option value="UNANI">Unani</option>
          <option value="SIDDHA">Siddha</option>
          <option value="HOMOEOPATHY">Homoeopathy</option>
          <option value="SOWARIGPA">Sowarigpa</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Category:</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
        >
          <option value="">Select Category</option>
          <option value="PRECLINICAL_RESEARCH">Preclinical Research</option>
          <option value="CLINICAL_RESEARCH_GRADE_A">Clinical Research (Evidence Grade A)</option>
          <option value="CLINICAL_RESEARCH_GRADE_B">Clinical Research (Evidence Grade B)</option>
          <option value="CLINICAL_RESEARCH_GRADE_C">Clinical Research (Evidence Grade C)</option>
          <option value="FUNDAMENTAL_RESEARCH">Fundamental Research</option>
          <option value="DRUG_RESEARCH">Drug Research</option>
        </select>
      </div>
      {/* Continue adding input fields for the remaining dissertation attributes */}
      <button type="submit" className="w-full bg-blue-500 text-white hover:bg-blue-600 py-2 rounded-md focus:outline-none">
        Submit
      </button>
    </form>
  );
};

export default DissertationForm;
