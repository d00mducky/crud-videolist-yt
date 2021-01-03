// * THIS IS THE WEBPACK ENTRY POINT -- see webpack.config.js
import React from 'react';
import ReactDOM from 'react-dom';

// import api methods
import searchYoutube from './api/searchYoutube';

// import DB lib methods
import storeUserQuery from './lib/storeUserQuery';
import getAllQueries from './lib/getAllQueries';
import getLastQuery from './lib/getLastQuery';
import getAllVideos from './lib/getAllVideos';
import storeVideoEntry from './lib/storeVideoEntry';
import storeVideos from './lib/storeVideos';


// import main App component
import App from './App';

ReactDOM.render(
  <App
    searchYoutube={searchYoutube}
    storeUserQuery={storeUserQuery}
    getAllQueries={getAllQueries}
    getLastQuery={getLastQuery}
    getAllVideos={getAllVideos}
    storeVideoEntry={storeVideoEntry}
    storeVideos={storeVideos} />, document.getElementById('app'));