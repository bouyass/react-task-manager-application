import React, { useEffect } from 'react'
import './Mainview.css'
import {connect} from 'react-redux'
import TaskContainer from './TaskContainer'
import {DragDropContext} from 'react-beautiful-dnd'


function Mainview(props) {

    const onDragEnd = (result) => {

    }

    useEffect(() => {
        console.log(props.tasksData)
        document.getElementById('mainview').style.backgroundImage = `url('images/${props.url}.jpg')`
    },[props.url])

    return (
        <DragDropContext
            onDragEnd={onDragEnd}
        >
        <div id="mainview" className="mainview">
            {
                props.tasksData.columnOrder.map(column => {
                    return <TaskContainer key={column} data={props.tasksData.columns[column]} state={props.tasksData.columns[column].state} title={props.tasksData.columns[column].title}/>
                })
            }
        </div>
        </DragDropContext>
    )
}

const mapStateToProps = (state) => ({
    url: state.navbar.backUrl,
    tasksData: state.taskState.tasksData
})
export default connect(mapStateToProps, {})(Mainview)
