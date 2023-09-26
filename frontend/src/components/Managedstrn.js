import React, { useEffect, useState } from 'react';
import StudentPanel from './StudentPanel';
import AnalyticNavbar from './AnalyticNavbar';
import DissertationForm from './DissertationForm';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Managedstrn = ({ handleLogout }) => {
    const [showDissertationForm, setShowDissertationForm] = useState(true);
    const [showPublicationForm, setShowPublicationForm] = useState(false);

    const handleDissertationButtonClick = () => {
        setShowDissertationForm(true);
        setShowPublicationForm(false);
    };

    const handlePublicationButtonClick = () => {
        setShowDissertationForm(false);
        setShowPublicationForm(true);
    };

    const [dissertations, setDissertations] = useState([]);
    const [news, setNews] = useState([]);

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
        <>
            <AnalyticNavbar />
            <div className=' pt-10 w-[90%] bg-slate-200 p-2 shadow round m-auto' >
                <Link to={'/dashboard'}><button className='bg-purple-700 p-2 my-2 rounded shadow text-white hover:bg-purple-600 '>&lt;- Go Back</button></Link>
                <div className='flex ml-5 items-center'>

                    <div className=''>
                        <div className="mb-4">
                            <button
                                className="bg-blue-500 text-white px-4 py-2 mr-2 rounded"
                                onClick={handleDissertationButtonClick}
                            >
                                Create Dissertation
                            </button>
                            <button
                                className="bg-green-500 text-white px-4 py-2 rounded"
                                onClick={handlePublicationButtonClick}
                            >
                                Apply for Publication
                            </button>
                        </div>

                        {showDissertationForm && <DissertationForm />}
                        {showPublicationForm &&
                            <>
                                <div className="flex bg-white rounded  shadow p  mx-3 my-2 p-2">
                                    <div className=" p-4">
                                        <h2 className="text text-zinc-400 mb-4">Latest Added Dissertations</h2>
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th className='text-indigo-500 w-20 text-left border-b-[1px] pb-2 border-r-[1px] px-2 '>ID</th>
                                                    <th className='text-indigo-500 w-52 text-left border-b-[1px] pb-2 border-r-[1px] px-2 '>Title</th>
                                                    <th className='text-indigo-500 text-left border-b-[1px] pb-2  px-2 w-320'>Status</th>
                                              
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
                                                        <td className=' px-2'>
        <button className='font-mono text-purple-500 hover:text-pink-500 hover:underline'>Apply Now -&gt;</button>                                                </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>

                                    </div>
                                </div>
                            </>}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Managedstrn;
