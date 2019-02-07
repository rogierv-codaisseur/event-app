import React from 'react';
import { connect } from 'react-redux';
import EventDetails from './EventDetails';
import { loadEvent } from '../actions/events';

class EventDetailsContainer extends React.Component {
  componentDidMount() {
    this.props.loadEvent(Number(this.props.match.params.id));
  }

  render() {
    if (
      !this.props.event ||
      this.props.event.id !== Number(this.props.match.params.id)
    )
      return 'Loading';
    return <EventDetails event={this.props.event} />;
  }
}

const mapStateToProps = state => ({
  event: state.event
});

export default connect(
  mapStateToProps,
  { loadEvent }
)(EventDetailsContainer);
