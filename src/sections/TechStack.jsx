import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleHeader from "../components/TitleHeader";
import TechIconCardExperience from "../components/models/tech_logos/TechIconCardExperience";
import { techStackIcons } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const skillInfo = {
  "Frontend Developer": {
    color: "#61DAFB",
    tags: ["React.js", "HTML5", "CSS3", "TailwindCSS", "Javascript"],
    desc: "Building responsive, interactive UIs with modern frameworks and animation libraries.",
  },
  "Python Developer": {
    color: "#3776AB",
    tags: ["Python", "Data Pipelines", "Scripting", "Pandas", "REST APIs",  "Fast API" ],
    desc: "Writing clean Python scripts for data processing, automation, and backend logic.",
  },
  "Backend Developer": {
    color: "#68A063",
    tags: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Fast API" , "JWT Auth"],
    desc: "Building scalable server-side applications and database integrations.",
  },
  "Git": {
    color: "#F05032",
    tags: ["Git", "GitHub", "Version Control", "Agile", "CI/CD"],
    desc: "Managing codebases with Git, collaborating via GitHub, and following agile workflows.",
  },
};

const TechCard = ({ techStackIcon }) => {
  const [touched, setTouched] = useState(false);
  const info = skillInfo[techStackIcon.name] ?? { color: "#ffffff", tags: [], desc: "" };

  return (
    <>
      <style>{`
        .tc-wrapper {
          perspective: 1000px;
          height: 480px;
          width: 260px;
          cursor: pointer;
        }
        .tc-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
        }
        /* Desktop: CSS hover — never misfires */
        .tc-wrapper:hover .tc-inner {
          transform: rotateY(180deg);
        }
        /* Mobile: touch state */
        .tc-wrapper[data-touched="true"] .tc-inner {
          transform: rotateY(180deg);
        }
        .tc-face {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .tc-back {
          transform: rotateY(180deg);
        }
      `}</style>

      <div
        className="tc-wrapper"
        data-touched={touched}
        onTouchStart={() => setTouched(true)}
        onTouchEnd={() => setTouched(false)}
      >
        <div className="tc-inner">

          {/* ── FRONT: 3D model ── */}
          <div className="tc-face card-border overflow-hidden group rounded-full">
            <div className="tech-card-animated-bg" />
            <div className="tech-card-content">
              <div className="tech-icon-wrapper">
                <TechIconCardExperience model={techStackIcon} />
              </div>
              <div className="padding-x w-full">
                <p>{techStackIcon.name}</p>
              </div>
            </div>
            {/* No hint text — removed as requested */}
          </div>

          {/* ── BACK: skills info ── */}
          <div
            className="tc-face tc-back rounded-full border overflow-hidden flex flex-col justify-center gap-3 px-6 py-10"
            style={{
              borderColor: `${info.color}40`,
              background: "linear-gradient(135deg, #0e0e10 0%, #1a1a24 100%)",
            }}
          >
            {/* colored top line */}
            <div
              className="absolute top-8 left-0 right-0 h-[3px]"
              style={{
                background: `linear-gradient(90deg, transparent, ${info.color}, transparent)`,
              }}
            />
            {/* soft glow */}
            <div
              className="absolute inset-0 opacity-10 rounded-2xl"
              style={{
                background: `radial-gradient(ellipse at 50% 0%, ${info.color} 0%, transparent 70%)`,
              }}
            />

            <div className="relative z-10 flex flex-col gap-4">
              <h3 className="text-white font-bold text-lg">{techStackIcon.name}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{info.desc}</p>
              <div className="flex flex-wrap gap-2">
                {info.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{
                      backgroundColor: `${info.color}15`,
                      color: info.color,
                      border: `1px solid ${info.color}30`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: { trigger: "#skills", start: "top center" },
      }
    );
  });

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="How I Can Contribute & My Key Skills"
          sub="🤝 What I Bring to the Table"
        />
        <div className="tech-grid">
          {techStackIcons.map((techStackIcon) => (
            <div key={techStackIcon.name} className="tech-card">
              <TechCard techStackIcon={techStackIcon} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
