import './src/utils/global';
import React from 'react';
import RootScreen from './src/routers/RootScreen';
import { Provider } from 'react-redux';
import { store } from './src/reduxState/store';

const App = () => {
  return (
    <Provider store={store}>
      <RootScreen />
    </Provider>
  );
};

export default App;
