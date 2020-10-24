import {CHANGE_THEME} from '../actions/types'

const initialState = {theme:'#B6E745', backUrl:'theme-1'}
export default function (state=initialState, action) {
    switch(action.type){
        case CHANGE_THEME:
            return {...state, theme: action.payload.theme, backUrl:action.payload.url}
        default:
            return state
    }
}