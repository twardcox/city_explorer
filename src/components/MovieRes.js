import React from 'react';

export const MovieRes = props => {
  const listItems = props.data.map((v, i) => {
    return (
      <ul key={i} id={i}>
        <li>
          <p>
            <span>{v.title}</span> was released on {v.released_on}. Out of {v.total_votes} total votes, {v.title} has an average vote of {v.average_votes} and a popularity score of {v.popularity}.
          </p>
          <img src={v.image_url} alt="stuff" />
          <p>{v.overview}</p>
        </li>
        <hr />
      </ul>
    );
  });

  return (
    <article className="results">
      <h3>Results from The Movie DB API</h3>
      {listItems}
    </article>
  );
};
