import React from 'react';
import { Link } from 'react-router-dom';

const EventsList = props => {
  return (
    <ul>
      {!props.events && 'Loading...'}
      {props.events &&
        props.events.map(event => (
          <li key={event.id}>
            <Link to={`/events/${event.id}`}>{event.name}</Link>
          </li>
        ))}
    </ul>
  );
};

export default EventsList;
