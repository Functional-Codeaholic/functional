"use client"
import React from "react";
import Image from "next/image";
import './page.scss'
import Arrow from './components/Arrow/Arrow'
import { hd1080Min, hd4kMin, mobileMin, tabletMin } from "./_vars";
import Skills from "./Skills/page";
import Projects from "./Projects/page";
import Me from '../../public/images/me.webp'

export default function Home() {

  return (
    <>
      <div className="page" id="hero">
        <div className="me">
          <div className="shadow"></div>
          <Image 
            src={Me}
            alt="Headshot of Brian Quinney in front of depiction of nodes in blue and red"
            id = "headshot"
            className='headshot'
            sizes={`(min-width: ${hd4kMin}px) 714px, (min-width: ${hd1080Min}px) 600px, (min-width: ${tabletMin}px) 500px, (min-width: ${mobileMin}px) 85dvw, 85dvw`} />
        </div>
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
        <Arrow />
      </div>
      <Projects />
      <Skills />
    </>
  );
}
