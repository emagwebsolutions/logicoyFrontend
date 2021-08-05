import { combineReducers } from "redux";
import jobsReducer from './jobsReducer'
import usersReducer from './usersReducer'
import driversReducer from './driversReducer'
import transportersReducer from './transportersReducer'
import waybillsReducer from './waybillsReducer'
import trucksReducer from './trucksReducer'
import transratesReducer from './transratesReducer'
import fuelratesReducer from './fuelratesReducer'

const rootReducer = combineReducers({
    users: usersReducer,
    jobs: jobsReducer,
    drivers: driversReducer,
    transporters: transportersReducer,
    waybills: waybillsReducer,
    trucks: trucksReducer,
    transrates: transratesReducer,
    fuelrates: fuelratesReducer
})


export default rootReducer