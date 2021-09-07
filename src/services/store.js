import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import { ticketSubscriber } from './saga';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const composedEnhancers = compose(
  applyMiddleware(...middleware)
);

const store = createStore(reducer, composedEnhancers);

sagaMiddleware.run(ticketSubscriber);
export default store;