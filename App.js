import React from 'react';
import rootReducer from './src/reducers';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootSaga from './src/actions/sagas';
import {StackNavigator} from './src/navigators/StackNavigator';
import {NavigationContainer} from '@react-navigation/native';
const sagaMiddleware = createSagaMiddleware();
const initialState = { coming:[],suggest:[],counter: 0,chatCounter:0, groups: [], tag: [], chatRoom: '',res:[], user:[],chatTag:[],signup:[],groupUser:[],sendMail:[],accept:''};

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  );
}
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);
export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}