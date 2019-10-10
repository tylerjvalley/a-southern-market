import rootReducer from '../reducers/index';
import { createStore, applyMiddleware, compose } from 'redux';
import persistState from 'redux-localstorage';
import thunk from 'redux-thunk';

const initialState = {};
const middleware = [thunk]
const enhancer = compose(
    applyMiddleware(...middleware) + window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    persistState() //localstorage
)
const store = createStore(
    rootReducer, /* preloadedState, */
    initialState,
    enhancer
);




export default store;