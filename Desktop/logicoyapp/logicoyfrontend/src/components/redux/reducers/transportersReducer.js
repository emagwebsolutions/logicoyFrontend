import {constants} from '../constants'

export default function transportersReducer(state = {}, {type,payload}){
    switch(type){
        case constants.FETCH_ALL_TRANSPORTERS:
            return  {...state, alltrans: payload}
            default:
            return state
    }
}

