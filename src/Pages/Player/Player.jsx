import React, { useEffect, useState } from 'react';
import '../../Styles/Global.css';
import { contentServices } from '../../Services/contentService';

const Player = () => {
  const [videoLink, setVideoLink] = useState('');

  // Extract URL parameters safely
  const queryParams = new URLSearchParams(window.location.search);
  const name = queryParams.get('name');
  const id = queryParams.get('id');
  const year = queryParams.get('year');
  
  console.log(name, id, year);

  const fetchVideo = async () => {
    try {
      const response = await contentServices.player(name);
      console.log(response.result.data[0].Watch);
      setVideoLink(response.result.data[0].Watch);
    } catch (error) {
      console.error('Error fetching video:', error);
    }
  };

  useEffect(() => {
    fetchVideo();
  }, []);

  return (
    <div className='w-screen h-screen'>
      {/* Render iframe only if videoLink is available */}
      {videoLink ? (
        <iframe
          src={videoLink}
          title={name}
          width="100%"
          height="100%"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <div className="flex justify-center items-center h-full">
          <p>Loading video...</p>
        </div>
      )}
    </div>
  );
};

export default Player;
