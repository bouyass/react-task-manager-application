import React, { useEffect } from 'react'
import './TaskContainer.css'
import {connect} from 'react-redux'
import Task from './Task'
import {Droppable} from 'react-beautiful-dnd'


function TaskContainer(props) {

    useEffect(() => {
        var divs = document.getElementsByClassName('container-title')
       for( let item of divs){
           item.style.backgroundColor = props.theme
       }
    })

    return (

        <div className="main-task-container">
            <div className="container-title"><h2 id="title"> {props.title.toUpperCase()} </h2></div>
            <div className="task-container">
                {
                    props.data.taskIds.map(item => {
                        return <Task state={props.state} task={props.tasksData.tasks[item]} />
                    })
                }
            </div>
        </div>

    )
}

const mapStateToProps = (state) => ({
    theme: state.navbar.theme,
    tasksData: state.taskState.tasksData
})
export default connect(mapStateToProps, {})(TaskContainer)
