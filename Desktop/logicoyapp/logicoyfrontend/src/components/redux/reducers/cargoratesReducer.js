import {constants} from '../constants'

export default function cargoratesReducer(state = {}, {type,payload}){
    
    switch(type){
        case constants.FETCH_ALL_CARGORATES:
            return  {...state, cargorates: payload}
        default:
            return state
    }
}

