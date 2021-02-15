import {toysData, filterReducer} from '../reducers'
import {combineReducers} from 'redux'

export const rootReducer = combineReducers({
    toysData: toysData,
    filter: filterReducer

});

