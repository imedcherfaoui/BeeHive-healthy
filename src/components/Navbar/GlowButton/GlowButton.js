import React, { useEffect } from "react";
import "./GlowButton.css";
import gsap from "gsap";
import chroma from "chroma-js";

function GlowButton({ content, icon: IconComponent }) {
  useEffect(() => {
    const generateGlowButtons = () => {
      document.querySelectorAll(".glow-button").forEach((button) => {
        let gradientElem = button.querySelector(".gradient");

        if (!gradientElem) {
          gradientElem = document.createElement("div");
          gradientElem.classList.add("gradient");

          button.appendChild(gradientElem);
        }

        button.addEventListener("pointermove", (e) => {
          const rect = button.getBoundingClientRect();

          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          gsap.to(button, {
            "--pointer-x": `${x}px`,
            "--pointer-y": `${y}px`,
            duration: 0.6,
          });

          gsap.to(button, {
            "--button-glow": chroma
              .mix(
                getComputedStyle(button)
                  .getPropertyValue("--button-glow-start")
                  .trim(),
                getComputedStyle(button)
                  .getPropertyValue("--button-glow-end")
                  .trim(),
                x / rect.width
              )
              .hex(),
            duration: 0.2,
          });
        });
      });
    };

    // Call the function to initialize the effect on load and resize
    generateGlowButtons();

    // Clean up event listeners on unmount
    return () => {
      window.removeEventListener("resize", generateGlowButtons);
    };
  }, []);

  return (
    <button className="glow-button tracking-widest">
      <span
        className="p-2 font-semibold"
        style={{ display: "flex", alignItems: "center" }}
      >
        {IconComponent && (
          <IconComponent
            className="icon"
            style={{ marginRight: "8px" }}
            size={30}
          />
        )}{" "}
        {content}
      </span>
    </button>
  );
}

export default GlowButton;
