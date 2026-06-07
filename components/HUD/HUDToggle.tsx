"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HUDToggle({ enabled, onToggle }: { enabled: boolean; onToggle: (v: boolean) => void }) {
  return (
    <motion.button
      aria-pressed={enabled}
      onClick={() => onToggle(!enabled)}
      className={`hud-chip ${enabled ? "border-indigo-400/50" : "border-white/10"}`}
      title="Toggle HUD visuals"
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <circle cx="12" cy="12" r="9" stroke={enabled ? "#0ea5e9" : "#94a3b8"} strokeWidth="1.4" />
      </svg>
      <span style={{ fontSize: 12 }}>{enabled ? "HUD ON" : "HUD OFF"}</span>
    </motion.button>
  );
}
