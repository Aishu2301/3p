import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

/* ─────────────────────────────────────────
   FlipCard
   Desktop  → CSS :hover  (most reliable)
   Mobile   → touchStart / touchEnd state
───────────────────────────────────────── */
const FlipCard = ({ frontImg, title, description, githubLink, size }) => {
  const [touched, setTouched] = useState(false);

  return (
    <div
      className="fc-wrapper"
      data-touched={touched}
      onTouchStart={() => setTouched(true)}
      onTouchEnd={() => setTouched(false)}
      style={{ width: "100%", height: "100%", perspective: "1200px", cursor: "pointer" }}
    >
      <div className="fc-inner" style={{ borderRadius: "12px" }}>

        {/* ── FRONT ── */}
        <div className="fc-face fc-front" style={{ borderRadius: "12px" }}>
          <img
            src={frontImg}
            alt={title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              position: "relative",
              inset: "unset",
            }}
          />
          <div className="fc-strip">
            <p
              style={{
                fontFamily: "'Mona Sans', sans-serif",
                fontSize: size === "large" ? "16px" : "13px",
                fontWeight: 700,
                color: "#d9ecff",
                margin: 0,
              }}
            >
              {title}
            </p>
            <span className="fc-hint">hover →</span>
          </div>
        </div>

        {/* ── BACK ── */}
        <div
          className="fc-face fc-back"
          style={{
            borderRadius: "12px",
            background: "#0e0e10",
            border: "1px solid #1c1c21",
          }}
        >
          {/* Decorative rings */}
          {[120, 210, 310].map((s) => (
            <div
              key={s}
              style={{
                position: "absolute",
                width: s,
                height: s,
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.04)",
                pointerEvents: "none",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}

          {/* GitHub icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            style={{
              width: size === "large" ? "48px" : "38px",
              height: "auto",
              flexShrink: 0,
              position: "relative",
              zIndex: 1,
              opacity: 0.9,
            }}
          >
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>

          {/* Title + description */}
          <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
            <p
              style={{
                fontFamily: "'Mona Sans', sans-serif",
                color: "#d9ecff",
                fontSize: size === "large" ? "20px" : "16px",
                fontWeight: 700,
                margin: "0 0 8px",
              }}
            >
              {title}
            </p>
            {description && (
              <p
                style={{
                  fontFamily: "'Mona Sans', sans-serif",
                  color: "#839cb5",
                  fontSize: "13px",
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                {description}
              </p>
            )}
          </div>

          {/* GitHub button */}
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group cta-wrapper"
            style={{ position: "relative", zIndex: 1 }}
          >
            <div
              className="cta-button"
              style={{ borderRadius: "8px", paddingLeft: "20px", paddingRight: "20px" }}
            >
              <div className="bg-circle" />
              <span
                className="text"
                style={{
                  fontFamily: "'Mona Sans', sans-serif",
                  fontSize: size === "large" ? "15px" : "13px",
                }}
              >
                View on GitHub
              </span>
              <div className="arrow-wrapper">
                <img
                  src="/images/arrow-down.svg"
                  alt="arrow"
                  className="size-4"
                  style={{ position: "relative", inset: "unset", width: "20px", height: "20px" }}
                />
              </div>
            </div>
          </a>
        </div>

      </div>

      {/* ── CSS for hover + touch flip ── */}
      <style>{`
        .fc-wrapper {
          display: block;
        }

        .fc-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
        }

        /* Desktop: pure CSS hover — never misfires */
        .fc-wrapper:hover .fc-inner {
          transform: rotateY(180deg);
        }

        /* Mobile: touch state via data attribute */
        .fc-wrapper[data-touched="true"] .fc-inner {
          transform: rotateY(180deg);
        }

        .fc-face {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          overflow: hidden;
        }

        .fc-front {
          /* nothing extra */
        }

        .fc-back {
          transform: rotateY(180deg);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 20px;
          padding: 32px;
          text-align: center;
        }

        .fc-strip {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 40px 18px 16px;
          background: linear-gradient(to top, rgba(0,0,0,0.75), transparent);
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          pointer-events: none;
        }

        .fc-hint {
          font-family: 'Mona Sans', sans-serif;
          font-size: 11px;
          color: rgba(255,255,255,0.6);
          padding: 4px 10px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.15);
          background: rgba(0,0,0,0.4);
          backdrop-filter: blur(6px);
          white-space: nowrap;
        }
      `}</style>
    </div>
  );
};

/* ─────────────────────────────────────────
   AppShowcase
───────────────────────────────────────── */
const AppShowcase = () => {
  const sectionRef = useRef(null);
  const projectRefs = useRef([]);

  useGSAP(() => {
    gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 });
    projectRefs.current.forEach((card, i) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.15 * i,
          scrollTrigger: { trigger: card, start: "top bottom-=100" },
        }
      );
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !projectRefs.current.includes(el)) projectRefs.current.push(el);
  };

  const largeSlot = {
    width: "100%",
    height: "clamp(300px, 50vh, 70vh)",
    position: "relative",
    borderRadius: "12px",
    overflow: "hidden",
  };

  const smallSlot = {
    width: "100%",
    height: "clamp(180px, 25vh, 37vh)",
    position: "relative",
    borderRadius: "12px",
    overflow: "hidden",
  };

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="showcaselayout">

        {/* ── Left Column ── */}
        <div className="first-project-wrapper">
          <div ref={addToRefs} style={largeSlot}>
            <FlipCard
              frontImg="/images/project1.png"
              title="Ryde App Interface"
              description="A ride-sharing mobile app built with React Native, Expo & TailwindCSS."
              githubLink="https://github.com/Aishu2301/ryde-app"
              size="large"
            />
          </div>
          <div style={{ display: "flex", gap: "16px", marginTop: "16px", flex: 1 }}>
            <div ref={addToRefs} style={{ ...smallSlot, flex: 1 }}>
              <FlipCard
                frontImg="/images/project4.png"
                title="Travel Application"
                description="Explore destinations with a sleek travel UI."
                githubLink="https://github.com/Aishu2301/travel_app"
                size="small"
              />
            </div>
            <div ref={addToRefs} style={{ ...smallSlot, flex: 1 }}>
              <FlipCard
                frontImg="/images/project5.png"
                title="Macbook Landing Page"
                description="An Apple-inspired product landing page with smooth animations."
                githubLink="https://github.com/Aishu2301/macbook_app"
                size="small"
              />
            </div>
          </div>
        </div>

        {/* ── Right Column ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", flex: 1 }}>
          <div style={{ display: "flex", gap: "16px" }}>
            <div ref={addToRefs} style={{ ...smallSlot, flex: 1 }}>
              <FlipCard
                frontImg="/images/project2.png"
                title="Library Management Platform"
                description="Full-stack library system with CRUD operations."
                githubLink="https://github.com/Aishu2301/library-management-platform"
                size="small"
              />
            </div>
            <div ref={addToRefs} style={{ ...smallSlot, flex: 1 }}>
              <FlipCard
                frontImg="/images/project3.png"
                title="Startup Showcase"
                description="A modern landing page for startup presentation."
                githubLink="https://github.com/Aishu2301/startup-showcase"
                size="small"
              />
            </div>
          </div>
          <div ref={addToRefs} style={{ ...largeSlot, flex: 1 }}>
            <FlipCard
              frontImg="/images/project6.png"
              title="Chat Application"
              description="Real-time chat built with Three.js & TailwindCSS."
              githubLink="https://github.com/Aishu2301/Chat-App"
              size="large"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default AppShowcase;