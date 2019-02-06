import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';

import store from './store';
import EventsListContainer from './components/EventsListContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route path='/' exact component={EventsListContainer} />
        </div>
      </Provider>
    );
  }
}

export default App;
