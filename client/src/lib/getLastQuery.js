import React from 'react';

const getLastQuery = (callback) => {

  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch("http://localhost:3000/api/queries/last", requestOptions)
    .then(response => response.text())
    .then(result => callback(result))
    .catch(error => console.log('error', error));
};

export default getLastQuery;