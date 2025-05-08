import React, { use } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';
import Error from './Error';
import Navbar from '../components/Navbar';

const AppDetails = () => {
    <Navbar/>
    const allApps = useLoaderData();
    const {appId} = useParams();
    const {user} = use(AuthContext);
    const navigate = useNavigate();

    const selectedApp = allApps.find(app => app.id === appId);

    if(!user){
        toast.warn('Please Login to view App details.');
        navigate('/auth/login');
        return null;
    }

    if(!selectedApp){
        return <Error/>
    }

    return (
        
        <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md space-y-4">
        <img src={selectedApp.banner} alt={selectedApp.name} className="w-full h-64 object-cover rounded" />
        <h2 className="text-3xl font-bold">{selectedApp.name}</h2>
        <p className="text-gray-600">{selectedApp.description}</p>
        <p><strong>Developer:</strong> {selectedApp.developer}</p>
        <p><strong>Rating:</strong> {selectedApp.rating} ⭐</p>
        <p><strong>Downloads:</strong> ⬇️ {selectedApp.downloads}</p>
        <h3 className="text-xl font-semibold">Features:</h3>
        <ul className="list-disc list-inside">
          {selectedApp.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
        <h3 className="text-xl font-semibold">Reviews:</h3>
        {selectedApp.reviews?.map((review, idx) => (
          <div key={idx} className="bg-gray-100 p-2 rounded mb-2">
            <p><strong>{review.username}:</strong> {review.comment}</p>
            <p>Rating: {review.rating}⭐</p>
          </div>
        ))}
      </div>
    );
};

export default AppDetails;