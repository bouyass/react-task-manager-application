import React, { useEffect, useState } from 'react'
import './Mainview.css'
import {connect} from 'react-redux'
import TaskContainer from './TaskContainer'
import {DragDropContext} from 'react-beautiful-dnd'
import {changeTaskOrder, changeTaskState} from '../actions/TaskActions'
import Modal from 'react-awesome-modal';

function Mainview(props) {

    const [modal , setModal] = useState(false)
    const [srcState , setSrcState] = useState('')
    const [destState , setDestState] = useState('')
    var stateMatchs = [[false,true,false,false,false],[true,false,true,true,false],[true,false,false,true,false],[false,false,false,false,true]]
    var stateArray = ['Suspended', 'Todo', 'In progress', 'Performed']

    const onDragEnd = (result) => {
        const {destination, source, draggableId} = result
        // no destination
        if(!destination){
            return;
        }
        // same destination
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
            ){
                return;
            }
  
            if(source.droppableId === destination.droppableId){
                // the source column
                const column = props.tasksData.columns[source.droppableId]
                // the tasks of the source column
                const newTaskIds = Array.from(column.taskIds)
                // deleting the card from source column
                newTaskIds.splice(source.index,1)
                // adding the card to the source column
                newTaskIds.splice(destination.index,0,draggableId)
                // creating a new column with the tasks
                const newColumn = {
                    ...column,
                    taskIds: newTaskIds
                }
                props.changeTaskOrder(newColumn)

            }else{
                // the source column
                const sourceColumn = props.tasksData.columns[source.droppableId]
                // the destination column
                const destColumn = props.tasksData.columns[destination.droppableId]

                if(stateMatchs[sourceColumn.state][destColumn.state]){
                    // the tasks of the source column
                    const sourceNewTaskIds = Array.from(sourceColumn.taskIds)
                    // deleting the card from source column
                    sourceNewTaskIds.splice(source.index,1)
                    // the tasks of the destination column
                    const DestNewTaskIds = Array.from(destColumn.taskIds)
                    // adding the card to the source column
                    DestNewTaskIds.splice(destination.index,0,draggableId)
                    // creating a new column with the tasks


                    const newDestColumn = {
                        ...destColumn,
                        taskIds: DestNewTaskIds
                    }

                    const newSourceColumn = {
                        ...sourceColumn,
                        taskIds: sourceNewTaskIds
                    }

                    props.changeTaskState(newSourceColumn, newDestColumn)

                }else{
                    setSrcState(stateArray[sourceColumn.state])
                    setDestState(stateArray[destColumn.state])
                    setModal(true)
                }

                
            }
        }

    useEffect(() => {
        document.getElementById('mainview').style.backgroundImage = `url('images/${props.url}.jpg')`
        document.getElementById('modalBtn').style.backgroundColor = props.theme
    },[props.url])

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            
                <div id="mainview" className="mainview">

                {
                props.tasksData.columnOrder.map(column => {
                    
                    return  <TaskContainer key={column.id} data={props.tasksData.columns[column]} state={props.tasksData.columns[column].state} title={props.tasksData.columns[column].title}/>
                })
                }

                <Modal visible={modal} width="400" height="200" effect="fadeInUp" onClickAway={() => setModal(false)}>
                    <div>
                        <h1>Information</h1>
                        <p><b>{srcState} tasks cannot pass to {destState} tasks.</b></p>
                        <button onClick={() => setModal(false)} id="modalBtn"> Close </button>
                    </div>
                </Modal>
                </div>
                 
        
        </DragDropContext>
    )
}

const mapStateToProps = (state) => ({
    url: state.navbar.backUrl,
    tasksData: state.taskState.tasksData,
    theme: state.navbar.theme
})
export default connect(mapStateToProps, {changeTaskOrder, changeTaskState})(Mainview)
