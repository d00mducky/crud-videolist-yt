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

  componentDidMount() {
    let params = [25, 'surfing'];
    this.props.searchYoutube(params, (results) => {
      console.log(results);
    });
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