import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Navbar from './components/navbar';
import Footer from './components/Footer'; 
import Home from './components/Home';
import Registration from './components/Registration';
function App() {

  return (
    <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Registration />} />
                <Route path="/dashboard" element={<Dashboard />} />
                {/* Add more routes as needed */}
            </Routes>
            <Footer />
        </Router>
  );
}

export default App;
