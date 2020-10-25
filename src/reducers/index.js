import {combineReducers} from 'redux'
import NavbarReducer from './NavbarReducer'
import TaskReducer from './TaskReducer'

export default combineReducers({
    navbar: NavbarReducer,
    taskState: TaskReducer
})



