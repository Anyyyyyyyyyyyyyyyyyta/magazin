import axios from 'axios'
import {SET_NAME_TOYS} from '../constants'
import {useDispatch} from 'react-redux'

export const fetchToys = () => (dispatch) => {
    axios.get('http://localhost:3333/toys').then(({data}) => {
      dispatch(setNameToys(data))
    })
}

export const setNameToys = (toys) => {
    return {
        payload: toys,
        type: SET_NAME_TOYS,
    }

}