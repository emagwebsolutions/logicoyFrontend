import {constants} from '../constants'

export default function transratesReducer(state = {}, {type,payload}){
    
    switch(type){
        case constants.FETCH_ALL_TRANSPORTERSRATES:
            return  {...state, alltransrates: payload}
        default:
            return state
    }
}

