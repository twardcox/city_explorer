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
      results: {}
    };
  }

  getLocation = e => {
    e.preventDefault();
    this.setState({ location: e.target.value });
  };

  getGeoData = data => {
    data.preventDefault();

    superagent
      .get('https://city-explorer-backend.herokuapp.com/location')
      .query({ data: this.state.location })
      .then(result => {
        this.setState({ results: result.body });
      });
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <SearchForm getGeoData={this.getGeoData} getLocation={this.getLocation} />

        <Map lat={this.state.results.latitude} lng={this.state.results.longitude} />
        <Searchresults />
      </React.Fragment>
    );
  }
}

export default App;
