import { useState, useEffect } from "react";

import { navLinks } from "../constants";

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
            <div className="inner">
                <a href="#hero" className="logo">
                    Aishwarya Eshwar
                </a>

                <nav className="desktop">
                    <ul>
                        {navLinks.map(({ link, name }) => (
                            <li key={name} className="group">
                                <a href={link}>
                                    <span>{name}</span>
                                    <span className="underline" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    {/* Resume download button */}
                    {/*
                        Place your resume PDF at /public/resume.pdf
                        `download` tells the browser to download instead of open
                        `download="Aishwarya_Resume.pdf"` sets the saved filename
                    */}
                    <a
                        href="/resume.pdf"
                        download="Aishwarya_Resume.pdf"
                        style={{
                            fontFamily: "'Mona Sans', sans-serif",
                            fontSize: "14px",
                            fontWeight: 600,
                            color: "#d9ecff",
                            padding: "8px 18px",
                            borderRadius: "8px",
                            border: "1px solid #1c1c21",
                            background: "#0e0e10",
                            textDecoration: "none",
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                            transition: "background 0.2s ease, border-color 0.2s ease",
                            whiteSpace: "nowrap",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = "#1c1c21";
                            e.currentTarget.style.borderColor = "#2d2d38";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = "#0e0e10";
                            e.currentTarget.style.borderColor = "#1c1c21";
                        }}
                    >
                        {/* Download icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        Resume
                    </a>

                    {/* Existing contact button */}
                    <a href="#contact" className="contact-btn group">
                        <div className="inner">
                            <span>Contact me</span>
                        </div>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default NavBar;