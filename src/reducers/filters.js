import {SET_VALUE_CATEGORY, SET_SORT_BY} from '../constants'

const initialState = {
    sortBy: {
        order: 'desc',
        type: 'rating'
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