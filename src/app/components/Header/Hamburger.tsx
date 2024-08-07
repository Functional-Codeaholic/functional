"use client"

import React from "react";
import './Header.scss';

const Hamburger = () => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 500 500" 
                id="hamburger"
            >
                <path
                    strokeWidth="1"
                    d="M 0.00,0.00
                        C 0.00,0.00 500.00,0.00 500.00,0.00
                            500.00,0.00 500.00,99.00 500.00,99.00
                            500.00,99.00 0.00,99.00 0.00,99.00
                            0.00,99.00 0.00,0.00 0.00,0.00 Z
                        M 0.00,199.00
                        C 0.00,199.00 500.00,199.00 500.00,199.00
                            500.00,199.00 500.00,299.00 500.00,299.00
                            500.00,299.00 0.00,299.00 0.00,299.00
                            0.00,299.00 0.00,199.00 0.00,199.00 Z
                        M 0.00,399.00
                        C 0.00,399.00 500.00,399.00 500.00,399.00
                            500.00,399.00 500.00,500.00 500.00,500.00
                            500.00,500.00 0.00,500.00 0.00,500.00
                            0.00,500.00 0.00,399.00 0.00,399.00 Z"
                />
            </svg>
        </>
    );
}
 
export default Hamburger;