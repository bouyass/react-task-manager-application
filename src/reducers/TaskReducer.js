import data from '../initialData'
import {CHANGE_TASK_STATE_DRAG,CHANGE_TASK_STATE_MOUSE, CHANGE_TASK_ORDER, CHANGE_TASK_STATE,REMOVE_TASK} from '../actions/types'


const initialState = {tasksData: data, nbrTasks:21}
export default function(state=initialState,action){
    switch(action.type){
        case CHANGE_TASK_ORDER:
            return  {...state, tasksData:{ 
                    ...state.tasksData,
                    columns: {
                        ...state.tasksData.columns,
                        [action.payload.id]: action.payload
                    }  
                }  
            }
        
        case CHANGE_TASK_STATE_DRAG:
            return  {...state, tasksData:{ 
                ...state.tasksData,
                columns: {
                    ...state.tasksData.columns,
                    [action.payload.srcCol.id]: action.payload.srcCol,
                    [action.payload.destCol.id]: action.payload.destCol
                }  
            }  
        }
        
        case CHANGE_TASK_STATE_MOUSE:
            const newTasksIds = state.tasksData.columns[action.payload.state].taskIds
            newTasksIds.push('task-'+state.nbrTasks)
            const nbr  = (state.nbrTasks + 1)
            console.log(nbr)
            return {...state, tasksData:{ 
                ...state.tasksData,
                tasks: {
                    ...state.tasksData.tasks,
                    ['task-'+state.nbrTasks]: {id:'task-'+state.nbrTasks, content: action.payload.content, date: action.payload.date}
                },
                columns: {
                    ...state.tasksData.columns,
                    [action.payload.state]: {
                        ...state.tasksData.columns[action.payload.state],
                        taskIds: newTasksIds
                    }
                }  
                }, 
                nbrTasks: nbr, 
            }

        case REMOVE_TASK:
            const newTasks = state.tasksData.columns[action.payload.firstColumn].taskIds.filter(item => item !== action.payload.task)
            return {...state, tasksData:{ 
                ...state.tasksData,
                columns: {
                    ...state.tasksData.columns,
                    [action.payload.firstColumn]: {
                        ...state.tasksData.columns[action.payload.firstColumn],
                        taskIds: newTasks
                    }
                }  
                }  
            }

        case CHANGE_TASK_STATE: 

            const firstColumnsTasks = state.tasksData.columns[action.payload.firstColumn].taskIds.filter(item => item !== action.payload.task)
            const secondColumnsTasks = state.tasksData.columns[action.payload.secondColumn].taskIds
            secondColumnsTasks.push(action.payload.task)

            return {...state, tasksData:{ 
                ...state.tasksData,
                columns: {
                    ...state.tasksData.columns,
                    [action.payload.firstColumn]: {
                        ...state.tasksData.columns[action.payload.firstColumn],
                        taskIds: firstColumnsTasks
                    },
                    [action.payload.secondColumn]: {
                        ...state.tasksData.columns[action.payload.secondColumn],
                        taskIds: secondColumnsTasks
                    }
                }  
                }  
            }

        default:
            return state
    }
}