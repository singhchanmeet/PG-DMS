import React, { useState, useEffect } from 'react';
import StudentDashboard from './StudentDashboard';
import GuideDashboard from './GuideDashboard';
import UniversityDashboard from './UniversityDashboard';
import axios from 'axios';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(localStorage.getItem('accessToken'))
  const accessToken = localStorage.getItem('accessToken');
  // let [authToken, setAuthToken] = useState(()=> localStorage.getItem('accessToken') ? JSON.parse(localStorage.getItem('accessToken')) : null)

  useEffect(() => {
    // Fetch the user details from your API
    axios.get('http://localhost:8000/auth/user-details/', {
			headers: {
				'Authorization': `Bearer ${accessToken}`, // Add the token to the 'Authorization' header
        'Content-Type': 'application/json', // Adjust headers as needed
			}
		})
      .then((response) => {
        // Assuming the API response contains user data
        setUser(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading user data...</p>;
  }

  if (!user) {
    return <p>Error loading user data</p>;
  }

  // Determine the user's role
  const userRole = user.role;

  return (
    <div>
      <h2>Welcome, {user.username}!</h2>
      {/* Render the appropriate dashboard based on the user's role */}
      {userRole === 'STUDENT' && <StudentDashboard />}
      {userRole === 'GUIDE' && <GuideDashboard />}
      {userRole === 'UNIVERSITY' && <UniversityDashboard />}
    </div>
  );
};

export default Dashboard;
