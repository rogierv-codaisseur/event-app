import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';

import store from './store';
import EventsListContainer from './components/EventsListContainer';
import EventDetailsContainer from './components/EventDetailsContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route path='/' exact component={EventsListContainer} />
          <Route path='/events/:id' component={EventDetailsContainer} />
        </div>
      </Provider>
    );
  }
}

export default App;
