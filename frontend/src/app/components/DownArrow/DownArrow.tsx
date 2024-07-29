"use client"
import React, { FC } from 'react'
import Image from "next/image"
import './DownArrow.scss'

const Arrow: FC = () => {

    return (
        <>
            <div className="arrow">
                <div className="shadow"></div>
                <Image 
                    src='/images/arrow-down.webp'
                    alt="Arrow indicating to user to scroll down for more content"
                    id = "down-arrow"
                    className='down-arrow'
                    width={75}
                    height={75} 
                />
            </div>
        </>
    );
}
 
export default Arrow;