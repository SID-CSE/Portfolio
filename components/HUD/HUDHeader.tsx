"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import HUDToggle from "./HUDToggle";

export default function HUDHeader({ hudEnabled, setHudEnabled }: { hudEnabled: boolean; setHudEnabled: (v: boolean) => void }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="hud-top-right">
      <motion.div className="hud-panel" style={{ display: "flex", gap: 8, alignItems: "center" }} initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <div style={{ width: 38, height: 38, borderRadius: 8, background: "linear-gradient(90deg,var(--accent),var(--accent-2))" }} />
          <div style={{ minWidth: 160 }}>
            <div style={{ fontSize: 12, fontWeight: 600 }}>Siddharth Kumar</div>
            <div style={{ fontSize: 11, color: "var(--muted)" }}>Full Stack · AI · Cloud</div>
          </div>
        </div>

        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <HUDToggle enabled={hudEnabled} onToggle={setHudEnabled} />
        </div>
      </motion.div>
    </div>
  );
}
