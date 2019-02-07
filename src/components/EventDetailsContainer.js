import React from 'react';
import { connect } from 'react-redux';
import EventDetails from './EventDetails';
import { loadEvent, deleteEvent, updateEvent } from '../actions/events';

class EventDetailsContainer extends React.Component {
  state = { editMode: false };

  componentDidMount() {
    this.props.loadEvent(Number(this.props.match.params.id));
  }

  onDelete = () => {
    this.props.deleteEvent(this.props.event.id);
    this.props.history.push('/');
  };

  onEdit = () => {
    this.setState({
      editMode: true,
      formValues: {
        name: this.props.event.name,
        date: this.props.event.date,
        description: this.props.event.description
      }
    });
  };

  onChange = event => {
    this.setState({
      formValues: {
        ...this.state.formValues,
        [event.target.name]: event.target.value
      }
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState({
      editMode: false
    });
    this.props.updateEvent(this.props.event.id, this.state.formValues);
    this.props.history.push('/');
  };

  render() {
    if (
      !this.props.event ||
      this.props.event.id !== Number(this.props.match.params.id)
    )
      return 'Loading';
    return (
      <EventDetails
        onDelete={this.onDelete}
        event={this.props.event}
        editMode={this.state.editMode}
        onEdit={this.onEdit}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        formValues={this.state.formValues}
      />
    );
  }
}

const mapStateToProps = state => ({
  event: state.event
});

export default connect(
  mapStateToProps,
  { loadEvent, deleteEvent, updateEvent }
)(EventDetailsContainer);
