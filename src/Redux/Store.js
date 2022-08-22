import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { RootReducer } from './Reducer/RootReducer'
import thunk from 'redux-thunk';
import { rootsaga } from './Saga/Rootsaga';

const sagaMiddleware = createSagaMiddleware()

const Middleware = [thunk , sagaMiddleware ]

export const store = createStore(
  RootReducer,
  applyMiddleware(...Middleware)
)

sagaMiddleware.run(rootsaga)
