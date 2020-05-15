import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import invariant from 'redux-immutable-state-invariant';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const invariantMiddleware = invariant();
const sagaMiddleware = createSagaMiddleware();

const middlewareFunctions = [
  sagaMiddleware,
  invariantMiddleware
];

export default function configureStore(initialState) {
  const enhancers = process.env.NODE_ENV === 'production'
    ? applyMiddleware(...middlewareFunctions)
    : composeWithDevTools(applyMiddleware(...middlewareFunctions));

  const store = createStore(rootReducer(), initialState, enhancers);

  sagaMiddleware.run(rootSaga);

  return store;
};
