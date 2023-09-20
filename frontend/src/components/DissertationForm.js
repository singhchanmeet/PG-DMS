import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DissertationForm = () => {
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
    full_paper: null,
    // Assuming full_paper is not editable in the form
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const accessToken = localStorage.getItem('accessToken');
      // Make a POST request to your endpoint with formData
      const response = await axios.post('http://localhost:8000/dissertation/create/', formData, {
        headers: {
          'Authorization': `Bearer ${accessToken}`, // Add the token to the 'Authorization' header
          'Content-Type': 'multipart/form-data', // Adjust headers as needed
        }
      });

      if (response.status === 201) {
        // Dissertation created successfully
        alert('Dissertation created successfully');
        // Clear the form after successful submission if needed
        setFormData({
          title: '',
          author_name: '',
          journal_name: '',
          institute: '',
          abstract: '',
          medical_system: '',
          category: '',
          disease_related: '',
          keywords: '',
        });
      } else {
        alert('Failed to create dissertation');
      }
    } catch (error) {
      console.error('Error creating dissertation:', error);
      alert('An error occurred while creating the dissertation');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    setFormData({
      ...formData,
      full_paper: file, // Update the full_paper field with the selected file
    });
  };

  return (
    <form onSubmit={handleSubmit} className=' w-[90%] m-auto' encType="multipart/form-data">
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
      <div className="mb-4">
        <label className="block text-gray-700">Keywords (if any):</label>
        <input
          type="text"
          name="keywords"
          value={formData.keywords}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Abstract:</label>
        <input
          type="text"
          name="abstract"
          value={formData.abstract}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Related Diseases (if any):</label>
        <input
          type="text"
          name="disease_related"
          value={formData.disease_related}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Full Paper (PDF):</label>
        <input
          type="file"
          accept='application/pdf'
          name="full_paper"
          file={formData.full_paper}
          onChange={handleFileChange}
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
        />
      </div>
      {/* Continue adding input fields for the remaining dissertation attributes */}
      <button type="submit" className="w-full bg-blue-500 text-white hover:bg-blue-600 py-2 rounded-md focus:outline-none">
        Submit
      </button>
    </form>
  );
};

export default DissertationForm;
