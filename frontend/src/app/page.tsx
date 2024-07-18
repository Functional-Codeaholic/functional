import React from "react";
import Image from "next/image";
import './page.scss'
import { hd1080Min, hd4kMin, mobileMin, tabletMin } from "./_vars";

export default function Home() {
  return (
    <>
      <div className="page" id="hero">
        <div className="me">
          <Image 
            src="/images/me.webp"
            alt="Headshot of Brian Quinney in front of depiction of nodes in blue and red"
            id = "headshot"
            className='headshot'
            width={300}
            height={300}
            sizes={`(min-width: ${hd4kMin}px) 714px, (min-width: ${hd1080Min}px) 600px, (min-width: ${tabletMin}px) 500px, (min-width: ${mobileMin}px) 85dvw, 85dvw`} />
        </div>
        <h1></h1>
      </div>
    </>
  );
}
