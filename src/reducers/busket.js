import {SET_TOTAL_PRICE, SET_ITEMS_COUNT, SET_ADD_TOYS_ITEMS} from '../constants'

const initialState = {
    items: {},
    totalPrice: 0,
    itemsCount: 0,
}

 const busket = (state = initialState, action) => {
    switch (action.type) {
        case SET_ADD_TOYS_ITEMS: {
            const newItems = {   //хранение актуальных данных
                ...state.items,
                [action.payload.id]: !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id], action.payload]
            }
            let arr = [].concat.apply([],Object.values(newItems))
            return {
                ...state, 
                items: newItems,
                itemsCount: arr.length,
                totalPrice: arr.reduce((sum,obj) => (obj.price + sum), 0)
            }
        }
        // case SET_TOTAL_PRICE: {
        //     return {
        //         ...state, totalPrice: action.payload
        //     }
        // }
        // case SET_ITEMS_COUNT: {
        //     return {
        //         ...state, itemsCount: action.payload
        //     }
        // }
        default: {
            return state
        }
    }
}

export default busket