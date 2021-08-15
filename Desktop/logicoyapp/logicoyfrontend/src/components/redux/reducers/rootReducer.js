import { combineReducers } from "redux";
import jobsReducer from './jobsReducer'
import usersReducer from './usersReducer'
import driversReducer from './driversReducer'
import transportersReducer from './transportersReducer'
import waybillsReducer from './waybillsReducer'
import trucksReducer from './trucksReducer'
import cargoratesReducer from './cargoratesReducer'
import fuelratesReducer from './fuelratesReducer'

const rootReducer = combineReducers({
    users: usersReducer,
    jobs: jobsReducer,
    drivers: driversReducer,
    transporters: transportersReducer,
    waybills: waybillsReducer,
    trucks: trucksReducer,
    cargorates: cargoratesReducer,
    fuelrates: fuelratesReducer
})


export default rootReducer