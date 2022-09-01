import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { RootReducer } from './Reducer/RootReducer'
import thunk from 'redux-thunk';
import { rootsaga } from './Saga/Rootsaga';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const sagaMiddleware = createSagaMiddleware()

const Middleware = [thunk , sagaMiddleware]

const persistConfig = {
  key: 'root',
  storage,
  whitelist:['auth']
}

const persistedReducer = persistReducer(persistConfig, RootReducer)

export const store = createStore(
  persistedReducer,
  applyMiddleware(...Middleware)
)

export let persistor = persistStore(store)

sagaMiddleware.run(rootsaga)