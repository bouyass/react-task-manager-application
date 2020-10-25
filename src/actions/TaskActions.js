import { CHANGE_TASK_ORDER, CHANGE_TASK_STATE_DRAG,CHANGE_TASK_STATE_MOUSE, CHANGE_TASK_STATE, REMOVE_TASK} from './types'

export const changeTaskOrder = (column) => (dispatch) => {
    dispatch({type:CHANGE_TASK_ORDER, payload:column})
} 

export const changeTaskState = (sourceColumn, destColumn) => (dispatch) => {
    dispatch({type:CHANGE_TASK_STATE_DRAG, payload:{srcCol:sourceColumn, destCol: destColumn}})
}

export const addNewTask = (content, state) => (dispatch) => {
    const date = new Date()
    dispatch({type:CHANGE_TASK_STATE_MOUSE, payload: {state:state, content:content, date: 
                (date.getDate().length > 1 ?date.getDate() : ("0"+date.getDate()).slice(-2))+'-'
                + (date.getMonth().length > 1 ?date.getMonth() : ("0"+date.getMonth()).slice(-2)) +'-'
                +(date.getFullYear().length > 1 ?date.getFullYear() : ("0"+date.getFullYear()).slice(-2)) +' '
                + (date.getHours().length > 1 ?date.getHours() : ("0"+date.getHours()).slice(-2)) +':'
                + (date.getMinutes().length > 1 ?date.getMinutes() : ("0"+date.getMinutes()).slice(-2)) +':'
                 + (date.getSeconds().length > 1 ?date.getSeconds() : ("0"+date.getSeconds()).slice(-2)) }})
}

export const changeTaskStateNd = (firstColumn, secondColumn, task) => (dispatch) => {
    if(secondColumn !== 'column-5'){
        dispatch({type: CHANGE_TASK_STATE, payload:{firstColumn:firstColumn, secondColumn: secondColumn, task: task}})
    }else{
        dispatch({type: REMOVE_TASK, payload: {firstColumn:firstColumn, task:task}})
    }
    
}

