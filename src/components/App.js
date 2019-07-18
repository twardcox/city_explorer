import React from 'react';
import '../css/App.css';
import { SearchForm } from './Search-form';
import { Searchresults } from './Search-results';
import Header from './Header';
import Map from './Map';
import superagent from '../../node_modules/superagent';
require('dotenv').config();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {},
      results: {},
      weather: {}
    };
  }

  getLocation = e => {
    e.preventDefault();
    this.setState({ location: e.target.value });
  };

  componentDidMount() {
    superagent
      .get('https://city-explorer-backend.herokuapp.com/weather')
      .query({ data: this.state.results })
      .then(result => {
        console.log('weather: ', result);
        this.setState({ weather: result.body });
      });
  }

  getGeoData = data => {
    data.preventDefault();

    superagent
      .get('https://city-explorer-backend.herokuapp.com/location')
      .query({ data: this.state.location })
      .then(result => {
        console.log('location: ', result);
        this.setState({ results: result.body });
      });
  };

  render() {
    return (
      <React.Fragment>
        <Header className="App-header" />
        <SearchForm getGeoData={this.getGeoData} getLocation={this.getLocation} />

        <Map lat={this.state.results.latitude} lng={this.state.results.longitude} />
        <Searchresults />
      </React.Fragment>
    );
  }
}

export default App;
