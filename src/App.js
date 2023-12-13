import React from 'react';
import { Provider } from 'react-redux';
import store from '../src/store';
import CovidInfo from './components/CovidInfo';

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