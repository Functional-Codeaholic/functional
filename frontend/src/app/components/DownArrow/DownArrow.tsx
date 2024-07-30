"use client"
import React, { FC, useEffect } from 'react'
import Image from "next/image"
import './DownArrow.scss'
import { useHash } from '../useHash'
import { scrollToSection } from '../utils'
import next from 'next'

interface DownArrowProps {
    nextPage: string;
}

const DownArrow: FC<DownArrowProps> = ({ nextPage }) => {
    const hash = useHash()

    useEffect(() => {
        const section = hash.replace('#', "");
        if (section) scrollToSection(section)
    }, [hash])


    return (
        <>
            <div className="arrow">
                <div className="shadow"></div>
                <button onClick={() => scrollToSection(nextPage)}>
                    <Image 
                        src='/images/arrow-down.webp'
                        alt="Arrow indicating to user to scroll down for more content"
                        id = "down-arrow"
                        className='down-arrow'
                        width={75}
                        height={75}  
                    />
                    {/* {nextPage} */}
                </button>
            </div>
        </>
    );
}
 
export default DownArrow;