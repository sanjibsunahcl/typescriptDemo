import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistStore} from 'redux-persist';
import rootSaga from '../sagas/index';
import rootReducer from '../reducer/index';

const sagaMiddleware = createSagaMiddleware();

// // Middleware: Redux Persist Config
// const persistConfig = {
//   // Root?
//   key: 'demo_root',
//   // Storage Method (React Native)
//   // Whitelist (Save Specific Reducers)
//   whitelist: ['auth'],
//   //transforms: [encryptor]
// };

// // Middleware: Redux Persist Persisted Reducer
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux: Store
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

// Middleware: Redux Persist Persister
let persistor = persistStore(store);
sagaMiddleware.run(rootSaga);
// Exports
export {store, persistor};
