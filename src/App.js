import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import CovidInfo from './CovidInfo';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <CovidInfo />
      </div>
    </Provider>
  );
};

export default App;