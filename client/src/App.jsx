import React from 'react';

// import child components
import Header from './components/Header';
import HeroVideo from './components/HeroVideo';
import VideoList from './components/VideoList'


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: '',
      videos: [],
      watchLaterVideos: []
    };
  }

  componentDidMount() {
    // gets 25 entries from youtube on the query 'react dev'
    let params = [25, 'react dev'];
    this.props.searchYoutube(params, (results) => {
      this.setState({
        videos: results.items
      })
    });

    setTimeout(() => {console.log(this.state.videos); }, 3000);
  }

  render() {
    return(
      <div className='app-render'>
        <Header />
        <HeroVideo />
        <VideoList videos={this.state.videos}/>
      </div>
    );
  };
}


export default App;