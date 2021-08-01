import {createStore,compose,applyMiddleware} from 'redux'
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk'


const composedEnhancer = compose(applyMiddleware(thunk))
export const store = createStore(rootReducer, {}, composedEnhancer);

