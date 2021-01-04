import React from 'react';

const VideoEntry = ({video, datakey, changeHeroVideo}) => {

  const thumbnailClickHandler = (event) => {

    console.log(event.target.getAttribute('datakey'));
  }

  if (video.snippet) {
    return (
      <article className='video-entry-container' >
        <img src={video.snippet.thumbnails.high.url} datakey={datakey} onClick={(event) => {changeHeroVideo(event)}} alt="video thumbnail" srcSet={video.snippet.thumbnails.high.url} />
        <input type="button" value="Watch Later" />
        <h3>This will be a video entry</h3>
      </article>
    );
  } else {
    return null;
  }
};

export default VideoEntry;