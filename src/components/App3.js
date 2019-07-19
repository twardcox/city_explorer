import React from 'react';
import '../css/App.css';
import SearchForm from './Search-form';
import { Searchresults } from './Search-results';
import Header from './Header';
import Map from './Map';
import superagent from 'superagent';
require('dotenv').config();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {},
      backEndUrl: '',
      STATIC_MAP_API_KEY: '',
      googleResults: {},
      apiResults: {
        weathers: [],
        yelp: [],
        hiking: [],
        events: [],
        movies: []
      }
    };
  }

  // getLocation = e => {
  //   e.preventDefault();
  //   this.setState({
  //     location: e.target.value
  //   });
  // };

  // getGeoData = data => {
  //   data.preventDefault();

  //   superagent
  //     .get('https://city-explorer-backend.herokuapp.com/location')
  //     .query({ data: this.state.location })
  //     .then(result => {
  //       console.log('location: ', result);
  //       this.setState({ results: result.body });
  //     });
  // };

  getApiKey = value => {
    this.setState({ STATIC_MAP_API_KEY: value });
    localStorage.setItem('STATIC_MAP_API_KEY', value);
  };

  getBackgourndUrl = value => {
    this.setState({ backEndUrl: value });
  };

  getAllData = async value => {
    const googleResults = await superagent.get(this.state.backEndUrl + '/location').query({ data: value });
    this.setState({ googleResults: googleResults.body });
    console.log(this.state.googleResults);

    // const weatherResults = superagent.get(this.state.backEndUrl + '/weather').query({ data: googleResults.body });
    // const moviesResults = superagent.get(this.state.backEndUrl + '/movies').query({ data: googleResults.body });
    // // const eventsResults = superagent.get(thi.state.backEndUrl+ '/events').query({data: googleResults.body})
    // const trailsResults = superagent.get(this.state.backEndUrl + '/trails').query({ data: googleResults.body });
    // const yelpResults = superagent.get(this.state.backEndUrl + '/yelp').query({ data: googleResults.body });

    // await Promise.all([weatherResults, moviesResults, trailsResults, yelpResults]);

    // this.setState({
    //   apiResults: {
    //     weathers: weatherResults.body,
    //     yelp: yelpResults.body,
    //     hiking: trailsResults.body,
    //     // events: eventsResults.body,
    //     movies: moviesResults.body
    //   }
    // });
  };

  render() {
    return (
      <React.Fragment>
        <Header className="App-header" />

        {this.state.STATIC_MAP_API_KEY && <SearchForm onClick={this.getApiKey} formName="Maps Key" />}

        <SearchForm onClick={this.getBackgourndUrl} formName="Get background URL" />
        <SearchForm onClick={this.getAllData} formName="Get all data" />

        {/* <Map lat={this.state.results.latitude} lng={this.state.results.longitude} />  */}

        {/* {this.state.apiResults.yelp.map(yelp => JSON.stringify(yelp))}
        {this.state.apiResults.weathers.map(weathers => JSON.stringify(weathers))}
        {this.state.apiResults.hiking.map(hiking => JSON.stringify(hiking))} */}
        {/* {this.state.apiResults.events.map(events => 
          JSON.stringify(events)
        )} */}
        {/* {this.state.apiResults.movies.map(movies => JSON.stringify(movies))} */}
      </React.Fragment>
    );
  }
}

export default App;
