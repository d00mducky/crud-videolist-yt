import React from 'react';

const getAllVideos = (queryId, callback) => {

  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch(`http://localhost:3000/api/videos/${queryId}`, requestOptions)
    .then(response => response.text())
    .then(result => callback(JSON.parse(result)))
    .catch(error => console.log('error', error));
};

export default getAllVideos;