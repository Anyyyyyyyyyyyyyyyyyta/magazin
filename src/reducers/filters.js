import {SET_VALUE_CATEGORY, SET_VALUE_SORT} from '../constants'

const initialState = {
    sortBy: 0,
    category: 0,

}

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_VALUE_CATEGORY: {
            return {
                ...state, category: action.payload
            }
        }
        case SET_VALUE_SORT: {
            return {
                ...state, sortBy: action.payload
            }
        }
        default: {
            return state
        }

    }

}