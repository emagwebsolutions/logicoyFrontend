import {constants} from '../constants'

export const fetchallusers = (data)=>{
    return {
        type: constants.FETCH_ALL_USERS,
        payload: data
    }
}


export const fetchalljobs = (data)=>{
    return {
        type: constants.FETCH_ALL_JOBS,
        payload: data
    }
}

export const fetchalldrivers = (data)=>{
    return {
        type: constants.FETCH_ALL_DRIVERS,
        payload: data
    }
}


export const fetchalltransporters = (data)=>{
    return {
        type: constants.FETCH_ALL_TRANSPORTERS,
        payload: data
    }
}

