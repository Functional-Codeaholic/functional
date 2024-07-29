"use client"
import React from "react"
import './page.scss'
import DownArrow from '../components/DownArrow/DownArrow'

const Skills = () => {

    return (
      <>
        <div className="page" id="skills">
          <h1>Welcome</h1>
          <span className="inline-span">
            <h3>I am&nbsp;</h3>
            <h2>Brian Quinney</h2>
          </span>
          <span className="inline-span">
            <h3>a&nbsp;</h3>
            <h2>Full-Stack Web Engineer</h2>
          </span><br />
          <h3>Developing&nbsp;</h3>
          <h2>Responsive, Dynamic, Elegant</h2>
          <h3>Websites & Web Apps</h3>
          <DownArrow />
        </div>
      </>
    );
  }
 
export default Skills;