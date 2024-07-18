"use client"
import React, { useEffect, useState } from 'react';
import './Header.scss'
import Hamburger from './Hamburger'
import HamburgerOpen from './HamburgerOpen'
import Contact from './Contact'
import { mobileMin, tabletMin, hd1080Min, hd4kMin } from '../../_vars.js'
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleClick = () => {
        setMenuOpen(!menuOpen)
    }

    useEffect(() => {
        const contactLink = document.querySelector('.header a')

        const provideHapticFeedback = () => {
            if (navigator.vibrate) {
                navigator.vibrate(200)
            }
        }

        if (contactLink) {
            contactLink.addEventListener('click', provideHapticFeedback)
        }

        return () => {
            if (contactLink) {
                contactLink.removeEventListener('click', provideHapticFeedback)
            }
        }
    }, [])

    return (
        <header className="header">
            <nav>
                <div className="hamburger" onClick={handleClick}>
                    {(menuOpen === false)
                        ? <Hamburger />
                        : <HamburgerOpen /> 
                    }
                </div>
            </nav>

            <div className="logo">
                <Link href='/'>
                    <Image
                        src="/images/logoHuge.png"
                        alt="Logo for Functional Codeaholic - Web Development by Brian Quinney"
                        id = "logo"
                        className='logo'
                        width={100}
                        height={100}
                        sizes={`(min-width: ${hd4kMin}px) 256px, (min-width: ${hd1080Min}px) 200px, (min-width: ${tabletMin}px) 150px, (min-width: ${mobileMin}px) 100px, 100px`}
                    />
                </Link>
            </div>
            <div className="contact">
                <Link href="#contact"><Contact /></Link>
            </div>
        </header>
    );
}
 
export default Header;