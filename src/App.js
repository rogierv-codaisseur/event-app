import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Routes from './components/Routes';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes authenticated={true} />
      </Provider>
    );
  }
}

export default App;
