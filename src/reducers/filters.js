import {SET_VALUE_CATEGORY, SET_VALUE_SORT, SET_SORT_BY} from '../constants'

const initialState = {
    sortBy: {
        order: 'desc',
        type: 'popular'
    },
    category: null,

}

export const filter = (state = initialState, action) => {
    
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