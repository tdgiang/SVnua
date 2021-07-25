/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './src/Reducers/index';
import RootView from './src/RootView';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './src/Saga/rootSaga';
import SplashScreen from 'react-native-splash-screen';
const sagaMiddleware = createSagaMiddleware();

let store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

import Test from './TestView';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <RootView />
    </Provider>
  );
};

export default App;
