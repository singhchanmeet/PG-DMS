import React, { useState } from 'react';
import AnalyticNavbar from './AnalyticNavbar';
import SidePanel from './SidePanel';
import PublicationList from './PublicationList';
import { Link } from 'react-router-dom';

const Publications = () => {
    

    return (
        <div>
            <div className='flex'>
                <div className=''>
                    <SidePanel />
                </div>
                <div className="flex-[70%] bg-blue-50">
                    <AnalyticNavbar />
                    <div className='px-2 bg-white p-4 rounded shadow-lg mx-2'>

                    <h2 className="text-2xl font-semibold mb-4">Publications</h2>

                    {/* View Your Publications and Explore Button */}
                    <div className="mb-4">
                        <Link to={'/mypublications'}><button className="bg-orange-500 hover:bg-zinc-600 rounded text-white px-4 py-2 mr-2">
                            View Your Publications
                        </button></Link>
                        <Link to={'/explore'}><button className="bg-indigo-500 hover:bg-zinc-600 rounded text-white px-4 py-2">
                            Explore
                        </button></Link>
                    </div>

                    {/* Filter Section */}
                    <PublicationList/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Publications;
