import React from 'react';
import ReactPlayer from 'react-player';

const HeroVideo = (props) => {

  if (props.heroVideo.snippet) {
    return (
      <section className='hero-video-container'>
        <ReactPlayer url={'https://youtube.com/watch?v=' + props.heroVideo.id.videoId} />
        <h1>Main video will show up here</h1>
      </section>
    );
  } else return null;
};

export default HeroVideo;