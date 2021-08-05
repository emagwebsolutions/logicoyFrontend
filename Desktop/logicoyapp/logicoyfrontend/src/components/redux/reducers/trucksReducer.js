import {constants} from '../constants'

export default function trucksReducer(state = {}, {type,payload}){
    
    switch(type){
        case constants.FETCH_ALL_TRUCKS:
            return  {...state, alltrucks: payload}
        default:
            return state
    }
}

