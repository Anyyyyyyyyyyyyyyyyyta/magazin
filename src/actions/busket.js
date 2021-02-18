import {CLEAR_BUSKET_TOYS,DELETE_ALL_THIS_TOYS,
    ADD_ONE_THIS_TOYS,DELETE_ONE_THIS_TOYS,SET_ADD_TOYS_ITEMS} from '../constants'

export const addToys = (toysObj) => ({
    type: SET_ADD_TOYS_ITEMS,
    payload: toysObj
})

export const clearBusketToys = () => ({
    type: CLEAR_BUSKET_TOYS,
})

export const deleteAllThisToys = (id) => ({
    type: DELETE_ALL_THIS_TOYS,
    payload: id
})

export const addOneThisToys = (id) => ({
    type: ADD_ONE_THIS_TOYS,
    payload: id
})

export const deleteOneThisToys = (id) => ({
    type: DELETE_ONE_THIS_TOYS,
    payload: id
})




