"use client"

import React, { useEffect } from "react"
import Image from "next/image"
import './page.scss'
import DownArrow from '../components/DownArrow/DownArrow'
import { hd1080Min, hd4kMin, mobileMin, tabletMin } from "../_vars"
import Link from "next/link"

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

  useEffect(() => {
    const setScreenshotHeight = () => {
      const image = document.querySelector('.screenshot-img') as HTMLImageElement
      const screenshot = document.querySelector('.screenshot') as HTMLElement

      if (image && screenshot) {
        screenshot.style.height = `${image.offsetHeight}px`
      }
    }

    window.addEventListener('load', setScreenshotHeight)
    window.addEventListener('resize', setScreenshotHeight)
    setScreenshotHeight()

    return () => {

      window.removeEventListener('load', setScreenshotHeight)
      window.removeEventListener('resize', setScreenshotHeight)
    }
  }, [])

  return (
    <>
      <div className="page" id="projects">
        <h1>Recent Projects</h1>
        <div className="screenshots">
          {projects.map(project => {
            const imgID = project.project_name.toLowerCase().replace(/ /g, '-')

            return (
              <div className="screenshot" key={project.id}>
                <Image
                  src={project.screenshot}
                  alt={project.project_name}
                  id={imgID}
                  className='screenshot-img'
                  width={600}
                  height={294}
                  sizes={`(min-width: ${hd4kMin}px) 61.8%, (min-width: ${hd1080Min}px)  61.8%, (min-width: ${tabletMin}px)  61.8%, (min-width: ${mobileMin}px)  61.8%,  61.8%`}
                />

                <div className="popout" key={`popout-${project.id}`}>
                  <h3>{project.project_name}</h3>
                  <p>{project.project_goal}</p>
                  <span><Link href={`CaseStudies/${project.id}`}>Learn More About This Project</Link></span>
                </div>
              </div>
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