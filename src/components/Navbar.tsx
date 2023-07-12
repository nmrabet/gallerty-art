import React from "react";
import logo from "../assets/gallery-logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <img src={logo} alt="logo" width={170} height={48} />
        </Link>
        <h5>START SLIDESHOW</h5>
      </nav>
      <hr />
    </>
  );
}
