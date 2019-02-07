import React from 'react';

import EventForm from './EventForm';

const EventDetails = props => {
  return (
    <div>
      <h1>{props.event.name}</h1>
      <i>{props.event.date}</i>
      <p>{props.event.description}</p>
      <button onClick={props.onDelete}>Delete</button>
      <button onClick={props.onEdit}>Edit</button>

      {props.editMode && (
        <EventForm
          onSubmit={props.onSubmit}
          onChange={props.onChange}
          values={props.formValues}
        />
      )}
    </div>
  );
};

export default EventDetails;
