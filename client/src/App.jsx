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

      TODO in future iterations we'll also refactor to allow to display results by type (i.e. video, playlist or channels)
    */


    // when the app loads, grab the most recent query from search_queries
    let lastSearch = {};

    this.props.getLastQuery((results) => {
      lastSearch.id = results[0].id;
      lastSearch.searchTerm = results[0].searchTerm;

      // load videos in from the db based on the last searchTerm
      this.props.getAllVideos(lastSearch.id, (results) => {
        this.setState({
          videos: results
        })
      });
    });

    // load the search history into state
    this.props.getAllQueries((results) => {

      let allSearchTerms = [];
      results.map(result => { allSearchTerms.push(result.searchTerm); });

      this.setState({
        searchHistory: allSearchTerms
      });
    });

    setTimeout(() => {console.log(this.state.searchHistory); }, 3000);
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

    // check search history to see if we have searched this query before
    if (this.state.searchHistory.includes(this.state.userInput)) {
      // if so, serve up the video data from videos table

    }

    // if new query, store it to search_queries table
    // this.props.storeUserQuery
    // invoke search on youtube API
    // store video data to videos table


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