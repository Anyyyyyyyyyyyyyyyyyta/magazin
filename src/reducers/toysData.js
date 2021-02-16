import {SET_NAME_TOYS} from '../constants'

const initialState = {
    items: [],
    isLoading: false
}

export const toysData = (state = initialState, action) => {
    switch (action.type) {
        case SET_NAME_TOYS: {
            return {
                ...state, items: action.payload, isLoading: true
            }
        }
        
        default: {
            return state
        }

    }

}