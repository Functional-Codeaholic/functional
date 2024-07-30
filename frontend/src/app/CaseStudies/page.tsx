"use client"

import React, { useEffect } from "react"
import Image from "next/image"
import './page.scss'
import { hd1080Min, hd4kMin, mobileMin, tabletMin } from "../_vars"

const CaseStudies = () => {
  
  return (
    <>
      <div className="page" id="case-studies">
        <h1>My Projects</h1>
        <div className="projects">
          <h2>Bald Eagle Construction</h2>
          <div className="project">
            <div className="description">
              Describe client/project
            </div>
            <Image 
              src="/images/projects/bald-eagle.webp"
              alt="Screenshot of website built for Bald Eagle Construction"
              id = "bald-eagle"
              className='project-img'
              width={600}
              height={294}
              sizes={`(min-width: ${hd4kMin}px) 61.8%, (min-width: ${hd1080Min}px)  61.8%, (min-width: ${tabletMin}px)  61.8%, (min-width: ${mobileMin}px)  61.8%,  61.8%`}
            />
          </div>
          <h2>Bald Eagle Construction</h2>
          <div className="project">
            <div className="description">
              Describe client/project
            </div>
            <Image 
              src="/images/projects/bald-eagle.webp"
              alt="Screenshot of website built for Bald Eagle Construction"
              id = "bald-eagle"
              className='project-img'
              width={600}
              height={294}
              sizes={`(min-width: ${hd4kMin}px) 61.8%, (min-width: ${hd1080Min}px)  61.8%, (min-width: ${tabletMin}px)  61.8%, (min-width: ${mobileMin}px)  61.8%,  61.8%`}
            />
          </div>
          <h2>Bald Eagle Construction</h2>
          <div className="project">
            <div className="description">
              Describe client/project
            </div>
            <Image 
              src="/images/projects/bald-eagle.webp"
              alt="Screenshot of website built for Bald Eagle Construction"
              id = "bald-eagle"
              className='project-img'
              width={600}
              height={294}
              sizes={`(min-width: ${hd4kMin}px) 61.8%, (min-width: ${hd1080Min}px)  61.8%, (min-width: ${tabletMin}px)  61.8%, (min-width: ${mobileMin}px)  61.8%,  61.8%`}
            />
          </div>
          <h2>Bald Eagle Construction</h2>
          <div className="project">
            <div className="description">
              Describe client/project
            </div>
            <Image 
              src="/images/projects/bald-eagle.webp"
              alt="Screenshot of website built for Bald Eagle Construction"
              id = "bald-eagle"
              className='project-img'
              width={600}
              height={294}
              sizes={`(min-width: ${hd4kMin}px) 61.8%, (min-width: ${hd1080Min}px)  61.8%, (min-width: ${tabletMin}px)  61.8%, (min-width: ${mobileMin}px)  61.8%,  61.8%`}
            />
          </div>
          <h2>Bald Eagle Construction</h2>
          <div className="project">
            <div className="description">
              Describe client/project
            </div>
            <Image 
              src="/images/projects/bald-eagle.webp"
              alt="Screenshot of website built for Bald Eagle Construction"
              id = "bald-eagle"
              className='project-img'
              width={600}
              height={294}
              sizes={`(min-width: ${hd4kMin}px) 61.8%, (min-width: ${hd1080Min}px)  61.8%, (min-width: ${tabletMin}px)  61.8%, (min-width: ${mobileMin}px)  61.8%,  61.8%`}
            />
          </div>
          <h2>Bald Eagle Construction</h2>
          <div className="project">
            <div className="description">
              Describe client/project
            </div>
            <Image 
              src="/images/projects/bald-eagle.webp"
              alt="Screenshot of website built for Bald Eagle Construction"
              id = "bald-eagle"
              className='project-img'
              width={600}
              height={294}
              sizes={`(min-width: ${hd4kMin}px) 61.8%, (min-width: ${hd1080Min}px)  61.8%, (min-width: ${tabletMin}px)  61.8%, (min-width: ${mobileMin}px)  61.8%,  61.8%`}
            />
          </div>
        </div>
      </div>
    </>
  );
}
 
export default CaseStudies;