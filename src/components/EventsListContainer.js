import React from 'react';
import { connect } from 'react-redux';

import { loadEvents } from '../actions/events';
import EventsList from './EventsList';
import CreateEventFormContainer from './CreateEventFormContainer';

class EventsListContainer extends React.Component {
  componentDidMount() {
    this.props.loadEvents();
  }

  render() {
    if (!this.props.events) return 'Loading';
    return (
      <div>
        <EventsList events={this.props.events} />
        <CreateEventFormContainer />
      </div>
    );
  }
}

const mapStateToProps = state => ({ events: state.events });

export default connect(
  mapStateToProps,
  { loadEvents }
)(EventsListContainer);
