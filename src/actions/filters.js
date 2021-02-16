import {SET_VALUE_CATEGORY, SET_VALUE_SORT, SET_SORT_BY} from '../constants'

export const setSelectCategory = (category) => {
    return {
        payload: category,
        type: SET_VALUE_CATEGORY,
    }
}

export const setSelectSortBy = (filters) => {
    return {
        payload: filters,
        type: SET_VALUE_SORT,
    }
}

export const setSortBy = (payload) => {
    return{
        type: SET_SORT_BY,
        payload: payload
    }
}