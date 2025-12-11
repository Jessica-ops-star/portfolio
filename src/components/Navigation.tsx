import React from "react";

export default function Navigation() {
  return (
    <header className="nav-wrap">
      <div className="nav-inner">
        <div className="logo">S</div>
        <nav className="nav-links">
          <a className="active" href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#works">Our Works</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact Us</a>
        </nav>
        <a className="nav-cta" href="#contact">Contact Us</a>
      </div>
    </header>
  );
}
