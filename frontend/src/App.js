import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Registration from './components/Registration';
import DissertationForm from './components/DissertationForm';
import Explore from './components/Explore';
import MyDisserations from './components/MyDisserations';
import ProfileDetails from './components/ProfileDetails';
import DissertationDetail from './components/DissertationDetails';
import RegistrationUni from './components/RegistrationUni';
import OrganizationDetails from './components/OrganizationDetails';
import ManageApproval from './components/ManageApproval';
import AnalyticDashboard from './components/AnalyticDashboard';
import AnalyticNavbar from './components/AnalyticNavbar';
import SidePanel from './components/SidePanel';
import GraphicalData from './components/GraphicalData';
import Evaluation from './components/Evaluation';
import Publications from './components/Publications';
import Help from './components/Help';
import ErrorPage from './components/ErrorPage';
import Managedstrn from './components/Managedstrn';
import axios from 'axios';
import GuideStudents from './components/GuideStudents';
import Feedback from './components/Feedback';
import PlagCheck from './components/PlagCheck';

function App() {
  // Initialize the loggedin state as false
  const [loggedin, setLoggedin] = useState(Boolean(localStorage.getItem('loggedin')));
  
    // Function to set loggedin state to true
    const handleLogin = () => {
      localStorage.setItem('loggedin', 'true');
      setLoggedin(true);
    };
    // Function to set loggedin state to false (for logout, if needed)
    const handleLogout = () => {
      localStorage.removeItem('loggedin'); // Remove the key
      setLoggedin(false); // Update the state
    };

    return (
      <Router>
        {loggedin ? (null) : (<Navbar loggedin={loggedin} handleLogout={handleLogout} />)}

        <Routes>
          <Route path="/" element={<Home loggedin={loggedin}/>} />

          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
          <Route path="/signup" element={<Registration />} />
          <Route path="/dashboard" element={<Dashboard handleLogout={handleLogout} loggedin={loggedin} />} />
          <Route path="/explore" element={<Explore handleLogout={handleLogout} loggedin={loggedin} />} />
          <Route path="/mydissertations" element={<MyDisserations loggedin={loggedin} handleLogout={handleLogout} />} />
          <Route path="/dissertations/:dissertationId" element={<DissertationDetail handleLogout={handleLogout} />} />
          <Route path="/profile/username" element={<ProfileDetails loggedin={loggedin} handleLogout={handleLogout} />} />
          <Route path="/organization" element={<OrganizationDetails loggedin={loggedin} handleLogout={handleLogout} />} />
          <Route path="/registrationuni" element={< RegistrationUni loggedin={loggedin} handleLogout={handleLogout} />} />
          <Route path="/evaluation" element={<Evaluation loggedin={loggedin} handleLogout={handleLogout} />} />
          <Route path="/publication" element={<Publications loggedin={loggedin} handleLogout={handleLogout} />} />
          <Route path="/help" element={<Help loggedin={loggedin} handleLogout={handleLogout} />} />
          <Route path="/managedstrn" element={<Managedstrn loggedin={loggedin} handleLogout={handleLogout} />} />
          <Route path="/guidestds" element={<GuideStudents loggedin={loggedin} handleLogout={handleLogout} />} />
          <Route path="/feedbacks" element={<Feedback loggedin={loggedin} handleLogout={handleLogout} />} />
          <Route path="/error" element={<ErrorPage />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </Router>
    );
  }

export default App;
