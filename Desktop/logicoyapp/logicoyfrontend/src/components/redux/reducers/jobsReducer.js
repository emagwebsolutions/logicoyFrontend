import {constants} from '../constants'

export default function jobsReducer(state = {}, {type,payload}){
    switch(type){
        case constants.FETCH_ALL_JOBS:
            return  {...state, alljobs: payload}
        default:
            return state
    }
}