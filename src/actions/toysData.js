import {SET_NAME_TOYS} from '../constants'


export const setNameToys = (toys) => {
    return {
        payload: toys,
        type: SET_NAME_TOYS,
    }

}