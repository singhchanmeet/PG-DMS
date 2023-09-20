import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Explore = () => {
  const [dissertations, setDissertations] = useState([]);
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Fetch the latest dissertations
    axios.get('/api/latest-dissertations')
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
    <div className="flex">
      <div className="w-3/4 p-4">
        <h2 className="text-2xl font-semibold mb-4">Latest Dissertations</h2>
        <ul>
          {dissertations.map((dissertation) => (
            <li key={dissertation.id} className="mb-2">
              <a href={`/dissertations/${dissertation.id}`} className="text-blue-500 hover:underline">
                {dissertation.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-1/4 p-4">
        <h2 className="text-2xl font-semibold mb-4">News</h2>
        <ul>
          {news.map((article) => (
            <li key={article.id} className="mb-2">
              <a href={article.link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Explore;
