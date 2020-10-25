import React, { useEffect } from 'react'
import './Task.css'
import {connect} from 'react-redux'
import {Draggable}  from 'react-beautiful-dnd'
import {changeTaskStateNd} from '../actions/TaskActions'

function Task(props) {

    const states = ['suspended', 'todo', 'progress', 'done','remove']
    const columns = ['column-1','column-2','column-3','column-4', 'column-5']


    const stateMatchs = [[false,true,false,false,true],[true,false,true,true,true],[true,false,false,true,true],[false,false,false,false,true]]

    useEffect(() => {
       var divs = document.getElementsByClassName('task')
       for( let item of divs){
           item.style.borderLeft = '4px solid '+props.theme
           item.style.borderRight = '4px solid '+props.theme
       }
    }, [props.theme])

    return (
        <Draggable draggableId={props.task.id} index={props.index} key={props.task.id}>
        {(provided) => (
            <div className="task" 
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            >
            <p> {props.task.content}</p>
            <div className="task-footer">
            <div className="timeClass"> <img style={{width:'15px',}} src="images/time.jpg" /> <span> {props.task.date} </span></div>
            <div className="buttons"> 
                {
                    states.map((item,index) => {
                        if(stateMatchs[props.state][index]){
                            return <span id={item} onClick={() => props.changeTaskStateNd(columns[props.state], columns[index], props.task.id) } className="roundButton">&nbsp;&nbsp;&nbsp;&nbsp;</span>  
                        }
                    })
                }
            </div>
            </div>
        </div>
        )}
        </Draggable>
    )
}

const mapStateToProps = (state) => ({
    theme: state.navbar.theme
})
export default connect(mapStateToProps,{changeTaskStateNd})(Task)
