import React, { useState } from 'react';
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

function App() {
  // Initialize the loggedin state as false
  const [loggedin, setLoggedin] = useState(Boolean(localStorage.getItem('loggedin')));

  // Function to set loggedin state to true
  const handleLogin = () => {
    localStorage.setItem('loggedin', 'true');
  };

  // Function to set loggedin state to false (for logout, if needed)
  const handleLogout = () => {
    setLoggedin(false);
  };

  return (
    <Router>
      <Navbar loggedin={loggedin} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/dashboard" element={<Dashboard loggedin={loggedin} />} />
        <Route path="/dstrn-create" element={<DissertationForm loggedin={loggedin} />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/mydissertations"element={<MyDisserations loggedin={loggedin} />} />
        <Route path="/profile/username"element={<ProfileDetails loggedin={loggedin} />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
