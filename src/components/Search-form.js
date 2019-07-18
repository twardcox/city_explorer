import React from 'react';

export const SearchForm = props => {
  return (
    <form>
      <label>Search for a location</label>
      <input onChange={props.getLocation} placeholder="Enter a location here" />
      <button onClick={props.getGeoData}>Explore!</button>
    </form>
  );
};
