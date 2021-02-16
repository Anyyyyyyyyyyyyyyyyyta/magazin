import {SET_VALUE_CATEGORY, SET_VALUE_SORT, SET_SORT_BY} from '../constants'

const initialState = {
    sortBy: {
        type: 'popular',
        order: 'desc'
    },
    category: null,

}

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_VALUE_CATEGORY: {
            return {
                ...state, category: action.payload
            }
        }
        // case SET_VALUE_SORT: {
        //     return {
        //         ...state, sortBy: action.payload
        //     }
        // }
        case SET_SORT_BY: {
            return {
                ...state, sortBy: action.payload
            }
        }
        default: {
            return state
        }

    }

}