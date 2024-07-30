"use client"
import React, { FC, useEffect } from 'react'
import Image from "next/image"
import './DownArrow.scss'
import { useHash } from '../useHash'
import { scrollToSection } from '../utils'

interface DownArrowProps {
    nextPage: string;
}

const DownArrow: FC<DownArrowProps> = ({ nextPage }) => {
    const hash = useHash()
    const page = nextPage;

    useEffect(() => {
        const section = hash.replace('#', "");
        if (section) scrollToSection(section)
    }, [hash])

    console.log(nextPage)

    return (
        <>
            <div className="arrow">
                <div className="shadow"></div>
                <button onClick={() => scrollToSection(page)}>
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