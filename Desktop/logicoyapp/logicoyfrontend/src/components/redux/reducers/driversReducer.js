import {constants} from '../constants'

export default function driversReducer(state = {}, {type,payload}){
    
    switch(type){
        case constants.FETCH_ALL_DRIVERS:
            return  {...state, alldrivers: payload}
        default:
            return state
    }
}