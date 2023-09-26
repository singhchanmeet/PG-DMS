import React, { useEffect, useState } from 'react';
import AnalyticNavbar from './AnalyticNavbar';
import SidePanel from './SidePanel';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ErrorPage from './ErrorPage';

const Evaluation = ({ loggedin,handleLogout }) => {
    const [activeSection, setActiveSection] = useState('pendingApprovals');

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    const [dissertations, setDissertations] = useState([]);
    const [news, setNews] = useState([]);
    const accessToken = localStorage.getItem('accessToken');

    useEffect(() => {
        // Fetch data based on the active section
        const fetchData = async () => {
            try {
                if (activeSection === 'pendingApprovals') {
                    // Fetch data for 'pendingApprovals'
                    const response = await axios.get('http://localhost:8000/dissertation/pending-approvals/', {
                        headers: {
                            'Authorization': `Bearer ${accessToken}`,
                            'Content-Type': 'application/json',
                        },
                    });
                    setDissertations(response.data);
                } else if (activeSection === 'pendingPublications') {
                    // Fetch data for 'pendingPublications'
                    const response = await axios.get('http://localhost:8000/dissertation/pending-publications/', {
                        headers: {
                            'Authorization': `Bearer ${accessToken}`,
                            'Content-Type': 'application/json',
                        },
                    });
                    setDissertations(response.data);
                } else if (activeSection === 'completedApprovals') {
                    // Fetch data for 'completedApprovals'
                    const response = await axios.get('http://localhost:8000/dissertation/completed-approvals/', {
                        headers: {
                            'Authorization': `Bearer ${accessToken}`,
                            'Content-Type': 'application/json',
                        },
                    });
                    setDissertations(response.data);
                } else if (activeSection === 'completedPublications') {
                    // Fetch data for 'completedPublications'
                    const response = await axios.get('http://localhost:8000/dissertation/completed-publications/', {
                        headers: {
                            'Authorization': `Bearer ${accessToken}`,
                            'Content-Type': 'application/json',
                        },
                    });
                    setDissertations(response.data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [activeSection, accessToken]);

    // Check if the user is not logged in, then render the ErrorPage
    if (!loggedin) {
        return <ErrorPage />;
    }
    return (
        <div className=''>
            <div className='flex'>
                <div className=''>
                    <SidePanel handleLogout={handleLogout} />
                </div>
                <div className="flex-[70%] bg-blue-50">
                    <AnalyticNavbar />

                    <div className="mb-4 bg-white rounded  shadow p  mx-3 my-2 p-2">
                        <button
                            className={`mr-3 my-[1px] px-2 py-1 rounded-sm ${activeSection === 'pendingApprovals' ? 'bg-purple-500 text-white' : 'bg-gray-300'}`}
                            onClick={() => handleSectionChange('pendingApprovals')}
                        >
                            Pending Approvals
                        </button>
                        <button
                            className={`mr-3 my-[1px] px-2 py-1 rounded-sm ${activeSection === 'pendingPublications' ? 'bg-purple-500 text-white' : 'bg-gray-300'}`}
                            onClick={() => handleSectionChange('pendingPublications')}
                        >
                            Pending Publications
                        </button>
                        <button
                            className={`mr-3 my-[1px] px-2 py-1 rounded-sm ${activeSection === 'completedApprovals' ? 'bg-purple-500 text-white' : 'bg-gray-300'}`}
                            onClick={() => handleSectionChange('completedApprovals')}
                        >
                            Completed Approvals
                        </button>
                        <button
                            className={`mr-3 my-[1px] px-2 py-1 rounded-sm ${activeSection === 'completedPublications' ? 'bg-purple-500 text-white' : 'bg-gray-300'}`}
                            onClick={() => handleSectionChange('completedPublications')}
                        >
                            Completed Publications
                        </button>
                    </div>
                    <div>
                        {/* Render the  based on the activeSection */}
                        {activeSection === 'pendingApprovals' && (
                            <div>
                                {/*  for pending approvals */}
                                {/* You can replace this with your actual  */}

                                <div className="flex bg-white rounded  shadow p  mx-3 my-2 p-2">
                                    <div className=" p-4">
                                        <h2 className="text text-zinc-400 mb-4"><p>Pending Approvals </p></h2>
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th className='text-indigo-500 w-20 text-left border-b-[1px] pb-2 border-r-[1px] px-2 '>ID</th>
                                                    <th className='text-indigo-500 w-52 text-left border-b-[1px] pb-2 border-r-[1px] px-2 '>Title</th>
                                                    <th className='text-indigo-500 text-left border-b-[1px] pb-2 border-r-[1px] px-2 w-32'>Status</th>
                                                    <th className='text-indigo-500 text-left border-b-[1px] pb-2 border-r-[1px] px-2 w-20'>Date</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {dissertations.map((dissertation) => (
                                                    <tr key={dissertation.article_id}>
                                                        <td className='border-r-2 px-2 font-mono text-gray-500'>{dissertation.article_id}</td>
                                                        <td className='border-r-2 px-2'>
                                                            <Link to={`/dissertations/${dissertation.article_id}`} className="text-gray-700  hover:text-pink-600">
                                                                {dissertation.title}
                                                            </Link>
                                                        </td>
                                                        <td className='border-r-2 px-2'>
                                                            <Link to={`/dissertations/${dissertation.article_id}`} className="text-purple-700 hover:underline font-mono hover:text-pink-600">
                                                                Evaluate-&gt;
                                                            </Link>
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
                            </div>
                        )}
                        {activeSection === 'pendingPublications' && (
                            <div>
                                {/*  for completed approvals */}
                                {/* You can replace this with your actual  */}
                                <div className="flex bg-white rounded  shadow p  mx-3 my-2 p-2">
                                    <div className=" p-4">
                                        <h2 className="text text-zinc-400 mb-4"><p>Pending Publications </p></h2>
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th className='text-indigo-500 w-20 text-left border-b-[1px] pb-2 border-r-[1px] px-2 '>ID</th>
                                                    <th className='text-indigo-500 w-52 text-left border-b-[1px] pb-2 border-r-[1px] px-2 '>Title</th>
                                                    <th className='text-indigo-500 text-left border-b-[1px] pb-2 border-r-[1px] px-2 w-32'>Status</th>
                                                    <th className='text-indigo-500 text-left border-b-[1px] pb-2 border-r-[1px] px-2 w-20'>Date</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {dissertations.map((dissertation) => (
                                                    <tr key={dissertation.article_id}>
                                                        <td className='border-r-2 px-2 font-mono text-gray-500'>{dissertation.article_id}</td>
                                                        <td className='border-r-2 px-2'>
                                                            <Link to={`/dissertations/${dissertation.article_id}`} className="text-purple-700 hover:underline ">
                                                                {dissertation.title}
                                                            </Link>
                                                        </td>
                                                        <td className='border-r-2 px-2'>
                                                            <Link to={`/dissertations/${dissertation.article_id}`} className="text-purple-700 hover:underline font-mono hover:text-pink-600">
                                                                Publish-&gt;
                                                            </Link>                                                </td>
                                                        <td className=' px-2'>{dissertation.created_at.slice(0, 10)}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>

                                    </div>
                                </div>
                            </div>
                        )}
                        {activeSection === 'completedApprovals' && (
                            <div>
                                {/*  for completed approvals */}
                                {/* You can replace this with your actual  */}
                                <div className="flex bg-white rounded  shadow p  mx-3 my-2 p-2">
                                    <div className=" p-4">
                                        <h2 className="text text-zinc-400 mb-4">
                                            <p>Completed Approvals </p></h2>
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th className='text-indigo-500 w-20 text-left border-b-[1px] pb-2 border-r-[1px] px-2 '>ID</th>
                                                    <th className='text-indigo-500 w-52 text-left border-b-[1px] pb-2 border-r-[1px] px-2 '>Title</th>
                                                    <th className='text-indigo-500 text-left border-b-[1px] pb-2 border-r-[1px] px-2 w-32'>Status</th>
                                                    <th className='text-indigo-500 text-left border-b-[1px] pb-2 border-r-[1px] px-2 w-20'>Date</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {dissertations.map((dissertation) => (
                                                    <tr key={dissertation.article_id}>
                                                        <td className='border-r-2 px-2 font-mono text-gray-500'>{dissertation.article_id}</td>
                                                        <td className='border-r-2 px-2'>
                                                            <Link to={`/dissertations/${dissertation.article_id}`} className="text-purple-700 hover:underline ">
                                                                {dissertation.title}
                                                            </Link>
                                                        </td>
                                                        <td className='border-r-2 px-2'>
                                                        </td>
                                                        <td className=' px-2'>{dissertation.created_at.slice(0, 10)}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>

                                    </div>
                                </div>
                            </div>
                        )}
                        {activeSection === 'completedPublications' && (
                            <div>
                                {/*  for completed publications */}
                                {/* You can replace this with your actual  */}

                                <div className="flex bg-white rounded  shadow p  mx-3 my-2 p-2">
                                    <div className=" p-4">
                                        <h2 className="text text-zinc-400 mb-4"><p>Completed Publications </p></h2>
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th className='text-indigo-500 w-20 text-left border-b-[1px] pb-2 border-r-[1px] px-2 '>ID</th>
                                                    <th className='text-indigo-500 w-52 text-left border-b-[1px] pb-2 border-r-[1px] px-2 '>Title</th>
                                                    <th className='text-indigo-500 text-left border-b-[1px] pb-2 border-r-[1px] px-2 w-32'>Status</th>
                                                    <th className='text-indigo-500 text-left border-b-[1px] pb-2 border-r-[1px] px-2 w-20'>Date</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {dissertations.map((dissertation) => (
                                                    <tr key={dissertation.article_id}>
                                                        <td className='border-r-2 px-2 font-mono text-gray-500'>{dissertation.article_id}</td>
                                                        <td className='border-r-2 px-2'>
                                                            <Link to={`/dissertations/${dissertation.article_id}`} className="text-purple-700 hover:underline ">
                                                                {dissertation.title}
                                                            </Link>
                                                        </td>
                                                        <td className='border-r-2 px-2'>
                                                        </td>
                                                        <td className=' px-2'>{dissertation.created_at.slice(0, 10)}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>

                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Evaluation;
