import data from '../initialData'
import {CHANGE_TASK_STATE_DRAG,CHANGE_TASK_STATE_MOUSE, CHANGE_TASK_ORDER, CHANGE_TASK_STATE,REMOVE_TASK} from '../actions/types'


const initialState = {tasksData: JSON.parse(localStorage.getItem('myTaskStorestate'))['tasksData'], nbrTasks:21}
export default function(state=initialState,action){
    switch(action.type){
        case CHANGE_TASK_ORDER:
            const newState0 =   {...state, tasksData:{ 
                    ...state.tasksData,
                    columns: {
                        ...state.tasksData.columns,
                        [action.payload.id]: action.payload
                    }  
                }  
            }
            localStorage.setItem('myTaskStorestate', JSON.stringify(newState0))
        return newState0
        
        case CHANGE_TASK_STATE_DRAG:
            const newState1 =  {...state, tasksData:{ 
                ...state.tasksData,
                columns: {
                    ...state.tasksData.columns,
                    [action.payload.srcCol.id]: action.payload.srcCol,
                    [action.payload.destCol.id]: action.payload.destCol
                }  
            }  
        }
        localStorage.setItem('myTaskStorestate', JSON.stringify(newState1))
        return newState1
        
        case CHANGE_TASK_STATE_MOUSE:
            const newTasksIds = state.tasksData.columns[action.payload.state].taskIds
            newTasksIds.push('task-'+state.nbrTasks)
            const nbr  = (state.nbrTasks + 1)
            console.log(nbr)
            const newState2 = {...state, tasksData:{ 
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
            localStorage.setItem('myTaskStorestate', JSON.stringify(newState2))
        return newState2

        case REMOVE_TASK:
            const newTasks = state.tasksData.columns[action.payload.firstColumn].taskIds.filter(item => item !== action.payload.task)
            const newState3 =  {...state, tasksData:{ 
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
            localStorage.setItem('myTaskStorestate', JSON.stringify(newState3))
        return newState3

        case CHANGE_TASK_STATE: 

            const firstColumnsTasks = state.tasksData.columns[action.payload.firstColumn].taskIds.filter(item => item !== action.payload.task)
            const secondColumnsTasks = state.tasksData.columns[action.payload.secondColumn].taskIds
            secondColumnsTasks.push(action.payload.task)

            const newState4 =  {...state, tasksData:{ 
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

        localStorage.setItem('myTaskStorestate', JSON.stringify(newState4))
        return newState4



        default:
            return state
    }
}