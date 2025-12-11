import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-inner container">
        {/* Left: Octagon avatar + decorative shapes */}
        <div className="about-left">
          <div className="octagon-wrap">
            <div className="octagon-bg" />
            <img src="/avatar.png" alt="Jessica avatar" className="about-avatar" />
          </div>

          {/* small floating decorative shapes (optional) */}
          <div className="about-decor decor-1" aria-hidden />
          <div className="about-decor decor-2" aria-hidden />
        </div>

        {/* Right: content */}
        <div className="about-right">
          <h3 className="section-title">About me</h3>

          <div className="about-text">
            <p>
              I’m Jessica, a motivated and hardworking Computer Science Engineering student from Chennai.
              I enjoy learning new technologies, solving problems, and building practical, real-world projects.
              With strong communication, teamwork, and adaptability, I love taking on challenges and growing through
              hands-on experience.
            </p>

            <p>
              My projects include web apps, AI experiments, and IoT prototypes. I focus on applying core
              programming skills to solve real problems and make useful products.
            </p>
          </div>

          <div className="about-note">
            <span className="note-icon">★</span>
            <p className="note-text">
              I am deeply committed to my work — investing creativity and precision into every project to ensure a unique and effective outcome.
            </p>
          </div>

          <div className="skills-block">
            <div className="skills-label">Skills</div>
            <div className="skills-row">
              <span className="skill-badge">Java</span>
              <span className="skill-badge">Python</span>
              <span className="skill-badge">C</span>
              <span className="skill-badge">MySQL</span>
              <span className="skill-badge">Communication</span>
              <span className="skill-badge">Teamwork</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
