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

export const fetchalltrucks = (data)=>{
    return {
        type: constants.FETCH_ALL_TRUCKS,
        payload: data
    }
}

export const fetchallwaybills = (data)=>{
    return {
        type: constants.FETCH_ALL_WAYBILLS,
        payload: data
    }
}

export const fetchallfuelrates = (data)=>{
    return {
        type: constants.FETCH_ALL_FUELRATES,
        payload: data
    }
}




export const fetchalltransporters = (data)=>{
    return {
        type: constants.FETCH_ALL_TRANSPORTERS,
        payload: data
    }
}




export const fetchallfuel = (data)=>{
    return {
        type: constants.FETCH_ALL_FUELRATES,
        payload: data
    }
}

export const fetchallcargo = (data)=>{
    return {
        type: constants.FETCH_ALL_CARGORATES,
        payload: data
    }
}
