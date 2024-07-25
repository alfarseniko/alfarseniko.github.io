import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Visionary",
          "Builder",
          "Innovator",
          "Creator",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 45,
        pauseFor: 500,
        delay: 70,
      }}
    />
  );
}

export default Type;
