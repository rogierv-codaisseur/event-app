import React from 'react';

const EventDetails = props => {
  return (
    <div>
      <h1>{props.event.name}</h1>
      <i>{props.event.date}</i>
      <p>{props.event.description}</p>
      <button onClick={props.onDelete}>Delete</button>
    </div>
  );
};

export default EventDetails;
