import React from 'react'
import "../components/navbar.css"
import {Link} from "react-scroll"
// import {Link} from "react-router-dom"
function Navbar() {
    return (
        <div className="maincontainer">
        <div>
       
        <Link className="nav_head" to="main" smooth={true} duration={1000}> <p className="ptag">vikas cp</p></Link>
      
        <div className="subcontainer">
       
            <nav className="navbar">
           
                <Link className="nav_link" to="About__container" smooth={true} duration={1000}><span>About</span></Link>
                <Link  className="nav_link" to="project_main" smooth={true} duration={1000}><span>projects</span></Link>
                <Link className="nav_link" to="contact" smooth={true} duration={1000}><span>In Touch</span></Link>
            </nav>
            </div>
        </div>
        </div>
    )
}

export default Navbar

