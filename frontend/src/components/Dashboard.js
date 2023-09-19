import React from 'react';
import StudentDashboard from './StudentDashboard';
import GuideDashboard from './GuideDashboard';
import UniversityDashboard from './UniversityDashboard';

const Dashboard = ({ user }) => {
  // Check if the user object is defined
  if (!user) {
    return <p>Loading user data...</p>;
  }

  // Determine the user's role
  const userRole = user.role;

  return (
    <div>
      <h2>Welcome, {user.username}!</h2>
      {/* Render the appropriate dashboard based on the user's role */}
      {userRole === 'student' && <StudentDashboard />}
      {userRole === 'guide' && <GuideDashboard />}
      {userRole === 'university' && <UniversityDashboard />}
    </div>
  );
};

export default Dashboard;
