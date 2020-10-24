import {CHANGE_THEME} from './types'


export const fetchTheme = (theme, url) => (dispatch) => {
    dispatch({type:CHANGE_THEME, payload: {theme:theme, url:url}})
}