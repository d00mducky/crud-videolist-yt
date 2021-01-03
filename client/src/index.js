// * THIS IS THE WEBPACK ENTRY POINT -- see webpack.config.js
import React from 'react';
import ReactDOM from 'react-dom';

// import api methods
import searchYoutube from './api/searchYoutube';

// import DB lib methods
import storeQuery from './lib/storeQuery';
import storeVideos from './lib/storeVideos';
import getAllQueries from './lib/getAllQueries';
import getLastQuery from './lib/getLastQuery';
import getAllVideos from './lib/getAllVideos';


// import main App component
import App from './App';

ReactDOM.render(
  <App
    searchYoutube={searchYoutube}
    storeQuery={storeQuery}
    storeVideos={storeVideos}
    getAllQueries={getAllQueries}
    getLastQuery={getLastQuery}
    getAllVideos={getAllVideos} />, document.getElementById('app'));