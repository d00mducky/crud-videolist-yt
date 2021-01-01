import React from 'react';

const searchYoutube = (params, callback) => {

  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${params[0]}&q=${params[1]}&key=AIzaSyCUTP5QBD5yNtJqC_JIDuQflFfr7kDm9aE`, requestOptions)
    .then(response => response.text())
    .then(result => callback(result))
    .catch(error => console.log('error', error));
};