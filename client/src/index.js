// * THIS IS THE WEBPACK ENTRY POINT -- see webpack.config.js
import React from 'react';
import ReactDOM from 'react-dom';

// import api methods
import searchYoutube from './api/searchYoutube';

// import DB lib methods
import storeUserQuery from './lib/storeUserQuery';
import getAllQueries from './lib/getAllQueries';

// import main App component
import App from './App';

ReactDOM.render(
  <App
    searchYoutube={searchYoutube}
    storeUserQuery={storeUserQuery}
    getAllQueries={getAllQueries} />, document.getElementById('app'));