import axios from 'axios'
import {SET_NAME_TOYS, LOADING} from '../constants'

export const loadingData = (payload) => {
    return{
        type: LOADING,
        payload: payload
    }
}

export const fetchToys = (sortBy,category) => (dispatch) => {
    axios.get(`http://localhost:3333/toys?${category !== null ? `category=${category}`: ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
    .then(({data}) => {
      dispatch(setNameToys(data))
    })
}

export const setNameToys = (toys) => {
    return {
        payload: toys,
        type: SET_NAME_TOYS,
    }

}