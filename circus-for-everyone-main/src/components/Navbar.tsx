'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import Image from "next/image";
import { useDropdown } from "@/app/utils/DropdownContext";

interface NavbarProps {
    links: {
      workshops: string;
      about: string;
      kontakt: string;
    };
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
    const { isMenuOpen, toggleDropdown, closeDropdown } = useDropdown();

    const handleLinkClick = () => {
        closeDropdown();
    };

    return (
        <>
            <div className="flex justify-between items-center fixed top-0 w-full z-50 mb-0 py-3 lg:py-5 drop-shadow-md md:px-16 bg-darkbg text-white font-semibold">

                {/* Left Section: Home */}
                <Link href="/" className='flex items-center gap-2 cursor-pointer pl-4'>
                    <Image
                        src="/contactball.png" 
                        alt="contact ball" 
                        width={55} 
                        height={40} 
                        className='hover:scale-105 transition-shadow'
                    />
                    <div className='py-3 hover:text-contrast'>Home</div>
                </Link>
                
                {/* Right Section: Menu Items */}
                <ul className="hidden md:flex items-center gap-4 text-base pr-6">
                    <li className="p-3 hover:bg-transparent hover:text-contrast rounded-md transition-all cursor-pointer">
                        <Link href={links.workshops}>Workshops</Link>
                    </li>
                    <li className="p-3 hover:bg-transparent hover:text-contrast rounded-md transition-all cursor-pointer">
                        <Link href={links.about}>Über mich</Link>
                    </li>
                    <li className="p-3 bg-transparent py-3 px-5 text-white rounded-full hover:bg-white hover:text-contrast transition-all cursor-pointer border border-gold">
                        <Link href={links.kontakt}>Kontakt</Link>
                    </li>
                </ul>

                {/* Mobile Menu Toggler */}
                <div className="md:hidden fixed top-2 right-2 flex flex-col pr-6 cursor-pointer z-50" onClick={toggleDropdown}>
                    {!isMenuOpen ? (
                        <div className="flex flex-col pt-5 group">
                            <span className="block w-6 h-0.5 bg-white mb-1 group-hover:bg-contrast"></span>
                            <span className="block w-6 h-0.5 bg-white mb-1 group-hover:bg-contrast"></span>
                            <span className="block w-6 h-0.5 bg-white group-hover:bg-contrast"></span>
                        </div>
                    ) : (    
                        <div className="fixed top-2 right-3 py-2 pr-3 text-white hover:text-contrast">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8">
                                <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" fill="currentColor" />
                            </svg>
                        </div>
                    )}
                </div>

            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className="fixed top-16 md:hidden w-full bg-darkbg flex flex-col font-semibold text-lg transition-all duration-300 opacity-100 z-50">
                    <ul className="w-full items-center p-0 m-0">
                        <li className="list-none w-full text-center text-white hover:text-contrast py-4 cursor-pointer">
                            <Link href={links.workshops} onClick={handleLinkClick}>Workshops</Link>
                        </li>
                        <li className="list-none w-full text-center text-white hover:text-contrast py-4 cursor-pointer">
                            <Link href={links.about} onClick={handleLinkClick}>Über mich</Link>
                        </li>
                        <li className="list-none w-full text-center text-white hover:text-contrast py-4 cursor-pointer">
                            <Link href={links.kontakt} onClick={handleLinkClick}>Kontakt</Link>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
};

export default Navbar;


