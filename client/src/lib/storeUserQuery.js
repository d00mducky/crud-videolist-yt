import React from 'react';

const storeUserQuery = (params, callback) => {

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  var urlencoded = new URLSearchParams();
  urlencoded.append("searchTerm", params[0]);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
  };

  fetch("http://localhost:3000/api/queries", requestOptions)
    .then(response => response.text())
    .then(result => callback(JSON.PARSE(result)))
    .catch(error => console.log('error', error));
}

export default storeUserQuery;