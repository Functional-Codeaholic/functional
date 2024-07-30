"use client"
import React, { useEffect, useState } from "react"
import './Menu.scss'
import Hamburger from "../Hamburger";
import HamburgerOpen from "../HamburgerOpen";
import { useHash } from '../../useHash'
import { scrollToSection } from '../../utils'

const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const hash = useHash()

    const handleClick = () => {
        setMenuOpen(!menuOpen)
    }

    useEffect(() => {
        const section = hash.replace('#', "");
        if (section) scrollToSection(section)
    }, [hash])

    return (
        <>
            <div className="hamburger" onClick={handleClick}>
                {(menuOpen === false)
                    ? <Hamburger />
                    : <HamburgerOpen /> 
                }
            </div>
            <div className="navMenu">
                <div className={`menu ${menuOpen ? 'open' : 'closed'}`} onClick={handleClick}>
                    {menuOpen
                        ? (
                            <ul>
                                <li><button onClick={() => scrollToSection('home')}>Home</button></li>
                                <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
                                <li><button onClick={() => scrollToSection('skills')}>My Skills</button></li>
                                <li><button onClick={() => scrollToSection('about')}>About Me</button></li>
                                <li><button onClick={() => scrollToSection('contact')}>Contact Me</button></li>
                            </ul>
                            // <ul>
                            //     <li><Link href="#hero">Home</Link></li>
                            //     <li>
                            //         <Link href="#projects">Recent Projects</Link>
                            //         {/* <ul>
                            //             <li><Link href="all-projects">All Projects</Link></li>
                            //         </ul> */}
                            //     </li>
                            //     <li><Link href="#skills">My Skills</Link></li>
                            //     <li><Link href="#about">About Me</Link></li>
                            //     <li><Link href="#contact">Contact Me</Link></li>
                            // </ul>
                        ) : ''
                    }
                </div>
            </div>
        </>
    );
}
 
export default Menu;