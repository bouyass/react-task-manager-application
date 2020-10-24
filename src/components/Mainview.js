import React, { useEffect } from 'react'
import './Mainview.css'
import {connect} from 'react-redux'

function Mainview(props) {

    useEffect(() => {
        console.log(props.url)
        document.getElementById('mainview').style.backgroundImage = `url('images/${props.url}.jpg')`
    },[props.url])

    return (
        <div id="mainview" className="mainview">
            
        </div>
    )
}

const mapStateToProps = (state) => ({
    url: state.navbar.backUrl
})
export default connect(mapStateToProps, {})(Mainview)
