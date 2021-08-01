import {constants} from '../constants'

export default function usersReducer(state ={} , {type,payload}){
    switch(type){
        case constants.FETCH_ALL_USERS:
            return {...state, allusers: payload}
        default:
            return state
    }
}