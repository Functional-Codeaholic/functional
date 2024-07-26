import React, { FC } from 'react'
import Image from "next/image"
import './Arrow.scss'
import { hd1080Min, mobileMin, standardMin, tabletMin } from "../../_vars";
import DownArrow from '../../../../public/images/arrow-down.webp'

const Arrow: FC = () => {
    return (
        <>
            <div className="arrow">
                <div className="shadow"></div>
                <Image 
                    src={DownArrow}
                    alt="Arrow indicating to user to scroll down for more content"
                    id = "down-arrow"
                    className='down-arrow'
                    sizes={`(min-width: ${hd1080Min}px) 95px, (min-width: ${standardMin}px) 80px, (min-width: ${tabletMin}px) 65px, (min-width: ${mobileMin}px) 25px, 25px`} 
                />
            </div>
        </>
    );
}
 
export default Arrow;