"use client"

import React, { useEffect } from "react"
import Image from "next/image"
import './page.scss'
import Arrow from '../components/Arrow/Arrow'
import { hd1080Min, hd4kMin, mobileMin, tabletMin } from "../_vars"
import Link from "next/link"

const Projects = () => {
  useEffect(() => {
    const setScreenshotHeight = () => {
      const image = document.querySelector('.screenshot-img')
      const screenshot = document.querySelector('.screenshot')
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
          <div className="screenshot">
            <Image 
              src="/images/projects/bald-eagle.webp"
              alt="Screenshot of website built for Bald Eagle Construction"
              id = "bald-eagle"
              className='screenshot-img'
              width={600}
              height={294}
              sizes={`(min-width: ${hd4kMin}px) 61.8%, (min-width: ${hd1080Min}px)  61.8%, (min-width: ${tabletMin}px)  61.8%, (min-width: ${mobileMin}px)  61.8%,  61.8%`}
            />

            <div className="popout">
              <h3>Bald Eagle Construction</h3>
            </div>
          </div>
          <div className="screenshot">
            <Image 
              src="/images/projects/bald-eagle.webp"
              alt="Screenshot of website built for Bald Eagle Construction"
              id = "bald-eagle"
              className='screenshot-img'
              width={600}
              height={294}
              sizes={`(min-width: ${hd4kMin}px) 61.8%, (min-width: ${hd1080Min}px)  61.8%, (min-width: ${tabletMin}px)  61.8%, (min-width: ${mobileMin}px)  61.8%,  61.8%`}
            />

            <div className="popout">
              <h3>Bald Eagle Construction</h3>
            </div>
          </div>
          <div className="screenshot">
            <Image 
              src="/images/projects/bald-eagle.webp"
              alt="Screenshot of website built for Bald Eagle Construction"
              id = "bald-eagle"
              className='screenshot-img'
              width={600}
              height={294}
              sizes={`(min-width: ${hd4kMin}px) 61.8%, (min-width: ${hd1080Min}px)  61.8%, (min-width: ${tabletMin}px)  61.8%, (min-width: ${mobileMin}px)  61.8%,  61.8%`}
            />

            <div className="popout">
              <h3>Bald Eagle Construction</h3>
            </div>
          </div>
          <div className="more">
            <Link href="allProjects">See More...</Link>
          </div>
        </div>
        <Arrow />
      </div>
    </>
  );
}
 
export default Projects;