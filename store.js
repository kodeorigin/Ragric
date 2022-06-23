
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import {   
    farmerDetailsReducer,
  } from './components/reducers/farmerReducers';


const initialState = {
   

};

const reducer = combineReducers({
    farmerDetails:farmerDetailsReducer,
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;


