import React from 'react';
import StudentDashboard from './StudentDashboard';
import GuideDashboard from './GuideDashboard';
import UniversityDashboard from './UniversityDashboard';

const Dashboard = ({ user }) => {
  // Determine the user's role (you should have this information from the login process)
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
