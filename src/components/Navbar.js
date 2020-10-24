import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import {fetchTheme} from '../actions/NavbarActions'
import './Navbar.css'

function Navbar(props) {

    useEffect(() => {
        document.getElementById('nav').style.backgroundColor = props.theme
        document.querySelector('.secondUl').childNodes.forEach(item => {
            item.childNodes[0].style.border = `1px solid ${props.theme}`
            item.childNodes[0].addEventListener('mouseenter',function(e){
                e.target.style.border = `2px solid #ea3f8e`
            })
            item.childNodes[0].addEventListener('mouseleave',function(e){
                e.target.style.border = `1px solid ${props.theme}`
            })
        })

    },[props.theme])
    
    return (
        <nav id="nav" className="main-container">
            <ul className="firstUl">
                <li className="h"><img  id="icon" src="images/logo.png" /></li>
                <li className="h"><h3>TASKIT</h3></li>
            </ul>
            <ul className="secondUl">
                <li><img onClick={(e) => props.fetchTheme('#7fdc22','theme-1')} src="images/theme-1.jpg" /></li>
                <li><img onClick={(e) => props.fetchTheme('#0aad5c','theme-2')} src="images/theme-2.jpg" /></li>
                <li><img onClick={(e) => props.fetchTheme('#187eb9','theme-3')} src="images/theme-3.jpg" /></li>
            </ul>
        </nav>
    )
}

const mapStateToProps = (state) => ({
    theme: state.navbar.theme,
  });

export default connect(mapStateToProps, {fetchTheme})(Navbar)
