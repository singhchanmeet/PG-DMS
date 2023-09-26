import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const LatestAddedThesis = () => {
    const [dissertations, setDissertations] = useState([]);
    const [news, setNews] = useState([]);
    const accessToken = localStorage.getItem('accessToken');

    useEffect(() => {
        // Fetch the latest dissertations
        axios.get('http://localhost:8000/dissertation/get/', {
            headers: {
              'Authorization': `Bearer ${accessToken}`, // Add the token to the 'Authorization' header
              'Content-Type': 'application/json', // Adjust headers as needed
            }
          })
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
        <div className="flex bg-white rounded  shadow p  mx-3 my-2 p-2">
            <div className=" p-4">
                <h2 className="text text-zinc-400 mb-4">Latest Added Dissertations</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th className='text-indigo-500 w-20 text-left border-b-[1px] pb-2 border-r-[1px] px-2 '>ID</th>
                            <th className='text-indigo-500 w-52 text-left border-b-[1px] pb-2 border-r-[1px] px-2 '>Title</th>
                            <th className='text-indigo-500 text-left border-b-[1px] pb-2 border-r-[1px] px-2 w-20'>Status</th>
                            <th className='text-indigo-500 text-left border-b-[1px] pb-2 border-r-[1px] px-2 w-20'>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dissertations.map((dissertation) => (
                            <tr key={dissertation.article_id}>
                                <td className='border-r-2 px-2'>{dissertation.article_id}</td>
                                <td className='border-r-2 px-2'>
                                    <Link to={`/dissertations/${dissertation.article_id}`} className="">
                                        {dissertation.title}
                                    </Link>
                                </td>
                                <td className='border-r-2 px-2'>
                                </td>
                                <td className=' px-2'>
                                {dissertation.created_at.slice(0, 10)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default LatestAddedThesis