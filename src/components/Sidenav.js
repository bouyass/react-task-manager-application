import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import './Sidenav.css'

function Sidenav(props) {

    useEffect(() => {
        console.log(props.theme)
        document.getElementById('sidenav').style.backgroundColor = props.theme
        document.getElementById('sidenav').style.backgroundImage = 'linear-gradient(transparent 25%,currentColor 70%)'
    },[props.theme])

    return (

        <div id="sidenav" className="list-container">
            <ul className="items">
                <li> <img  src="images/new_task.png" /><span className="itemText">New task</span></li>
                <li> <img  src="images/users.png" /><span className="itemText">Users</span></li>
                <li> <img  src="images/schedule_task.png" /><span className="itemText">Schedule task</span></li>
                <li> <img  src="images/about_us.png" /><span className="itemText">About us</span></li>
                <li> <img  src="images/policy.png" /><span className="itemText">Policy</span></li>
            </ul>
            <div className="social">
                <img  src="images/social-0.png" /> <img src="images/social-1.png" /> <img src="images/social-2.png" /> 
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    theme: state.navbar.theme,
})
export default connect(mapStateToProps, {})(Sidenav)
