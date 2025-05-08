import React, { use, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';
import Error from './Error';



const AppDetails = () => {
    
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
        return <Error/>;
    }

      
    const [isLoading, setIsLoading] = useState(false);
    const [isInstalled, setIsInstalled] = useState(false);

    // Review state
    const [newReview, setNewReview] = useState({
        username: user?.displayName || 'Anonymous',
        comment: '',
        rating: 5
    });

    const [appReviews, setAppReviews] = useState(selectedApp.reviews || []);
    


    const handleInstallUninstall = () => {
        setIsLoading(true);

        setTimeout(() => {
            setIsInstalled(prevState => !prevState);
            setIsLoading(false);
            toast.success(isInstalled ? 'App uninstalled successfully!' : 'App installed successfully!');
        }, 4000);
    };

    const handleGoBack = () =>{
        navigate(-1);
    };

    const handleReviewChange = (e) => {
        const { name, value } = e.target;
        setNewReview(prev => ({ ...prev, [name]: value }));
    };

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        if (!newReview.comment.trim()) {
            toast.error("Please enter a comment.");
            return;
        }

        setAppReviews(prev => [...prev, newReview]);
        toast.success("Review submitted!");
        setNewReview({
            username: user?.displayName || "Anonymous",
            comment: '',
            rating: 5
        });
    };

    return (
        
        <div className="p-6 max-w-4xl mx-auto bg-purple-100 rounded-xl shadow-md space-y-4 items-center my-4">
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
            {appReviews.map((review, idx) => (
                <div key={idx} className="bg-gray-100 p-2 rounded mb-2">
                    <p><strong>{review.username}:</strong> {review.comment}</p>
                    <p>Rating: {review.rating}⭐</p>
                </div>
            ))}
        {/* install/uninstall button */}

        <button
                onClick={handleInstallUninstall}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full w-full sm:w-auto"
                disabled={isLoading}
            >
                {isLoading ? (
                    <span>Loading...</span> 
                ) : (
                    <span>{isInstalled ? 'Uninstall' : 'Install'}</span> 
                )}
            </button>

              {/* Go Back Button */}
              <button
                onClick={handleGoBack}
                className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-full w-full sm:w-auto"
            >
                Go Back
            </button>

            
            {/* Review List */}
{appReviews.map((review, idx) => (
  <div key={idx} className="bg-gray-100 p-2 rounded mb-2">
    <p><strong>{review.username}:</strong> {review.comment}</p>
    <p>Rating: {review.rating}⭐</p>
  </div>
))}

{/* Review Form */}
<h3 className="text-xl font-semibold mt-6">Leave a Review:</h3>
            <form onSubmit={handleReviewSubmit} className="space-y-4 bg-white p-4 rounded shadow-md">
                <div>
                    <label className="block mb-1 font-medium">Your Comment:</label>
                    <textarea
                        name="comment"
                        value={newReview.comment}
                        onChange={handleReviewChange}
                        className="w-full p-2 border rounded"
                        rows="3"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-1 font-medium">Rating:</label>
                    <select
                        name="rating"
                        value={newReview.rating}
                        onChange={handleReviewChange}
                        className="p-2 border rounded"
                    >
                        {[1, 2, 3, 4, 5].map(num => (
                            <option key={num} value={num}>{num} ⭐</option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
                    Submit Review
                </button>
            </form>
            
      </div>
      
    );
};

export default AppDetails;