import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router';

const AppsContainer = () => {
    const [apps, setApps] = useState([]);
    useEffect(() =>{
        fetch('/appData.json')
        .then(res => res.json())
        .then(data => setApps(data));
    }, []);

    const { user } = use(AuthContext);
    const navigate = useNavigate();

    const handleCardClick = (appId) =>{
      if (user) {
        navigate(`/apps/${appId}`);
      }
      else{
        navigate('/auth/login');
      }
    };

    const educationApps = apps.filter(app => app.category === 'Education');

    const gameApps = apps.filter(app => app.category === 'Gaming');

    const productivityApps = apps.filter(app => app.category === 'Productivity');

    const healthApps = apps.filter(app => app.category === 'Health');

    return (

    <div className="p-4">
    {/* Gaming apps */}
    <section className="mb-6 border p-4 rounded-4xl bg-purple-100">
      <h2 className="text-2xl font-semibold mb-2 text-center">Games</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4  ">
        {gameApps.map(app => (
          <div key={app.id} onClick={() => handleCardClick(app.id)} className="border p-4 rounded shadow bg-white">
            <img src={app.thumbnail} alt={app.name} className="w-full h-32 object-cover" />
            <h3 className="text-lg font-bold">{app.name}</h3>
            <p className="text-sm text-gray-600">{app.developer}</p>
            <p>Rating {app.rating}⭐</p>
            <p>⬇️ {app.downloads} downloads</p>
          </div>
        ))}
      </div>
    </section>

    {/* Productivity */}
    <section className="mb-6 border p-4 rounded-4xl bg-purple-100">
      <h2 className="text-2xl font-semibold mb-2 text-center">Productivity Apps</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {productivityApps.map(app => (
          <div key={app.id} onClick={() => handleCardClick(app.id)} className="border p-4 rounded shadow bg-white">
            <img src={app.thumbnail} alt={app.name} className="w-full h-32 object-cover" />
            <h3 className="text-lg font-bold">{app.name}</h3>
            <p className="text-sm text-gray-600">{app.developer}</p>
            <p>Rating {app.rating}⭐</p>
            <p>⬇️ {app.downloads} downloads</p>
          </div>
        ))}
      </div>
    </section>

    {/* Healthcare */}
    <section className="mb-6 border p-4 rounded-4xl bg-purple-100">
      <h2 className="text-2xl font-semibold mb-2 text-center">Healthcare Apps</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {healthApps.map(app => (
          <div key={app.id} onClick={() => handleCardClick(app.id)} className="border p-4 rounded shadow bg-white">
            <img src={app.thumbnail} alt={app.name} className="w-full h-32 object-cover" />
            <h3 className="text-lg font-bold">{app.name}</h3>
            <p className="text-sm text-gray-600">{app.developer}</p>
            <p>Rating {app.rating}⭐</p>
            <p>⬇️ {app.downloads} downloads</p>
          </div>
        ))}
      </div>
    </section>

    {/* Educational */}
    <section className="mb-6 border p-4 rounded-4xl bg-purple-100">
      <h2 className="text-2xl font-semibold mb-2 text-center">Educational Apps</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {educationApps.map(app => (
          <div key={app.id} onClick={() => handleCardClick(app.id)} className="border p-4 rounded shadow bg-white">
            <img src={app.thumbnail} alt={app.name} className="w-full h-32 object-cover" />
            <h3 className="text-lg font-bold">{app.name}</h3>
            <p className="text-sm text-gray-600">{app.developer}</p>
            <p>Rating {app.rating}⭐</p>
            <p>⬇️ {app.downloads} downloads</p>
          </div>
        ))}
      </div>
    </section>
  </div>
    );
};

export default AppsContainer;