import React from 'react'
import "./about.css"
import Card from "./card"
import Certificate from './Certificate'
import Education from './education'



function About() {

   
    return (
        <div className="About__container About">
            <div className="About_header"> <h1>About</h1></div>
           
            <div className="About_card">
            <Education/>
            <Card />
            <Certificate/>
           
            </div>
        
            

        </div>
    )
}

export default About
