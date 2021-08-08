import {createStore,compose,applyMiddleware} from 'redux'
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const composedEnhancer = compose(applyMiddleware(thunk))



const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export let store = createStore(persistedReducer,composedEnhancer)
export let persistor = persistStore(store)
