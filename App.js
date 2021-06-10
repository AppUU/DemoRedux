import './src/utils/global';
import React from 'react';
import RootScreen from './src/routers/RootScreen';
import { Provider } from 'react-redux';
import { store } from './src/reduxState/store';
import { persistor } from './src/reduxState/store';
import { PersistGate } from 'redux-persist/es/integration/react';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar translucent={true} backgroundColor="transparent" barStyle='light-content' />
      <PersistGate loading={null} persistor={persistor}>
        <RootScreen />
      </PersistGate>
    </Provider>
  );
};

export default App;
