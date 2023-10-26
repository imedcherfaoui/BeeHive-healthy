import React, { useState } from 'react';
import { TfiAlignRight, TfiClose } from 'react-icons/tfi';
import Logo from './Logo.png';
import { NavbarData } from "./navbarData"
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="navbar w-full p-4 flex justify-between items-center bg-emerald-500 text-white">
        <div className="w-12"><img src={Logo} alt="logo" className="rounded-full" ></img></div>

        {/* Menu for larger screens */}
        <div className="menu hidden md:flex md:mx-auto font-bold">
          <ul className="flex space-x-8">
          {NavbarData.map((val,key) => {
            return (
                <li 
                    key={key} 
                    className="text-white"
                    onClick={()=> {navigate(val.link)}}>
                    <div className="">
                        {val.title} 
                    </div>
                    
                </li>
                
                );
            })}
          </ul>
        </div>

        {/* Menu icon for small screens */}
        <div className="menu-icon text-white cursor-pointer md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <TfiClose size={25} /> : <TfiAlignRight size={25} />}
        </div>
      </div>

      {/* Menu for small screens (hidden by default) */}
      <div className={`md:hidden pt-16 p-5 bg-emerald-500 w-full miniNavbar ${isMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="text-white space-y-4 border-t-2">
          <li></li>
          <li>Acceuil</li>
          <li>Menu</li>
          <li>Lieux</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
