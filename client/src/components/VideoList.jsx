import React from 'react';

// import child components
import VideoEntry from './VideoEntry';

const VideoList = (props) => {

  let videoEntries = [];

  (()=> {
    for(let i = 0; i < 100; i++) {
      videoEntries.push(i);
    }
  })();

  return (
    <section className='video-list-container'>
      {videoEntries.map((video) => (
        <VideoEntry videos={props.videos}/>
      ))}
    </section>
  );
};

export default VideoList;