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
      searchHistoryItems: [],
      searchHistoryTerms: []
    };
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

        let parsedVideos = JSON.parse(results[0].videoData);
        this.setState({
          videos: parsedVideos,
          heroVideo: parsedVideos[0]
        })
      });
    });

    // load the search history into state
    this.props.getAllQueries((results) => {

      let allSearchItems = [];
      let allSearchTerms = [];
      results.map(result => {
        let searchObj = {
          id: result.id,
          searchTerm: result.searchTerm
        };
        allSearchTerms.push(result.searchTerm);
        allSearchItems.push(searchObj);
      });

      this.setState({
        searchHistoryItems: allSearchItems,
        searchHistoryTerms: allSearchTerms
      });
    });

    // setTimeout(() => {console.log(this.state.searchHistory); }, 3000);
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
      this.props.getAllVideos(this.state.userInput, (results) => {
        console.log(results);
      });


    } else { // if new query, store it to search_queries table

      let lastQuery = 0;
      this.props.storeQuery(this.state.userInput, (results) => {
        // console.log(results);
        lastQuery = results.insertId;

        // invoke search on youtube API
        this.props.searchYoutube([25, this.state.userInput, 'video'], (results) => {
          let params = [lastQuery, JSON.stringify(results.items)];
          this.props.storeVideos(params, (results) => {
            console.log(results);
          });
        });
      });
    }
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