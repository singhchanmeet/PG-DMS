import React, { useState } from 'react';
import axios from 'axios';

const PlagCheck = () => {
  const [file, setFile] = useState(null);
  const [plagCheckResult, setPlagCheckResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('dissertation_pdf', file);

      setIsLoading(true);

      const response = await axios.post('http://localhost:8000/dissertation/plag-check/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        console.log('File uploaded successfully.');
        console.log(response.data);
        setPlagCheckResult(response.data.percent_plag[0]); // Extract the result object from the array
      } else {
        console.error('File upload failed.');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
          <br />
          <br />
          <label htmlFor="dissertation_pdf" className="text-pink-700 font-semibold p-1"> Select the plag check software</label>
          <select className='border-2 border-gray-600 p-2' name="" id="">
            <option value="">Default Plagcheck API</option>
            <option value="">Any Third Party api(Turnitin)</option>
          </select>
        <div className="mb-4">
          <br />
          <label htmlFor="dissertation_pdf" className="text-pink-700 font-semibold p-1">
            Upload Full Paper (PDF) to Plag check:
          </label>
          <input
            type="file"
            accept=".pdf"
            id="dissertation_pdf"
            name="dissertation_pdf"
            onChange={handleFileChange}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white hover:bg-blue-600 py-2 rounded-md focus:outline-none">
          Upload PDF
        </button>
      </form>

      {/* Conditional rendering based on loading state */}
      {isLoading && <p>Loading...</p>}

      {/* Conditional rendering based on result data */}
      {plagCheckResult && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Plagiarism Check Result:</h2>
          <ul>
            {Object.entries(plagCheckResult).map(([url, value]) => (
              <li key={url} className='text-pink-700'>
                From URL <span className='text-blue-400'><a href={url}> {url}</a></span>: Matches <span className='text-green-700'>{value}%</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PlagCheck;
