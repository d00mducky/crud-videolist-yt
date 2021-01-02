import React from 'react';

const VideoEntry = ({video}) => {

  const thumbnailClickHandler = (event) => {

    console.log('hey ! D:');
  }

  if (video.snippet) {
    return (
      <article className='video-entry-container'>
        <img src={video.snippet.thumbnails.high.url} onClick={(event) => {thumbnailClickHandler(event)}} alt="video thumbnail" srcSet={video.snippet.thumbnails.high.url} />
        <h3>This will be a video entry</h3>
      </article>
    );
  } else {
    return null;
  }
};

export default VideoEntry;