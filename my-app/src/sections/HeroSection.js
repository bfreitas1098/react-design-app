import React from "react";
import { default as logo } from "../images/logos/logo.svg";

function HeroSection() {
  return (
    <>
      <img src={logo} alt="logo" />
      <h1>Design and code React apps</h1>
      <p>
        Don’t skip design. Learn design and code by building real apps with
        React and Swift. Complete courses about the best tools.
      </p>
    </>
  );
}

export default HeroSection;
