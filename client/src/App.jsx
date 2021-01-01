import React from 'react';

// import child components
import Header from './components/Header'


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      watchLaterVideos: []
    };
  }

  render() {
    return(
      <div className='app-render'>
        <Header />
      </div>
    );
  };
}


export default App;