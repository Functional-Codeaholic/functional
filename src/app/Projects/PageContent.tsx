"use client"

import React, { useEffect } from "react"
import Image from "next/image"
import './page.scss'
import DownArrow from '../components/DownArrow/DownArrow'
import { hd1080Min, hd4kMin, mobileMin, tabletMin } from "../_vars"
import Link from "next/link"

// define types for data coming from page.tsx
interface ProjectData {
  id: number;
  project_name: string;
  client_name: string;
  client_description: string;
  project_goal: string;
  experience: string;
  outcome: string;
  screenshot: string;
  project_url: string;
}

interface ProjectContentProps {
  projects: ProjectData[];
}

const ProjectsContent = ({ projects }: ProjectContentProps) => {
  // handleClick function makes screenshot div's show/hide the info about them
  const handleClick = (id: string) => {
    const allScreenshots = document.querySelectorAll('.screenshot')
    const clickedDiv = document.getElementById(id)

    if (clickedDiv?.classList.contains('active')) {
      // if user clicks/taps the already active div, then replace 'active' class with 'inactive'
      clickedDiv?.classList.remove('active')
      clickedDiv?.classList.add('inactive')
    } else {
      allScreenshots.forEach((screenshot) => {
        // remove 'active' class from all screenshot div's and add replace with 'inactive'
        screenshot.classList.remove('active')
        screenshot.classList.add('inactive')
      })
      // replace 'inactive' class with 'active' on div that was clicked
      clickedDiv?.classList.remove('inactive')
      clickedDiv?.classList.add('active')
    }
  }

  return (
    <>
      <div className="page" id="projects">
        <h1>Recent Projects</h1>
        <div className="screenshots">
          {projects.map(project => {
            // set ID for images according to name of project, spaces stripped and replaced with '-'
            const imgID = project.project_name.toLowerCase().replace(/ /g, '-')
            // set ID for screenshot divs for click functionality
            const screenshotID = `screenshot${project.id}`

            return (
              <>
                <div
                  className="screenshot inactive"
                  key={project.id}
                  id={screenshotID}
                  onClick={() => handleClick(screenshotID)}
                >
                  <h3>{project.client_name}</h3>
                  <Image
                    src={project.screenshot}
                    alt={project.project_name}
                    id={imgID}
                    className='screenshot-img'
                    width={600}
                    height={294}
                    sizes={`(min-width: ${hd4kMin}px) 61.8%, (min-width: ${hd1080Min}px)  61.8%, (min-width: ${tabletMin}px)  61.8%, (min-width: ${mobileMin}px)  61.8%,  61.8%`}
                  />
                  <div className="beacon"></div>

                  <div className="popout" key={`popout-${project.id}`}>
                    <p>{project.project_goal}</p>
                    <span><Link href={`CaseStudies/${project.id}`}>Learn More About This Project</Link></span>
                  </div>
                </div>
              </>
            )
          })}
          <div className="more">
            <Link href="CaseStudies">See More Examples of My Work</Link>
          </div>
        </div>
        <DownArrow nextPage='skills' />
      </div>
    </>
  );
}
 
export default ProjectsContent;