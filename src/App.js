import React from 'react';
import './App.css';
import { Search } from './components/Search';

const Results = props => (
  <results>
    <section>
      <h2>{props.title}</h2>
    </section>
  </results>
);

function App() {
  return (
    <React.Fragment className="App">
      <header>
        <h1>City Explorer</h1>
        <p>Enter a location below to learn about the weather, events, restaurants, movies, and more!</p>
      </header>
      <main>
        <Search />
        <img src="https://staticmapmaker.com/img/google@2x.png" alt="go here" />

        <Results title="Dark Sky API" />
        <Results title="Yelp API" />
        <Results title="Meetup API" />
        <Results title="MovieDB API" />
        <Results title="Hiking Project API" />
      </main>
    </React.Fragment>
  );
}

export default App;
