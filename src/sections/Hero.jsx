import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Button from "../components/Button";
import { words } from "../constants";
import HeroExperience from "../components/models/hero_models/HeroExperience";

const Hero = () => {
  useGSAP(() => {
    // Existing h1 animation
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );

    // Fade in the badge
    gsap.fromTo(
      ".hero-badge",
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.2 }
    );

    // Fade in the paragraph
    gsap.fromTo(
      ".hero-para",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: "power2.out", delay: 0.8 }
    );

    // Fade in the button
    gsap.fromTo(
      ".hero-btn",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 1 }
    );

    // Floating glow orbs
    gsap.to(".orb-1", {
      y: -30, x: 15,
      duration: 4, ease: "sine.inOut",
      yoyo: true, repeat: -1,
    });
    gsap.to(".orb-2", {
      y: 25, x: -20,
      duration: 5, ease: "sine.inOut",
      yoyo: true, repeat: -1,
      delay: 1,
    });
    gsap.to(".orb-3", {
      y: -20, x: 10,
      duration: 3.5, ease: "sine.inOut",
      yoyo: true, repeat: -1,
      delay: 0.5,
    });
  });

  const handleScrollToWork = () => {
    const section = document.getElementById("work");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>

      {/* ── Ambient glow orbs ── */}
      <div
        className="orb-1"
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 5,
          filter: "blur(40px)",
        }}
      />
      <div
        className="orb-2"
        style={{
          position: "absolute",
          bottom: "15%",
          left: "20%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(56,189,248,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 5,
          filter: "blur(50px)",
        }}
      />
      <div
        className="orb-3"
        style={{
          position: "absolute",
          top: "40%",
          left: "35%",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(167,139,250,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 5,
          filter: "blur(30px)",
        }}
      />

      {/* ── Subtle grid pattern overlay ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          pointerEvents: "none",
          zIndex: 4,
          maskImage: "radial-gradient(ellipse 80% 80% at 20% 50%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 20% 50%, black 40%, transparent 100%)",
        }}
      />

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">

            {/* ── Availability badge ── */}
            <div
              className="hero-badge"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                width: "fit-content",
                padding: "6px 16px",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(8px)",
                zIndex: 10,
                position: "relative",
              }}
            >
              {/* Pulsing green dot */}
              <span style={{ position: "relative", display: "inline-block", width: "8px", height: "8px" }}>
                <span style={{
                  display: "block", width: "8px", height: "8px",
                  borderRadius: "50%", background: "#4ade80",
                }} />
                <span style={{
                  position: "absolute", inset: "-3px", borderRadius: "50%",
                  background: "rgba(74,222,128,0.35)",
                  animation: "heroPing 1.5s cubic-bezier(0,0,0.2,1) infinite",
                }} />
              </span>
              <span style={{
                fontFamily: "'Mona Sans', sans-serif",
                fontSize: "12px",
                color: "#839cb5",
                letterSpacing: "0.05em",
              }}>
                Open to opportunities
              </span>
            </div>

            {/* ── Headline ── */}
            <div className="hero-text" style={{ position: "relative", zIndex: 10 }}>
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>

            {/* ── Bio ── */}
            <p className="hero-para text-white-50 md:text-xl relative z-10 pointer-events-none max-w-lg">
              Hi, I'm Aishwarya — a Full-Stack Developer building scalable web
              apps with React, Node.js, and Python. Currently working as a Junior
              Web Developer, I've built real-world solutions like a Carbon
              Calculator with live API integration and secure data pipelines. I'm
              passionate about clean code, great UX, and solving problems that
              matter.
            </p>

            {/* ── Tech pills ── */}
            <div
              className="hero-para"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                position: "relative",
                zIndex: 10,
              }}
            >
              {["React", "Node.js", "Python", "TailwindCSS", "MongoDB"].map((tech) => (
                <span
                  key={tech}
                  style={{
                    fontFamily: "'Mona Sans', sans-serif",
                    fontSize: "12px",
                    color: "#839cb5",
                    padding: "4px 12px",
                    borderRadius: "999px",
                    border: "1px solid #1c1c21",
                    background: "#0e0e10",
                    letterSpacing: "0.04em",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* ── Button ── */}
            <div
              className="hero-btn"
              onClick={handleScrollToWork}
              style={{ cursor: "pointer", position: "relative", zIndex: 10, display: "flex", alignItems: "flex-start" }}
            >
              <Button
                text="See My Work"
                className="md:w-80 md:h-16 w-60 h-12"
                id="work"
              />
            </div>
          </div>
        </header>

        {/* RIGHT: 3D Model */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>

      <style>{`
        @keyframes heroPing {
          75%, 100% { transform: scale(2.5); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;