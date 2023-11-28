import React, { useEffect, useState } from 'react';
import About from './About/About';
import Title from './components/Title/Title';
import { RxDoubleArrowDown } from "react-icons/rx";
import './Home.css';
import HomeButtons from './components/HomeButtons/HomeButtons';

function Home() {
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowArrow(false);
      } else {
        setShowArrow(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const lines = [
    { text: ['pure', 'love'], bold: [false, true] },
    { text: ['of', 'healthy'], bold: [false, true] }
  ];

  return (
    <div className='pt-16 w-full' id="home">
      <div className='home pb-28'>
        <div className='mt-6 pb-10 w-fit border-gray-950 border'>
          <Title lines={lines}/>

          <div className='ms-10 py-5 lg:py-0 h-32 w-fit slide-in-bottom'>
            <HomeButtons />
          </div>

        </div>

        <div
          className={`arrow-scroll__wrapper mx-auto w-12 cursor-pointer text-5xl mt-20 md:mt-32 ${showArrow ? '' : 'hide-arrow'}`}
          onClick={() => document.getElementById("about").scrollIntoView({ behavior: 'smooth' })}
        >
          <RxDoubleArrowDown />
        </div>
      </div>
      
      <div id="about" className=''>
        <About />
      </div>
    </div>
  );
}

export default Home;
