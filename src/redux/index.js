import {createStore, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {configureStore} from '@reduxjs/toolkit';
import { LoginReducer } from './reducers/LoginReducer';

const reducers = combineReducers({ login: LoginReducer})
const  store = createStore(reducers)

export {store}