import {constants} from '../constants'

export default function cargoratesReducer(state = {}, {type,payload}){
    
    switch(type){
        case constants.FETCH_ALL_CARGORATES:
            return  {...state, cargos: payload}
        default:
            return state
    }
}

