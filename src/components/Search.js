import React from 'react';
export class Search extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form>
        <label>Search for a location</label>
        <input placeholder="Enter a location here" />
        <button>Explore!</button>
      </form>
    );
  }
}
