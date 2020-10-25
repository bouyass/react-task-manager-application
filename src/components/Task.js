import React, { useEffect } from 'react'
import './Task.css'
import {connect} from 'react-redux'

function Task(props) {

    const states = ['suspended', 'todo', 'progress', 'done','remove']

    const stateMatchs = [[false,true,false,false,false],[true,false,true,true,false],[true,false,false,true,false],[false,false,false,false,true]]

    useEffect(() => {
       var divs = document.getElementsByClassName('task')
       for( let item of divs){
           item.style.borderLeft = '4px solid '+props.theme
           item.style.borderRight = '4px solid '+props.theme
       }
    }, [props.theme])

    return (
        <div className="task">
            <p> {props.task.content}</p>
            <div className="task-footer">
            <div className="timeClass"> <img style={{width:'15px',}} src="images/time.jpg" /> <span> {props.task.date} </span></div>
            <div className="buttons"> 
                {
                    states.map((item,index) => {
                        if(stateMatchs[props.state][index]){
                            return <span id={item} className="roundButton">&nbsp;&nbsp;&nbsp;&nbsp;</span>  
                        }
                    })
                }
            </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    theme: state.navbar.theme
})
export default connect(mapStateToProps,{})(Task)
