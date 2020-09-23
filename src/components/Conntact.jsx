import React from 'react'
import pdf from "./vikascp.pdf"
import {BrowserRouter as Routers,Link} from 'react-router-dom'
import "./contact.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faDownload} from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedinIn, faHackerrank } from '@fortawesome/free-brands-svg-icons'
function Contact() {
    return (
        <div className="contact_container contact">
            <h1>InTouch</h1>
            <div className="contact_info">
                <a href="https://github.com/Vickycp"><FontAwesomeIcon icon={faGithub} className="git" />  </a>
                <a href="https://www.linkedin.com/in/vicky-cp-194149171"><FontAwesomeIcon icon={faLinkedinIn} className="linkdin" /> </a>
                <a  href="https://www.hackerrank.com/vickycp417"><FontAwesomeIcon icon={faHackerrank} className="hackerrank" /> </a>
            </div>
               <div className="download_resume">
              <Routers>
                <Link to={pdf} target="blank" download >  <FontAwesomeIcon icon={faDownload}/> </Link> 
                </Routers>
               </div>
        </div>
    )
}

export default Contact


// https://docs.google.com/document/d/1l7dT9OwpG309U7igDYmxituO7UQWzUYdDorxtRaX1IY/edit?usp=sharing