import React from "react";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-inner container">
        {/* LEFT: text */}
        <div className="hero-left">
          <div className="welcome">WELCOME TO MY WORLD ✨</div>
          <h1 className="hero-title">
            Hi, I’m <span className="hero-name">Jessica B</span>
          </h1>
          <h2 className="hero-role">Computer Science Engineering Student</h2>
          <p className="hero-desc">
            A passionate CSE student who enjoys building meaningful tech solutions and exploring real-world problem solving through projects and hackathons.
          </p>

          <div className="hero-ctas">
            <a className="btn primary" href="#projects">My Projects</a>
            <a className="btn outline" href="/Jessica_CV.pdf" download>Download CV</a>
          </div>

          <div className="social-row">
            <a className="social" href="mailto:jessicabenno28@gmail.com" title="Email">✉</a>
            <a className="social" href="https://linkedin.com/in/jessica-b-8a18a2334" target="_blank" rel="noreferrer" title="LinkedIn">in</a>
            <a className="social" href="#" title="Instagram">◐</a>
            <a className="social" href="#" title="Facebook">f</a>
          </div>
        </div>

        {/* RIGHT: avatar framed */}
        <div className="hero-right">
          <div className="avatar-frame">
            {/* Decorative 3D frame made with CSS */}
            <div className="frame-corner" />
            <img src="/avatar.png" alt="avatar" className="avatar-img" />
            <div className="frame-decoration" />
          </div>

          {/* small down button */}
          <div className="down-scroll" aria-hidden>
            <div className="chev">⌄</div>
          </div>
        </div>
      </div>

      {/* background floating blobs/particles */}
      <div className="bg-blob blob-1" />
      <div className="bg-blob blob-2" />
      <div className="bg-blob blob-3" />
    </section>
  );
}
