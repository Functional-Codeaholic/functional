"use client"
import React, { FC, useEffect, useState } from 'react'
import Image from "next/image"
import './DownArrow.scss'

const Arrow: FC = () => {
    const [imageWidth, setImageWidth] = useState(75)
    const [dvw, setDvw] = useState(0)
    const MaxImageWidth = 75

    useEffect(() => {
        const updateDVW = () => {
            setDvw(window.innerWidth)
            if (dvw * 0.1255 > MaxImageWidth) {
                setImageWidth(MaxImageWidth)
            } else {
                setImageWidth(dvw * 0.1255)
            }
        }

        updateDVW()

        window.addEventListener('resize', updateDVW)

        return () => {
            window.removeEventListener('resize', updateDVW)
        }
    }, [])

    return (
        <>
            <div className="arrow">
                <div className="shadow"></div>
                <Image 
                    src='/images/arrow-down.webp'
                    alt="Arrow indicating to user to scroll down for more content"
                    id = "down-arrow"
                    className='down-arrow'
                    width={imageWidth}
                    height={imageWidth} 
                />
            </div>
        </>
    );
}
 
export default Arrow;