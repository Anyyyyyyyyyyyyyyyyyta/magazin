import {SET_TOTAL_PRICE, SET_ITEMS_COUNT, SET_ITEMS} from '../constants'

export const addToys = (toysObj) => ({
    type: 'SET_ADD_TOYS_ITEMS',
    payload: toysObj
})

export const setTotalPrice = (price) => {
    return {
        payload: price,
        type: SET_TOTAL_PRICE,
    }
}

export const setItemsCount = (count) => {
    return {
        payload: count,
        type: SET_ITEMS_COUNT,
    }
}

export const setItems = (items) => {
    return{
        type: SET_ITEMS,
        payload: items
    }
}