import React from 'react';

// import child components
import VideoEntry from './VideoEntry';

const VideoList = () => {

  let videoEntries = [];

  (()=> {
    for(let i = 0; i < 100; i++) {
      videoEntries.push(i);
      console.log(videoEntries);
    }
  })();

  return (
    <section className='video-list-container'>
      {videoEntries.map((video) => (
        <VideoEntry />
      ))}
    </section>
  );
};

export default VideoList;