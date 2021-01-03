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
      firstServe: true,
      userInput: '',
      heroVideo: {},
      videos: [],
      watchLaterVideos: [],
      searchHistory: []
    };
  }

  setSearchHistory() {
    // this.props.getAllQueries((results) => {

    //   console.log(results);
    //   // this.setState({
    //   //   searchHistory: []
    //   // })
    // })
  }

  // query the db
  queryHandler(query, maxResults, type) {

    let params = [query, maxResults, type];

    this.props.searchYoutube(params, (results) => {
      this.setState({
        videos: results.items,
        heroVideo: results.items[0]
      });
    });
  }

  // store
  storeQueryHandler(videoDetails, query) {
    let params = [
      videoDetails.id,
      videoDetails.videoId,
      videoDetails.queryId,
      videoDetails.channelId,
      videoDetails.channelName,
      videoDetails.publishedAt,
      videoDetails.thumbnail,
      videoDetails.videoDesc,
      query
    ];

    this.props.storeUserQuery(params, (results) => {
      console.log(results);
    });
  }

  componentDidMount() {

    /*
    TODO in the future, we'll refactor this so that we can load initial page results from the user's selected content type
    */
    // when the app loads, grab the most recent query from search_queries









    // gets 25 entries from youtube on the query 'react dev'
    // * possible types are video, playlist and channels -- we should filter for these results in a later iteration

    // * Uncomment when ready to test
    // let params = [25, 'react dev', 'video'];
    // this.props.searchYoutube(params, (results) => {

    //   this.setState({
    //     heroVideo: results.items[0],
    //     videos: results.items
    //   })

    //   // store query to the DB
    //   this.props.storeUserQuery(params, (results) => {
    //     let params = []


    //     console.log(results);
    //   });
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

    // check search_queries table to see if we have searched this query before
      // if so, serve up the video data from videos table
    // if new query, store it to search_queries table
    // invoke search on youtube API
    // store video data to videos table





    let params = []

    // // * DB Check & Optional Serve
    // this.props.storeUserQuery(params, (results) => {
    //   console.log(results);
    // });






    // let params = [25, this.state.userInput, 'video'];
    // this.props.searchYoutube(params, (results) => {
    //   this.setState({
    //     heroVideo: results.items[0],
    //     videos: results.items
    //   });
    // });
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