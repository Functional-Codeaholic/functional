"use client"
import React, { useEffect, useState } from 'react';
import './Header.scss'
import Contact from './Contact'
import { mobileMin, tabletMin, hd1080Min, hd4kMin } from '../../_vars.js'
import Link from 'next/link';
import Menu from './Menu/Menu'

const Header = () => {

    useEffect(() => {
        const setVhProperty = () => {
            const vh = window.innerHeight * 0.01
            document.documentElement.style.setProperty('--vh', `${vh}px`)
        }

        setVhProperty()

        window.addEventListener('resize', setVhProperty)

        return () => {
            window.removeEventListener('resize', setVhProperty)
        }
    }, [])

    useEffect(() => {
        const setVwProperty = () => {
            const vw = window.innerWidth * 0.01
            document.documentElement.style.setProperty('--vw', `${vw}px`)
        }

        setVwProperty()

        window.addEventListener('resize', setVwProperty)

        return () => {
            window.removeEventListener('resize', setVwProperty)
        }
    }, [])

    return (
        <>
            <div className="top-box">
                <header className="header">
                    <nav>
                        <Menu />
                    </nav>

                    <div className="logoDiv">
                        <Link href='/'>
                            <picture>
                                <source
                                    srcSet="/images/logoHuge.webp"
                                    media={"(min-width: " + hd4kMin + "px)"}
                                />
                                <source
                                    srcSet="/images/logoHuge.webp"
                                    media={"(min-width: " + hd1080Min + "px)"}
                                />
                                <source
                                    srcSet="/images/mobile-logoHuge.webp"
                                    media={"(min-width: " + tabletMin + "px)"}
                                />
                                <source
                                    srcSet="/images/mobile-logoHuge.webp"
                                    media={"(min-width: " + mobileMin + "px)"}
                                />
                                <img
                                    srcSet="/images/mobile-logoHuge.webp"
                                    alt="Logo for Functional Codeaholic - Web Development by Brian Quinney"
                                    id="logo" 
                                    className="logo"
                                />
                            </picture>
                        </Link>
                    </div>
                    <div className="contact">
                        <Link href="#contact"><Contact /></Link>
                    </div>
                </header>
            </div>
        </>
    );
}
 
export default Header;