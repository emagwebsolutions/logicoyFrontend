import {constants} from '../constants'

export default function waybillsReducer(state = {}, {type,payload}){
    
    switch(type){
        case constants.FETCH_ALL_WAYBILLS:
            return  {...state, allwaybills: payload}
        default:
            return state
    }
}