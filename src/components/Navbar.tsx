import React from "react";
import logo from "../assets/gallery-logo.png";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <img src={logo} alt="logo" width={170} height={48} />
        <h5>START SLIDESHOW</h5>
      </nav>
      <hr />
    </>
  );
}
