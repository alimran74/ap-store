import React from 'react';

const Poster = () => {
    return (
      <>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-8 text-purple-700 animate-pulse drop-shadow-lg transition duration-500 ease-in-out">
  🚀 Featured Apps Logo
</h2>

      <div className="flex items-center justify-center ">
        
      <div className="carousel carousel-vertical rounded-box h-96 items-center mx-auto">
      <div className="carousel-item h-full w-82">
        <img src="https://i.ibb.co.com/p6wCHyrr/healthlogo-1.png" />
      </div>
      <div className="carousel-item h-full w-82">
        <img src="https://i.ibb.co.com/xSdNBfx7/prod-logo-png-2.png" />
      </div>
      <div className="carousel-item h-full w-82">
        <img src="https://i.ibb.co.com/pv6Wh0Sx/prod-logo-png-4.png" />
      </div>
      <div className="carousel-item h-full w-82">
        <img src="https://i.ibb.co.com/0RLywH7M/coc-icon-45744.png" />
      </div>
      <div className="carousel-item h-full w-82">
        <img src="https://i.ibb.co.com/ZRcNJQ02/khan-academy-seeklogo.png" />
      </div>
      <div className="carousel-item h-full w-82">
        <img src="https://i.ibb.co.com/GYv2S2k/icon.png" />
      </div>
      <div className="carousel-item h-full w-82">
        <img src="https://i.ibb.co.com/hFPdkYkF/prod-logo-png-3.png" />
      </div>
    </div>
    </div>
    </>
    );
};

export default Poster;