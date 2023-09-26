import React from 'react';
import { Link } from 'react-router-dom';
import Explore from './Explore';

const Home = ({loggedin}) => {
  const accessToken = localStorage.getItem('access')
  return (
    <Explore loggedin={loggedin}/>
  );
};

export default Home;
