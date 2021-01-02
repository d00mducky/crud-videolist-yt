import React from 'react';

const storeUserQuery = (params, callback) => {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  let urlencoded = new URLSearchParams();
  urlencoded.append("channelName", params[0]);
  urlencoded.append("channelId", params[1]);
  urlencoded.append("publishedAt", params[2]);
  urlencoded.append("thumbnail", params[3]);
  urlencoded.append("videoDesc", params[4]);

  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
  };

  fetch(`http://localhost:3000/api/videos/${params[5]}`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

export default storeUserQuery;