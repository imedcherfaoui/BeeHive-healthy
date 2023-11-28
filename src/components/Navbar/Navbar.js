import React, { useState } from 'react';
import { TfiAlignRight, TfiClose } from 'react-icons/tfi';
import { NavbarData } from "./navbarData"
import Logo from './Logo.png';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="navbar w-full p-4 flex justify-between items-center slide-in-top">
        <div className="w-20 flex">
          <img src={Logo} alt="logo" className="rounded-full"></img>

          {/* Menu for larger screens */}
          <div className="menu hidden md:flex md:ms-10">
            <ul className="flex space-x-8">
              {NavbarData.map((val, key) => {
                return (
                  <li key={key} className='flex w-max'>
                    <div className="cursor-pointer mx-auto" onClick={() => handleScrollToSection(val.link)}>
                      {val.title}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          
        </div>

        {/* Menu icon for small screens */}
        <div
          className={`menu-icon text-slate-800 cursor-pointer md:hidden ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          {isMenuOpen ? <TfiClose size={25} /> : <TfiAlignRight size={25} />}
        </div>

      </div>

      {/* Menu for small screens (hidden by default) */}
      <div className={`md:hidden pl-10 pr-20 pt-20 p-5 text-sky-950 flex miniNavbar ${isMenuOpen ? 'block' : 'hidden'}`}>
        <ul className=" space-y-16">
          {NavbarData.map((val, key) => (
            <li
              key={key}
              onClick={() => {
                handleScrollToSection(val.link);
                toggleMenu(); // Close the menu on small screens
              }}
              className='cursor-pointer'
            >
              {val.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
