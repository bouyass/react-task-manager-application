import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import './Sidenav.css'
import Modal from 'react-awesome-modal';
import {policy, aboutus} from './infos'
import {addNewTask} from '../actions/TaskActions'

function Sidenav(props) {

    var states = ['Suspended','Todo','In progress','Performed']
    var columns = ['column-1','column-2','column-3','column-4']


    const [policyModal , setPolicyModal] = useState(false)
    const [aboutusModal , setAboutusModal] = useState(false)
    const [addTaskModal , setAddTaskModal] = useState(false)
    const [contentValue, setContentValue] = useState('')
    const [errorMessage , setErrorMessage] = useState('')
    const [successMessage , setSuccessMessage] = useState('')
    const [sliderValue, setSliderValue] = useState(1)

    const showPolicy = () => {
        document.getElementById('policyModalText').innerHTML = policy
        setPolicyModal(true)
    }

    const showAboutUs = () => {
        document.getElementById('aboutusModalText').innerHTML = aboutus
        setAboutusModal(true)
    }

    const scheduleTask = () => {
        // will not be implemented 
    }

    const getUsers = () => {
        // will not be handled
    }


    const addTask = () => {
        setSuccessMessage('')
        setErrorMessage('')
        if(contentValue.length === 0) {
            setErrorMessage('The task cannot be empty')
            const timer = setTimeout(function(){
                setErrorMessage('')
            },3000)
        }else{
            props.addNewTask(contentValue, columns[sliderValue])
            setContentValue('')
            setSuccessMessage('Task added with '+states[sliderValue]+' state')
            const timer1 = setTimeout(()=> {
                setSuccessMessage('')
            },3000)
            
        }
    }

    const handleChanges = (e) => {
        setContentValue(e.target.value)
    }

    const handleSlideBarChanges = (e)  => {
        setSliderValue(e.target.value)
    }

    useEffect(() => {
        document.getElementById('sidenav').style.backgroundColor = props.theme
        document.getElementById('aboutusModalBtn').style.backgroundColor = props.theme
        document.getElementById('policyModalBtn').style.backgroundColor = props.theme
        document.getElementById('closeAddTaskButton').style.backgroundColor = props.theme
        document.getElementById('addTaskButton').style.backgroundColor = props.theme
        document.getElementById('sidenav').style.backgroundImage = 'linear-gradient(transparent 25%,currentColor 70%)'
    },[props.theme])

    return (

        <div id="sidenav" className="list-container">
            <ul className="items">
                <li onClick={() => setAddTaskModal(true)}> <img  src="images/new_task.png" /><span className="itemText">New task</span></li>
                <li onClick={() => getUsers()}> <img  src="images/users.png" /><span className="itemText">Collaborating  users </span></li>
                <li onClick={() => scheduleTask()}> <img  src="images/schedule_task.png" /><span className="itemText">Schedule task</span></li>
                <li onClick={() => showAboutUs()} > <img  src="images/about_us.png" /><span className="itemText">About us</span></li>
                <li onClick={() => showPolicy()}> <img  src="images/policy.png" /><span className="itemText">Policy</span></li>
            </ul>

            <div className="social">
                <img  src="images/social-0.png" /> <img src="images/social-1.png" /> <img src="images/social-2.png" /> 
            </div>

            <Modal visible={policyModal} width="800" height="650"  effect="fadeInUp" onClickAway={() => setPolicyModal(false)}>
                    <div>
                    
                        <div style={{color:'black'}} id="policyModalText"></div>
                        <button onClick={() => setPolicyModal(false)} id="policyModalBtn"> Close </button>
                    </div>
            </Modal>
            <Modal visible={aboutusModal} width="800" height="370"  effect="fadeInUp" onClickAway={() => setAboutusModal(false)}>
                    <div>
                    
                        <div style={{color:'black'}} id="aboutusModalText"></div>
                        <button onClick={() => setAboutusModal(false)} id="aboutusModalBtn"> Close </button>
                    </div>
            </Modal>
            <Modal visible={addTaskModal} width="600" height="400"  effect="fadeInUp">
                    <div className="modal-main-container">
                        <div className="modal-header"><img src="images/info.png" /><h3> ADD TASK FORM </h3></div>
                        <div className="second-modal-container">
                        <div style={{color:'black'}}  className="addTaskForm"> 
                        <textarea style={{resize:'none'}} placeholder='Task content' value={contentValue} onChange={handleChanges} class="form-control" id="textarea" rows="3"></textarea>
                        <div className="slide"> <input style={{width:'85%'}} onChange={handleSlideBarChanges} type="range" class="custom-range" value={sliderValue} min="0" max="3" step="1" id="customRange3"></input> {states[sliderValue]} </div>
                        
                        </div>
                       <div className="buttons">
                           <button onClick={() => setAddTaskModal(false)} id="closeAddTaskButton"> Close </button>
                           <button onClick={() => addTask()} id="addTaskButton"> Add this Task </button>
                        </div> 
                        <span id="error">{errorMessage.length > 0 ? errorMessage : ''}</span>
                        <span  id="success">{successMessage.length > 0 ? successMessage : ''}</span>
                    </div>
                    </div>
            </Modal>
        </div>
    )
}

const mapStateToProps = (state) => ({
    theme: state.navbar.theme,
})
export default connect(mapStateToProps, {addNewTask})(Sidenav)
