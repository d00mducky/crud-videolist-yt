import React from 'react';

// import child components
import FirstServe from './components/FirstServe';
import Header from './components/Header';
import HeroVideo from './components/HeroVideo';
import VideoList from './components/VideoList'


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstServe: false,
      userInput: '',
      heroVideo: {},
      videos: [],
      watchLaterVideos: []
    };
  }

  componentDidMount() {
    // gets 25 entries from youtube on the query 'react dev'
    // * possible types are video, playlist and channels -- we should filter for these results in a later iteration

    // * Uncomment when ready to test
    // let params = [25, 'react dev', 'video'];
    // this.props.searchYoutube(params, (results) => {

    //   this.setState({
    //     heroVideo: results.items[0],
    //     videos: results.items
    //   })
    // });

    setTimeout(() => {console.log(this.state.videos); }, 3000);
  }

  // * ***************************************
  // * HEADER METHODS START

  userInputChangeHandler(event) {
    this.setState({
      userInput: event.target.value
    });
  }

  userInputSubmitHandler(event) {
    event.preventDefault();

    let params = [25, this.state.userInput, 'video'];
    this.props.searchYoutube(params, (results) => {
      this.setState({
        heroVideo: results.items[0],
        videos: results.items
      });
    });
  }

  // * HEADER METHODS END
  // * ***************************************


  render() {
    if (!this.state.firstServe) {
      return(
        <FirstServe />
      );
    } else {
      return(
        <div className='app-render'>
          <Header
            userInputChangeHandler={this.userInputChangeHandler.bind(this)}
            userInputSubmitHandler={this.userInputSubmitHandler.bind(this)} />
          <HeroVideo
            heroVideo={this.state.heroVideo}
          />
          <VideoList
            videos={this.state.videos}/>
        </div>
      );
    };
  }
}


export default App;