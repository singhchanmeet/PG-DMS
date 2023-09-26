import React, { useState } from 'react'

const PublicationList = () => {
    const [filter, setFilter] = useState({
        name: '',
        latest: false,
        type: '',
    });

    const latestPublications = [
        // Replace with actual data
        { id: 1, name: 'Publication 1', type: 'Type A', date: '2023-09-15' },
        { id: 2, name: 'Publication 2', type: 'Type B', date: '2023-09-10' },
        // Add more publication objects here
    ];

    const handleFilterChange = (field, value) => {
        setFilter({ ...filter, [field]: value });
    };

    const filteredPublications = latestPublications
        .filter((publication) =>
            publication.name.toLowerCase().includes(filter.name.toLowerCase())
        )
        .filter(
            (publication) =>
                !filter.latest || publication.date === '2023-09-15' // Adjust as needed
        )
        .filter(
            (publication) =>
                !filter.type || publication.type.toLowerCase() === filter.type.toLowerCase()
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
                    {filteredPublications.map((publication) => (
                        <li key={publication.id} className="mb-2 bg-zinc-50 rounded-sm shadow flex flex-col p-2 h-52 w-52">
                            <p>{publication.name}
                            </p>
                            <p> Type: {publication.type}
                            </p>
                            <p> Date: {publication.date}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default PublicationList