import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import CarScreen from './src/screens/CarScreen';
import LoginScreen from './src/screens/LoginScreen';
import rootReducer from './src/reducers';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootSaga from './src/actions/sagas';
// import LoginScreen from './src/screens/LoginScreen';
const navigator = createStackNavigator(
  {
    Login: LoginScreen,
    Home: HomeScreen,
    Car: CarScreen
  },
  {
    initialRouteName: 'Login'
  }
);
const sagaMiddleware = createSagaMiddleware();
const initialState = { counter: 0, customAsyncData: "", tag: [] };
const App = createAppContainer(navigator);
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