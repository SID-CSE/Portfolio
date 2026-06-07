"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function BootScreen() {
  const [visible, setVisible] = useState(false);
  const [played, setPlayed] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const flag = sessionStorage.getItem("hudBootPlayed");
      if (flag) {
        setPlayed(true);
        return;
      }
    } catch (e) {
      // ignore sessionStorage errors in some environments
    }

    setVisible(true);
    setPlayed(false);

    const totalDuration = 3200;
    const timer = window.setTimeout(() => {
      try {
        sessionStorage.setItem("hudBootPlayed", "1");
      } catch (_) {}
      setVisible(false);
      setPlayed(true);
    }, totalDuration);

    return () => window.clearTimeout(timer);
  }, []);

  if (played) return null;

  return (
    <div className="hud-boot" aria-hidden={!visible}>
      <div className="scanline" />
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.98 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="boot-logo hud-panel">
          <motion.div initial={{ y: -8 }} animate={{ y: [ -8, 0, -6 ] }} transition={{ duration: 1.8, repeat: 0 }}>
            <svg width="92" height="92" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <rect x="2" y="2" width="20" height="20" rx="6" fill="url(#g)" />
              <defs>
                <linearGradient id="g" x1="0" x2="1">
                  <stop offset="0" stopColor="#818cf8" />
                  <stop offset="1" stopColor="#22d3ee" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          <div style={{ marginTop: 12, textAlign: "center" }}>
            <motion.div className="hud-accent-text" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45, duration: 0.6 }}>
              <strong>Siddharth Kumar</strong>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.9 }} transition={{ delay: 0.75, duration: 0.6 }}>
              <div style={{ marginTop: 6, fontSize: 13, color: "var(--muted)" }}>Building Intelligent Systems — Full Stack · AI · Cloud</div>
            </motion.div>
          </div>

          <div style={{ marginTop: 14, display: "flex", gap: 8, justifyContent: "center" }}>
            <span className="hud-chip">Initializing UI</span>
            <span className="hud-chip">Loading modules</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
