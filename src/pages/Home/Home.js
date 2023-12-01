import React, { useEffect, useState } from "react";
import About from "./About/About";
import Title from "./components/Title/Title";
import { RxDoubleArrowDown } from "react-icons/rx";
import "./Home.css";
import HomeButtons from "./components/HomeButtons/HomeButtons";
import cup from "../../components/images/cup.png";
import Contact from "./Contact/Contact";
import DevInfo from "./DevInfo/DevInfo";

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

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const lines = [
    { text: ["pure", "love"], bold: [false, true] },
    { text: ["of", "healthy"], bold: [false, true] },
  ];

  return (
    <div className="home pt-24 w-full" id="home">
      <div className="pb-28">
        <div className="flex home-presentation">
          {/* left side */}
          <div className="mt-6 w-fit left-side">
            <Title lines={lines} />

            <div className="ms-10 py-5 lg:py-0 h-32 w-fit slide-in-bottom">
              <HomeButtons />
            </div>
          </div>

          {/* right side */}
          <div className="mt-6 pb-10 relative w-full flex justify-around right-side">
            {/* Cup Image */}
            <div className="p-10">
              <img
                src={cup}
                alt="cup"
                className="cup-image block object-cover w-72 h-full"
              />
            </div>

            {/* Vertical Texts */}
            <div className="absolute top-0 right-0 h-full flex flex-col -rotate-90 justify-end me-20 font-bold">
              <h1 className="vertical-text-1 p-2 transform mx-auto text-7xl slide-in-right">
                MILKSHAKE
              </h1>
              <h1 className="vertical-text p-2 transform mx-auto text-7xl slide-in-left">
                MILKSHAKE
              </h1>
            </div>
          </div>
        </div>

        <div
          className={`arrow-scroll__wrapper mx-auto w-12 cursor-pointer text-5xl mt-20 lg:mt-0 ${
            showArrow ? "" : "hide-arrow"
          }`}
          onClick={() =>
            document
              .getElementById("about")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          <RxDoubleArrowDown />
        </div>
      </div>

      <div id="about">
        <About />
      </div>

      <div id="contact">
        <Contact />
      </div>
      <DevInfo />
    </div>
  );
}

export default Home;
