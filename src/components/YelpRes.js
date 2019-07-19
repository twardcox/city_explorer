import React from 'react';

export const YelpRes = props => {
  const listItems = props.data.map((v, i) => {
    return (
      <ul key={i} id={i}>
        <li>
          <a href={v.url}>{v.name}</a>
          <p>
            The average rating is {v.rating} out of 5 and the average cost is {v.price} out of 4
          </p>
          <img src={v.image_url} alt="stuff" />
        </li>
        <hr />
      </ul>
    );
  });

  return (
    <article className="results">
      <h3>Results from the Yelp API</h3>
      {listItems}
    </article>
  );
};
