import {default as thunk} from "redux-thunk";
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {app, api, isFetching, score, page, single, url, modal, loader} from '../reducers';
import {composeWithDevTools} from 'redux-devtools-extension';

const enhancer = composeWithDevTools(applyMiddleware(thunk));

const storeFactory = () =>
  createStore(
    combineReducers({app, api, isFetching, score, page, single, url, modal, loader}), undefined, enhancer
  );

export default storeFactory;
