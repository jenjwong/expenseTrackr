import {createStore, compose} from 'redux';
import reducer from './reducers';

const hasDevTools = () => typeof window === 'object' && typeof window.devToolsExtension !== 'undefined';

const createDevStore = () => createStore(reducer, compose(hasDevTools() ? window.devToolsExtension() : (f) => f));

const createProdStore = () => createStore(reducer);

const storeConfig = {development: createDevStore, production: createProdStore};

export default storeConfig[process.env.NODE_ENV]();
