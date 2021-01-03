import React from 'react';

const getAllQueries = (callback) => {

  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch("http://localhost:3000/api/queries", requestOptions)
    .then(response => response.text())
    .then(result => callback(result))
    .catch(error => console.log('error', error));
};

export default getAllQueries;