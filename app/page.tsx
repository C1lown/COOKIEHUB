"use client";

import { useState } from "react";

const profileUrl = "https://www.roblox.com/communities/your-group-id/your-group-name#!/about";
const discordUrl = "https://discord.gg/your-invite";

export default function Home() {
  const [copied, setCopied] = useState(false);

  async function copyProfile() {
    try {
      await navigator.clipboard.writeText(profileUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <main className="scene">
      <div className="grain" aria-hidden="true" />
      <div className="horizon" aria-hidden="true">
        <div className="moon" />
        <div className="ridge ridge-back" />
        <div className="ridge ridge-front" />
        <div className="tower tower-one" /><div className="tower tower-two" /><div className="tower tower-three" />
        <div className="palm palm-one"><i /><b /><em /></div>
        <div className="palm palm-two"><i /><b /><em /></div>
      </div>

      <nav className="topbar" aria-label="Main navigation">
        <a className="discord" href={discordUrl} target="_blank" rel="noreferrer">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19.7 5.3A18.4 18.4 0 0 0 15.2 4l-.6 1.2a16.8 16.8 0 0 0-5.2 0L8.8 4a18.4 18.4 0 0 0-4.5 1.3C1.5 9.5.7 13.6 1.1 17.7a18 18 0 0 0 5.5 2.8l1.2-2a11.8 11.8 0 0 1-1.9-.9l.5-.4a13 13 0 0 0 11.2 0l.5.4a11.8 11.8 0 0 1-1.9.9l1.2 2a18 18 0 0 0 5.5-2.8c.5-4.8-.8-8.9-3.2-12.4ZM8.8 14.7c-1.1 0-2-1-2-2.2s.9-2.2 2-2.2 2 1 2 2.2-.9 2.2-2 2.2Zm6.4 0c-1.1 0-2-1-2-2.2s.9-2.2 2-2.2 2 1 2 2.2-.9 2.2-2 2.2Z" /></svg>
          <span>Discord</span><span className="external" aria-hidden="true">↗</span>
        </a>
        <a className="brand" href="#home" aria-label="Nightshift home"><span className="brand-mark">✳</span><span>nightshift<span className="dot">.</span></span></a>
      </nav>

      <section className="center" id="home" aria-label="Roblox community">
        <div className="eyebrow"><span className="status-dot" /> ROBLOX COMMUNITY <span className="divider">/</span> EST. AFTER DARK</div>
        <h1>Make something<br /><span>worth staying up for.</span></h1>
        <p className="intro">A little corner for builders, players, and late-night ideas.</p>
        <div className="profile-card">
          <div className="profile-icon" aria-hidden="true">N</div>
          <div className="profile-copy"><span className="profile-label">FIND US ON ROBLOX</span><span className="profile-url">roblox.com / communities</span></div>
          <button className="copy-button" onClick={copyProfile} aria-label="Copy Roblox community link" title="Copy link">
            {copied ? <span className="check">✓</span> : <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/></svg>}
          </button>
        </div>
        <p className={`copy-note ${copied ? "visible" : ""}`} aria-live="polite">{copied ? "Link copied to clipboard" : ""}</p>
      </section>

      <footer className="footer"><span>BUILT FOR THE AFTER HOURS</span><span className="footer-line" /><span>2025 — NIGHTSHIFT</span></footer>
    </main>
  );
}
