import React from 'react';

const storeVideoEntry = (params, callback) => {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  let urlencoded = new URLSearchParams();
  urlencoded.append("id", params[0]);
  urlencoded.append("videoId", params[1]);
  urlencoded.append("queryId", params[2]);
  urlencoded.append("channelId", params[3]);
  urlencoded.append("channelName", params[4]);
  urlencoded.append("publishedAt", params[5]);
  urlencoded.append("thumbnail", params[6]);
  urlencoded.append("videoDesc", params[7]);

  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
  };

  // params[8] = the search query
  fetch(`http://localhost:3000/api/videos/${params[8]}`, requestOptions)
    .then(response => response.text())
    .then(result => callback(result))
    .catch(error => console.log('error', error));
}

export default storeVideoEntry;