import { combineReducers } from "redux";
import jobsReducer from './jobsReducer'
import usersReducer from './usersReducer'
import driversReducer from './driversReducer'
import transportersReducer from './transportersReducer'

const rootReducer = combineReducers({
    users: usersReducer,
    jobs: jobsReducer,
    drivers: driversReducer,
    transporters: transportersReducer
})

export default rootReducer