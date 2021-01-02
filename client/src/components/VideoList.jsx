import React from 'react';

// import child components
import VideoEntry from './VideoEntry';

const VideoList = (props) => {

  return (
    <section className='video-list-container'>
      {props.videos.map((video) => (
        <VideoEntry video={video}/>
      ))}
    </section>
  );
};

export default VideoList;