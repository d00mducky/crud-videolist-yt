import React from 'react';

// import child components
import VideoEntry from './VideoEntry';

const VideoList = () => {

  return (
    <section className='video-list-container'>
      <h1>This is where the video list will be</h1>
      <VideoEntry />
    </section>
  );
};

export default VideoList;