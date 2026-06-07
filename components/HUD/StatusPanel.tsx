"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { projectCards, certifications, experience } from "@/data/portfolio";

function useCount(target: number, duration = 800) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let raf = 0;
    let start: number | null = null;

    function step(now: number) {
      if (!start) start = now;
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    }

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);

  return value;
}

export default function StatusPanel() {
  const projects = useCount(projectCards.length, 900);
  const certs = useCount(certifications.length, 900);
  const exp = useCount(experience.length, 900);

  return (
    <div className="hud-float">
      <motion.div className="hud-panel" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <div style={{ minWidth: 140 }}>
            <div style={{ fontSize: 12, color: "var(--muted)" }}>Projects</div>
            <div style={{ fontSize: 16, fontWeight: 700 }}>{projects}</div>
          </div>

          <div style={{ minWidth: 140 }}>
            <div style={{ fontSize: 12, color: "var(--muted)" }}>Certifications</div>
            <div style={{ fontSize: 16, fontWeight: 700 }}>{certs}</div>
          </div>

          <div style={{ minWidth: 140 }}>
            <div style={{ fontSize: 12, color: "var(--muted)" }}>Experience</div>
            <div style={{ fontSize: 16, fontWeight: 700 }}>{exp}</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
