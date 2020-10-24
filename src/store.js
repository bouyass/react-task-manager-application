import {applyMiddleware,createStore} from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'

const initialStore = {}
const store = createStore(rootReducer, initialStore, applyMiddleware(thunk))

export default store