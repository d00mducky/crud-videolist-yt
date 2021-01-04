import React from 'react';
import ReactPlayer from 'react-player';

const HeroVideo = ({heroVideo}) => {

  if (heroVideo.length > 0) {
    return (
      <section className='hero-video-container'>
        <ReactPlayer url={'https://youtube.com/watch?v=' + heroVideo} />
        <h1>Main video will show up here</h1>
      </section>
    );
  } else return null;
};

export default HeroVideo;