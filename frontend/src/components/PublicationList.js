import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PublicationList = () => {
    const [filter, setFilter] = useState({
        name: '',
        latest: true,
        type: '',
    });

    const [latestPublications, setLatestPublications] = useState([]);

    useEffect(() => {
        // Fetch the latest publications from the Django API endpoint
        axios.get('http://localhost:8000/dissertation/all-completed-publications/')
            .then(response => {
                setLatestPublications(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []); // This will run the effect only once, when the component mounts

    const handleFilterChange = (field, value) => {
        setFilter({ ...filter, [field]: value });
    };

    const filteredPublications = latestPublications
    .filter((publication) =>
        publication.name && publication.name.toLowerCase().includes(filter.name.toLowerCase())
    )
    .filter(
        (publication) =>
            !filter.latest || (publication.date && publication.date === '2023-09-15') // Adjust as needed
    )
    .filter(
        (publication) =>
            !filter.type || (publication.type && publication.type.toLowerCase() === filter.type.toLowerCase())
    );


    return (
        <div>
            <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2 text-purple-600">Filter:</h3>
                <div className="flex space-x-4">
                    <input
                        type="text"
                        placeholder="Name"
                        value={filter.name}
                        onChange={(e) => handleFilterChange('name', e.target.value)}
                        className="border px-2 py-1 rounded focus:outline-none focus:shadow"
                    />
                    <label>
                        <input
                            type="checkbox"
                            checked={filter.latest}
                            onChange={() => handleFilterChange('latest', !filter.latest)}
                            className="mr-1"
                        />
                        Latest
                    </label>
                    <input
                        type="text"
                        placeholder="Type"
                        value={filter.type}
                        onChange={(e) => handleFilterChange('type', e.target.value)}
                        className="border px-2 py-1 rounded focus:outline-none focus:shadow"
                    />
                </div>
            </div>

            {/* List of Latest Publications */}
            <div className=' bg-zinc-100 p-2 rounded'>
                <h3 className="text-lg font-semibold text-purple-600 mb-2">Latest Publications:</h3>
                <ul className='flex gap-10 flex-wrap'>
                    {latestPublications.map((publication) => (
                        <li key={publication.id} className="mb-2 bg-zinc-50 rounded-sm shadow flex flex-col p-2 h-52 w-52">
                            <p>{publication.name}</p>
                            <p> Type: {publication.category}</p>
                            <p> Title: {publication.title}</p>
                            <p> Date: {publication.created_at.slice(0,10)}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default PublicationList;
