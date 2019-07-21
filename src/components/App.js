import React from 'react';
import superagent from 'superagent';
// import './core.scss';
import '../css/App.css';

import { WeatherRes } from './WeatherRes';
import { YelpRes } from './YelpRes';
import { HikeRes } from './HikeRes';
import { MovieRes } from './MovieRes';

// https://city-explorer-backend.herokuapp.com
// AIzaSyA5tzg0l3aqskxgVRNtERsNb6MeI5ss79g

import SearchForm from '../components/Search-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

  getApiKey = value => {
    this.setState({ STATIC_MAP_API_KEY: value });
    localStorage.setItem('STATIC_MAP_API_KEY', value);
  };

  getBackendUrl = value => {
    this.setState({ backEndUrl: value });
  };

  getAllData = async value => {
    const googleResults = await superagent.get(this.state.backEndUrl + '/location').query({ data: value });
    console.log('googleResults: ', googleResults);

    this.setState({ googleResults: googleResults.body });

    const weathersResults = await superagent.get(this.state.backEndUrl + '/weather').query({ data: googleResults.body });
    const moviesResults = await superagent.get(this.state.backEndUrl + '/movies').query({ data: googleResults.body });
    const trailsResults = await superagent.get(this.state.backEndUrl + '/trails').query({ data: googleResults.body });
    const yelpResults = await superagent.get(this.state.backEndUrl + '/yelp').query({ data: googleResults.body });

    this.setState({
      apiResults: {
        weathers: weathersResults.body,
        movies: moviesResults.body,
        hiking: trailsResults.body,
        yelp: yelpResults.body
      }
    });
  };

  render() {
    return (
      <div className="App">
        {!this.state.STATIC_MAP_API_KEY && <SearchForm onClick={this.getApiKey} formName="Maps key" />}
        <SearchForm onClick={this.getBackendUrl} formName="Backend Url" />
        <SearchForm onClick={this.getAllData} formName="Search Location" />

        {!this.state.STATIC_MAP_API_KEY ? (
          <img id="mapImg" width="300" src="https://staticmapmaker.com/img/google@2x.png" alt="Google Map of Albany, NY" />
        ) : (
          <img id="mapImg" src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.state.googleResults.latitude}%2c%20${this.state.googleResults.longitude}&zoom=13&size=600x300&maptype=roadmap&key=${this.state.STATIC_MAP_API_KEY}`} alt="map" />
        )}

        <h2>Here are the results for {this.state.googleResults.formatted_query}</h2>
        <div>
          <WeatherRes data={this.state.apiResults.weathers} />
          <YelpRes data={this.state.apiResults.yelp} />
          <MovieRes data={this.state.apiResults.movies} />
          <HikeRes data={this.state.apiResults.hiking} />
        </div>
      </div>
    );
  }
}

export default App;
