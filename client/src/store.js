import {createStore, compose, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';
import reducer from './reducers';
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const hasDevTools = () => typeof window === 'object' && typeof window.devToolsExtension !== 'undefined';

const createDevStore = () => createStoreWithMiddleware(reducer, compose(hasDevTools() ? window.devToolsExtension() : (f) => f));

const createProdStore = () => createStoreWithMiddleware(reducer);

const storeConfig = {development: createDevStore, production: createProdStore};

export default storeConfig[process.env.NODE_ENV]();
