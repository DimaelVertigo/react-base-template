import {default as thunk} from "redux-thunk";
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {api} from '../reducers/api';
import {composeWithDevTools} from 'redux-devtools-extension';

const enhancer = composeWithDevTools(applyMiddleware(thunk));

const storeFactory = () =>
  createStore(
    combineReducers({api}), undefined, enhancer
  );

export default storeFactory;
