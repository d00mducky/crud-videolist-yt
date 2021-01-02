import React from 'react';

// import child components
import Header from './components/Header';
import HeroVideo from './components/HeroVideo';
import VideoList from './components/VideoList'


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: '',
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

  // * ***************************************
  // * HEADER METHODS START

  userInputChangeHandler(event) {
    this.setState({
      userInput: event.target.value
    });
  }

  userInputSubmitHandler(event) {
    event.preventDefault();

    let params = [25, this.state.userInput];
    this.props.searchYoutube(params, (results) => {
      this.setState({
        videos: results.items
      });
    });
  }

  // * HEADER METHODS END
  // * ***************************************


  render() {
    return(
      <div className='app-render'>
        <Header
          userInputChangeHandler={this.userInputChangeHandler.bind(this)}
          userInputSubmitHandler={this.userInputSubmitHandler.bind(this)} />
        <HeroVideo />
        <VideoList
          videos={this.state.videos}/>
      </div>
    );
  };
}


export default App;