"use client";

import { useEffect, useState } from "react";
import HUDHeader from "./HUDHeader";
import StatusPanel from "./StatusPanel";

export default function HUDRoot() {
  const [enabled, setEnabled] = useState<boolean>(true);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("hudEnabled");
      if (stored !== null) setEnabled(stored === "1");
    } catch (e) {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("hudEnabled", enabled ? "1" : "0");
    } catch (_) {}

    if (enabled) document.documentElement.classList.add("hud-enabled");
    else document.documentElement.classList.remove("hud-enabled");
  }, [enabled]);

  return (
    <>
      <HUDHeader hudEnabled={enabled} setHudEnabled={setEnabled} />
      {enabled ? <StatusPanel /> : null}
    </>
  );
}
