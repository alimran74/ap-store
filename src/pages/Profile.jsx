import React, { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router';

const Profile = () => {
    const { user } = use(AuthContext);
    if(!user){
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 to-purple-200 text-center animate-pulse">
      <h2 className="text-4xl font-bold text-purple-600 drop-shadow-md mb-4 animate-bounce">⚠️ Access Denied</h2>
      <p className="text-lg text-gray-700 max-w-sm">
        You are not logged in. Please{' '}
        <Link to="/auth/login" className="text-purple-500 font-semibold underline hover:text-purple-700">
          log in
        </Link>{' '}
        to view your profile.
      </p>
    </div>
          );
    
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-purple-50 p-5">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md text-center">
        <img
          src={user.photoURL || 'https://via.placeholder.com/150'}
          alt="User"
          className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-purple-400"
        />
        <h2 className="text-2xl font-semibold text-purple-600 mb-2">{user.displayName || "No name found"}</h2>
        <p className="text-gray-600 mb-1"><strong>Email:</strong> {user.email}</p>
        <p className="text-gray-600"><strong>UID:</strong> {user.uid}</p>
      </div>
    </div>
    );
};

export default Profile;