// import {createStore, applyMiddleware, compose} from 'redux';
// import thunk from 'redux-thunk';
// import { persistStore, persistReducer } from 'redux-persist'
// import {AsyncStorage} from 'react-native'

// import rootReducer from './reducers';

// const initialState = {};

// //Configurations for persisted reducer , Key==id of storage, storage is async for mobile, local/session for web -- GULAM[18/02/2020]--CREATED
// const persistConfig = {
//   key: 'root2',
//   storage:AsyncStorage,

// }

// const middleware = [thunk];
// const composeEnhancers =
//   typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//     : compose;

// const enhancer = composeEnhancers(applyMiddleware(...middleware));

// //Persisted Reducer stores the persisted reducer in async storage --GULAM:{18/02/2020}--CREATED
// const persistedReducer = persistReducer(persistConfig, rootReducer)

// // Returns a function from where normal and persisted store can be used -- GULAM[18/02/2020]--CREATED
// export default () => {
//   let store = createStore(persistedReducer,{},enhancer)
//   let persistor = persistStore(store)
//   return { store, persistor }
// }

import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './src/reducers';

const initialState = {};

const middleware = [thunk];
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));

const store = createStore(rootReducer, initialState, enhancer);

export default store;
