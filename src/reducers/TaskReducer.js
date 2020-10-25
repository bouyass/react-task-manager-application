import data from '../initialData'

const initialState = {tasksData: data}
export default function(state=initialState,action){
    switch(action.type){
        default:
            return state
    }
}