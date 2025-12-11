import React from "react";

/**
 * ProjectsSection - horizontal slider with 4 project cards + See All button
 * Put project images in public/projects/<slug>.jpg (or change src)
 */

const projects = [
  {
    id: 1,
    title: "Blood Connect",
    tag: "App Design",
    desc:
      "Real-time platform to quickly find nearby blood donors using live location and instant alerts via SMS, calls, WhatsApp and notifications.",
    img: "/projects/blood-connect.jpg",
  },
  {
    id: 2,
    title: "OD Tracker System",
    tag: "Web Platform",
    desc:
      "Automates on-duty approvals with role-based dashboards and real-time tracking to reduce manual delays.",
    img: "/projects/od-tracker.jpg",
  },
  {
    id: 3,
    title: "CartVision AI",
    tag: "AI Project",
    desc:
      "AI-powered retail assistant that detects products without barcodes and updates carts in real time.",
    img: "/projects/cartvision.jpg",
  },
  {
    id: 4,
    title: "Safe Streets",
    tag: "IoT + App",
    desc:
      "Smart safety jacket that sends SOS alerts and live location updates for emergency response.",
    img: "/projects/safe-streets.jpg",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h3 className="projects-title">My Projects</h3>
        <p className="projects-subtitle">
          Discover the projects that showcase my passion for building and
          problem-solving.
        </p>

        <div className="projects-slider-wrap">
          <div className="projects-slider">
            {projects.map((p, i) => (
              <article className="project-card" key={p.id}>
                <div className="card-media">
                  <img src={p.img} alt={p.title} />
                </div>

                <div className="card-body">
                  <div className="card-head">
                    <h4 className="card-title">{p.title}</h4>
                    <span className="card-tag">{p.tag}</span>
                  </div>

                  <p className="card-desc">{p.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="seeall-wrap">
          <button className="seeall-btn">See All →</button>
        </div>
      </div>
    </section>
  );
}
