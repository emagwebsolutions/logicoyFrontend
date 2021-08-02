import {createStore,compose,applyMiddleware} from 'redux'
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const composedEnhancer = compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())



const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['users','jobs','drivers','transporters']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export let store = createStore(persistedReducer,composedEnhancer)
export let persistor = persistStore(store)
