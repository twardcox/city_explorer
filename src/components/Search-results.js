import React from 'react';

export const SearchResults = props => {
  const listItems = props.data.map((v, i) => {
    return (
      <ul key={i} id={i}>
        <li>{v.time}</li>
        <li>{v.forecast}</li>
        <hr />
      </ul>
    );
  });

  return <article>{listItems}</article>;
};
