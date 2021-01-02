import React from 'react';
import YT_API_KEY from './youtube-config';

const searchYoutube = (params, callback) => {

  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${params[0]}&q=${params[1]}&type=${params[2]}&key=${YT_API_KEY}`, requestOptions)
    .then(response => response.text())
    .then(result => callback(JSON.parse(result)))
    .catch(error => console.log('error', error));
};

export default searchYoutube;
