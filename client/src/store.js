import { createStore, compose, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import reducer from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk, ReduxPromise)(createStore);

const persistedState = localStorage.getItem('reduxState') === null ? {} :
JSON.parse(localStorage.getItem('reduxState'));

const hasDevTools = () => typeof window === 'object' && typeof window.devToolsExtension !== 'undefined';

const createDevStore = () => createStoreWithMiddleware(reducer, persistedState, compose(hasDevTools() ? window.devToolsExtension() : f => f));

const createProdStore = () => createStoreWithMiddleware(reducer);

const storeConfig = { development: createDevStore, production: createProdStore };

export default storeConfig[process.env.NODE_ENV]();
