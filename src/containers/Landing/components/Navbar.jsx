
import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <header className="fixed top-4 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full">
        <nav
          className={`relative max-w-[66rem] w-full bg-stone-800 rounded-[28px] py-3 ps-5 pe-2 flex items-center justify-between md:py-1 mx-2 lg:mx-auto border border-stone-400 navbar-transition ${
            scrolled ? 'shadow-lg bg-opacity-90 backdrop-blur-sm' : 'bg-opacity-100'
          }`}
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <p className="text-stone-50 font-bold text-lg hover:text-primary transition-colors duration-300">
              Echofy
            </p>
          </div>

          <div
            id="navbar-collapse"
            className="hs-collapse overflow-hidden transition-all duration-300 basis-full grow"
          >
            <div className="flex flex-row items-center justify-end md:py-0 md:ps-7">
              <div className="hidden md:flex md:flex-row md:items-center md:justify-end py-2 md:py-0 md:ps-7 space-x-1">
                <a
                  className="py-3 px-3 md:py-4 text-sm text-white hover:text-primary transition-colors duration-300 focus:outline-none"
                  href="#approach"
                >
                  Approach
                </a>
                <a
                  className="py-3 px-3 md:py-4 text-sm text-white hover:text-primary transition-colors duration-300 focus:outline-none"
                  href="#services"
                >
                  Services
                </a>
                <a
                  className="py-3 px-3 md:py-4 text-sm text-white hover:text-primary transition-colors duration-300 focus:outline-none"
                  href="#about"
                >
                  About
                </a>
                <a
                  className="py-3 px-3 md:py-4 text-sm text-white hover:text-primary transition-colors duration-300 focus:outline-none"
                  href="#team"
                >
                  Team
                </a>
              </div>

              <div className="ml-4">
                <NavLink
                  className="group inline-flex items-center gap-x-2 py-2 px-4 bg-primary text-primary-foreground font-medium text-sm rounded-full focus:outline-none btn-hover hover:bg-primary-600 transition-all duration-300"
                  to='/register'
                >
                  Sign Up
                  <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;


