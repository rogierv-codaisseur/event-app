import React from 'react';

const EventForm = props => {
  return (
    <div>
      <form onSubmit={props.onSubmit} onChange={props.onChange}>
        <label htmlFor='name'>
          Name:
          <input type='text' id='name' name='name' />
        </label>
        <label htmlFor='date'>
          Date:
          <input type='date' id='date' name='date' />
        </label>
        <label htmlFor='description'>
          Description:
          <input type='text' id='description' name='description' />
        </label>
        <input type='submit' value='Save' />
      </form>
    </div>
  );
};

export default EventForm;
