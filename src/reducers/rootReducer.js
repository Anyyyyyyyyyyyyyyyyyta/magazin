import {toysData, filter} from '../reducers'
import busket from './busket'
import {combineReducers} from 'redux'

export const rootReducer = combineReducers({
    toysData,
    filter,
    busket
});

