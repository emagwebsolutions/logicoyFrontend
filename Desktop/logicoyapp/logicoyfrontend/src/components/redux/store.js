import {createStore,compose,applyMiddleware} from 'redux'
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk'


const composedEnhancer = compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk))
export const store = createStore(rootReducer, {}, composedEnhancer);

