"use client"
import React from "react"
import './page.scss'
import DownArrow from '../components/DownArrow/DownArrow'
import { hd1080Min, hd4kMin, mobileMin, tabletMin } from "../_vars"
import Image from "next/image"

const Skills = () => {

    return (
      <>
        <div className="page" id="skills">
          <h1>Professional/Technical Skills</h1>
          <div className="cards">
            <div className="skill-wrapper">
            <h3>HTML5</h3>
              <div className="skill" id="html5">
                  <Image
                    src='/images/skills/HTML5.png'
                    alt='html5'
                    id='html5img'
                    className='skill-img'
                    width={1024}
                    height={1024}
                    sizes={`(min-width: ${hd4kMin}px) 61.8%, (min-width: ${hd1080Min}px)  61.8%, (min-width: ${tabletMin}px)  61.8%, (min-width: ${mobileMin}px)  61.8%,  61.8%`}
                  />
              </div>
            </div>


            <div className="skill-wrapper">
            <h3>HTML5</h3>
              <div className="skill" id="html5">
                  <Image
                    src='/images/skills/HTML5.png'
                    alt='html5'
                    id='html5img'
                    className='skill-img'
                    width={1024}
                    height={1024}
                    sizes={`(min-width: ${hd4kMin}px) 61.8%, (min-width: ${hd1080Min}px)  61.8%, (min-width: ${tabletMin}px)  61.8%, (min-width: ${mobileMin}px)  61.8%,  61.8%`}
                  />
              </div>
            </div>
            <div className="skill-wrapper">
            <h3>HTML5</h3>
              <div className="skill" id="html5">
                  <Image
                    src='/images/skills/HTML5.png'
                    alt='html5'
                    id='html5img'
                    className='skill-img'
                    width={1024}
                    height={1024}
                    sizes={`(min-width: ${hd4kMin}px) 61.8%, (min-width: ${hd1080Min}px)  61.8%, (min-width: ${tabletMin}px)  61.8%, (min-width: ${mobileMin}px)  61.8%,  61.8%`}
                  />
              </div>
            </div>
            <div className="skill-wrapper">
            <h3>HTML5</h3>
              <div className="skill" id="html5">
                  <Image
                    src='/images/skills/HTML5.png'
                    alt='html5'
                    id='html5img'
                    className='skill-img'
                    width={1024}
                    height={1024}
                    sizes={`(min-width: ${hd4kMin}px) 61.8%, (min-width: ${hd1080Min}px)  61.8%, (min-width: ${tabletMin}px)  61.8%, (min-width: ${mobileMin}px)  61.8%,  61.8%`}
                  />
              </div>
            </div>

            
          </div>
          <DownArrow nextPage="about" />
        </div>
      </>
    );
  }
 
export default Skills;