import React from 'react';

const EventDetails = props => {
  return (
    <div>
      <div>
        <h1>{props.event.name}</h1>
        <i>{props.event.date}</i>
        <p>{props.event.description}</p>
      </div>
    </div>
  );
};

export default EventDetails;
