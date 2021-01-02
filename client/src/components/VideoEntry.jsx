import React from 'react';

const VideoEntry = ({videos}) => {

  if (videos.length) {
    console.log(videos)
    return (
      <article className='video-entry-container'>
        <img src={videos[0].snippet.thumbnails.default.url} alt="video thumbnail" srcset={videos[0].snippet.thumbnails.default.url} />
        <h3>This will be a video entry</h3>
      </article>
    );
  } else {
    return null;
  }
};

export default VideoEntry;