import 'react-native';
import React from 'react';
import CarScreen from '../src/screens/CarScreen';

import rootReducer from '../src/reducers';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootSaga from '../src/actions/sagas';

import renderer from 'react-test-renderer';

jest.useFakeTimers();
const sagaMiddleware = createSagaMiddleware();
const initialState = { counter: 0, groups: [], tag: [] };
const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(rootSaga);

it('renders correctly', ()=>{
    const hello = renderer.create(
        <Provider store={store}>
            <CarScreen/>
        </Provider>
    );
});