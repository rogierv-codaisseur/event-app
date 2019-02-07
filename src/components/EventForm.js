import React from 'react';

const EventForm = props => {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <label htmlFor='name'>
          Name:
          <input
            type='text'
            id='name'
            name='name'
            value={props.values.name}
            onChange={props.onChange}
          />
        </label>
        <label htmlFor='date'>
          Date:
          <input
            type='date'
            id='date'
            name='date'
            value={props.values.date}
            onChange={props.onChange}
          />
        </label>
        <label htmlFor='description'>
          Description:
          <input
            type='text'
            id='description'
            name='description'
            value={props.values.description}
            onChange={props.onChange}
          />
        </label>
        <input type='submit' value='Save' />
      </form>
    </div>
  );
};

export default EventForm;
