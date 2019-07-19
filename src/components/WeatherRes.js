import React from 'react';

export const WeatherRes = props => {
  const listItems = props.data.map((v, i) => {
    return (
      <ul key={i} id={i}>
        <li>
          <p>
            The forecast for {v.time} is: {v.forecast}
          </p>
        </li>

        <hr />
      </ul>
    );
  });

  return (
    <article className="results">
      <h3>Results from the Dark Sky API</h3>
      {listItems}
    </article>
  );
};
