"use client"
import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from 'react-scroll';


// defined navlink props interface
interface NavLinkProps {
    href: string;
    text: string;
}



// inserted a navigationg link component with underline animation
const NavLink: React.FC<NavLinkProps> = ({ href, text }) => {
    return (
      <ScrollLink
        to={href}
        smooth={true}
        duration={500}
        className="relative text-base font-medium text-black transition-all duration-200 group" // Keep your existing styling
      >
        {text}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
      </ScrollLink>
    );
  };
  
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setHasScrolled(true);
            } else {
                setHasScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
            ${hasScrolled ? 'bg-transparent backdrop-blur-sm' : 'bg-white '}`}>
            <div className="px-4 mx-auto max-w-2xl sm:px-6 lg:px-8 ">

                <nav className="relative flex items-center justify-between h-16 transition-all lg:rounded-xl lg:shadow-lg lg:h-14 lg:px-8 lg:py-6 ">
                    <div className="flex items-center">

                        {/* mobile menu mutton */}
                        <button 
                            type="button" 
                            className="inline-flex p-2 ml-5 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
                            onClick={toggleMenu}
                        >
                            {!isMenuOpen ? (
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* desktop nav */}
                    <div className="hidden lg:flex lg:items-center lg:mx-auto lg:space-x-10">
                        <NavLink href="hero" text="About" />
                        <NavLink href="skills" text="Skills" />
                        <NavLink href="projects" text="Projects" />
                        <NavLink href="contact" text="Contact" />
                    </div>
                </nav>

                {/* mobile nav */}
                <nav className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <div className="py-4 bg-white rounded-lg shadow-lg">
                        <ScrollLink to="hero" smooth={true} duration={500} className="block px-4 py-2 text-base font-medium text-black transition-all duration-200 hover:bg-gray-100">About</ScrollLink>
                        <ScrollLink to="skills" smooth={true} duration={500} href="#" className="block px-4 py-2 text-base font-medium text-black transition-all duration-200 hover:bg-gray-100">Skills</ScrollLink>
                        <ScrollLink to="projects" smooth={true} duration={500} href="#" className="block px-4 py-2 text-base font-medium text-black transition-all duration-200 hover:bg-gray-100">Projects</ScrollLink>
                        <ScrollLink to="contact" smooth={true} duration={500} href="#" className="block px-4 py-2 text-base font-medium text-black transition-all duration-200 hover:bg-gray-100">Contact</ScrollLink>
                    </div>
                </nav>
            </div>
        </header>
    );
};
;

export default Header;