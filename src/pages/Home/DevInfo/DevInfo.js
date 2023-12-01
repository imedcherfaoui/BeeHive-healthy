import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import "./DevInfo.css";

const DevInfo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContactPanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`contact-wrapper ${isOpen ? "contact-wrapper--open" : ""}`}
      >
        <div className="contact-panel">
          <div className="contact-panel__header">Contact</div>

          <button className="contact-close" onClick={toggleContactPanel}>
            <i className="fa fa-times"></i>
          </button>

          <ul className="my-3">
            <li>
              <a
                href="https://www.linkedin.com/in/cherfaoui-imededdine/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn size={20} />
              </a>
            </li>

            <li>
              <a
                href="https://github.com/imedcherfaoui"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={20} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <button className="contact-button" onClick={toggleContactPanel}>
        Get in Touch
      </button>
    </>
  );
};

export default DevInfo;
