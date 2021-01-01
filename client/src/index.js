// * THIS IS THE WEBPACK ENTRY POINT -- see webpack.config.js
import React from 'react';
import ReactDOM from 'react-dom'

// import api methods
import searchYoutube from './api/searchYoutube.js';

// import main App component
import App from './App';

ReactDOM.render(
  <App
    searchYoutube={searchYoutube} />, document.getElementById('app'));