import React from 'react';

// import child components
import VideoEntry from './VideoEntry';

const VideoList = (props) => {

  /*
  * it appears that default YT search can return videos, channels OR playlists,
  * so we could eventually filter results for these types, while we will now
  * just let type be videos
  */

 // attach a numerical id to each video entry so we can grab them if needed

  return (
    <section className='video-list-container'>
      {props.videos.map((video) => (
        <VideoEntry
          video={video}
          key={video.id.videoId || video.id.playlistId || video.id.channelId} />
      ))}
    </section>
  );
};

export default VideoList;