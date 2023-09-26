import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NewsCarousel from './NewsCarousel';
import news1 from '../assets/news1.jpg'
import news2 from '../assets/news2.png'
import news3 from '../assets/news3.jpg'
import Publications from './Publications';
import PublicationList from './PublicationList';
import AnalyticNavbar from './AnalyticNavbar';
import logo from "../assets/logo thesismate.png"

const Explore = ({ loggedin }) => {
  const [dissertations, setDissertations] = useState([]);
  const [news, setNews] = useState([]);

  const newsItems = [
    {
      title: 'News Item 1',
      imageSrc: { news1 }, // Update with the actual path to your image
      link: 'https://example.com/news1',
    },
    {
      title: 'News Item 2',
      imageSrc: { news2 }, // Update with the actual path to your image
      link: 'https://example.com/news2',
    },
    {
      title: 'News Item 3',
      imageSrc: { news3 }, // Update with the actual path to your image
      link: 'https://example.com/news3',
    },
    // Add more news items here
  ];

  useEffect(() => {
    // Fetch the latest dissertations
    axios.get('http://localhost:8000/dissertation/get-all/')
      .then((response) => {
        setDissertations(response.data);
      })
      .catch((error) => {
        console.error('Error fetching latest dissertations:', error);
      });

    // Fetch news articles
    axios.get('/api/news')
      .then((response) => {
        setNews(response.data);
      })
      .catch((error) => {
        console.error('Error fetching news:', error);
      });
  }, []);

  return (
    <div className="bg-gray-100 p-4 shadow-lg rounded ">
      {loggedin ? <div className='flex items-center justify-between'><div className='flex justify-center items-center '>
        <span>
          <img className='w-16' src={logo} alt="" />
        </span>
        <Link to={'/dashboard'}>
          <h1 className='font-semibold py-5  text-lg text-center'>ThesisMate</h1>
        </Link>
      </div>
        <Link to={'/dashboard'}>
          <span className='border-2 border-pink-700  p-1 rounded text-pink-700 font-semibold text-xl'>Dashboard</span>
        </Link>
        <AnalyticNavbar />
      </div>
        : null}
      <NewsCarousel newsItems={newsItems} />
      <div className="flex justify-between bg-red-50 rounded my-2">
        <PublicationList />
        <div className="w-1/5 p-4">
          <h2 className="text-2xl text-purple-600 font-semibold mb-4">News</h2>
          {/* Carousel for Latest News */}
          <div className="mb-4 bg-white p-4 shadow-lg rounded">
            {/* You can implement a carousel here */}
            {/* Sample News */}
            <div className="mb-2">
              <a href="#" className="text-pink-500 hover:underline" target="_blank" rel="noopener noreferrer">
                News Title 1
              </a>
            </div>
            <div className="mb-2">
              <a href="#" className="text-pink-500 hover:underline" target="_blank" rel="noopener noreferrer">
                News Title 2
              </a>
            </div>
            <div className="mb-2">
              <a href="#" className="text-pink-500 hover:underline" target="_blank" rel="noopener noreferrer">
                News Title 3
              </a>
            </div>
            {/* End of Sample News */}
          </div>
          {/* End of Carousel */}
          {/* News Column */}
          <div className="bg-white p-4 shadow-lg rounded">
            <h3 className="text-lg font-semibold mb-2 text-purple-600">News Column</h3>
            <ul>
              {news.map((article) => (
                <li key={article.id} className="mb-2">
                  <a href={article.link} className="text-pink-500 hover:underline" target="_blank" rel="noopener noreferrer">
                    {article.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* End of News Column */}
        </div>
      </div>

    </div>
  );
};

export default Explore;
