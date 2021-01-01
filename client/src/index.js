// * THIS IS THE WEBPACK ENTRY POINT -- see webpack.config.js

import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  return(
    <h1>Hello React</h1>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));