import React from 'react';

export const HikeRes = props => {
  const listItems = props.data.map((v, i) => {
    return (
      <ul key={i} id={i}>
        <li>
          <p>
            <a href={v.trail_url}>{v.name}</a>, Location: {v.location}, Distance: {v.length} miles
          </p>
          <p>
            On: {v.condition_date} at {v.condition_time}, trail conditions are reported as {v.conditions}
          </p>
          <p>
            This trail has a rating of {v.stars} (out of {v.star_votes} votes.
          </p>
          <p>{v.summary}</p>
        </li>
        <hr />
      </ul>
    );
  });

  return (
    <article className="results">
      <h3>Results from the Hiking Project API</h3>
      {listItems}
    </article>
  );
};
