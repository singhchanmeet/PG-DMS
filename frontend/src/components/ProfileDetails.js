import React from 'react';

const ProfileDetails = () => {
  // Replace these sample data with actual user data from your API or state
  const user = {
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    avatar: 'https://example.com/avatar.jpg', // URL to the user's avatar
    university: 'Sample University',
    dissertations: [
      { id: 1, title: 'Dissertation 1' },
      { id: 2, title: 'Dissertation 2' },
      // Add more dissertations as needed
    ],
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <div className="flex items-center">
        <img
          src={user.avatar} // Use the user's avatar URL here
          alt={user.name}
          className="w-16 h-16 rounded-full object-cover mr-4"
        />
        <div>
          <h2 className="text-2xl font-semibold">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-gray-700">University: {user.university}</p>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold mb-2">Dissertations</h3>
        <ul>
          {user.dissertations.map((dissertation) => (
            <li key={dissertation.id} className="mb-2">
              <a href={`/dissertations/${dissertation.id}`} className="text-blue-500 hover:underline">
                {dissertation.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfileDetails;
