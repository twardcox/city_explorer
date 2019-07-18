import React from 'react';

const Map = props => {
  return (
    <div>
      <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${props.lat}%2c%20${props.lng}&zoom=13&size=600x300&maptype=roadmap&key=${process.env.REACT_APP_GEOCODE_API_KEY}`} alt="go here" />
    </div>
  );
};

export default Map;
