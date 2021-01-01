import React from 'react';

// import child components
import VideoEntry from './VideoEntry';

const VideoList = () => {

  const videoEntries = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <section className='video-list-container'>
      <h1>This is where the video list will be</h1>
      {videoEntries.map((video) => (
        <VideoEntry />
      ))}
    </section>
  );
};

export default VideoList;