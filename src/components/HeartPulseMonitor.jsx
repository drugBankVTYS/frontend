import React, { useEffect } from "react";
import "./styles/Heart.css"; // Adjust the path to your CSS file

const HeartPulseMonitor = () => {
  useEffect(() => {
    const path = document.querySelector("#Layer_1 path");
    const pathLength = path.getTotalLength();

    // Set the stroke dasharray and offset for animation
    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = pathLength;

    // Triggering reflow to apply styles before animation starts
    path.getBoundingClientRect();

    // Start the animation
    path.style.animation = "anim 1.5s linear infinite";
  }, []);

  return (
    <div>
      <svg
        width="1500"
        height="00"
        xmlns="http://www.w3.org/2000/svg"
        className="heart-pulse-monitor"
      >
        <g className="pathdraw" id="Layer_1">
          <title>Pulse Heart</title>
          <path
            id="svg_1"
            d="m162.5,299.2l142.5,-0.2l8,-23l11,23l34,0l14,-109l14,226l12,-118l30,0l5,-15l10,0l7,-16l10,31l155,0"
          />
        </g>
      </svg>
    </div>
  );
};

export default HeartPulseMonitor;
