"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  aboutStats,
  certifications,
  cloudServices,
  experience,
  heroFocusAreas,
  heroRoles,
  heroStats,
  navigationItems,
  philosophy,
  projectCards,
  skillCategories,
  socials,
  systemDesignTabs,
  writings,
  mlModels,
} from "@/data/portfolio";

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

function GlassCard({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <div className={`glass-card rounded-3xl ${className}`}>{children}</div>;
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="max-w-3xl space-y-3">
      <p className="text-xs uppercase tracking-[0.28em] text-slate-300/70">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">{title}</h2>
      <p className="max-w-2xl text-sm leading-7 text-slate-300/80 sm:text-base">{description}</p>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-[0.08em] text-slate-100/90">{children}</span>;
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <GlassCard className="p-5">
      <p className="text-3xl font-semibold tracking-[-0.04em] text-white">{value}</p>
      <p className="mt-1 text-sm text-slate-300/80">{label}</p>
    </GlassCard>
  );
}

function useTypewriter(words: string[]) {
  const shouldReduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(words[0] ?? "");

  useEffect(() => {
    if (shouldReduceMotion) {
      setText(words[0] ?? "");
      return;
    }

    const currentWord = words[index % words.length] ?? "";
    let charIndex = 0;
    let deleting = false;

    const interval = window.setInterval(() => {
      if (!deleting) {
        charIndex += 1;
        setText(currentWord.slice(0, charIndex));
        if (charIndex >= currentWord.length) {
          deleting = true;
          window.clearInterval(interval);
          window.setTimeout(() => setIndex((current) => (current + 1) % words.length), 1100);
        }
      }
    }, 70);

    return () => window.clearInterval(interval);
  }, [index, shouldReduceMotion, words]);

  return text;
}

function SectionShell({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <motion.section id={id} className="section-shell mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20" variants={sectionVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.45, ease: "easeOut" }}>
      {children}
    </motion.section>
  );
}

function NavBar({ active, onDownloadResume }: { active: string; onDownloadResume: () => void }) {
  return (
    <>
      <header className="sticky top-0 z-50 hidden border-b border-white/8 bg-[#050816]/70 backdrop-blur-xl lg:block">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-slate-300/60">Siddharth Kumar</p>
            <p className="mt-1 text-sm text-slate-100/90">Full Stack · AI/ML · Cloud Engineer</p>
          </div>
          <div className="flex flex-wrap items-center justify-end gap-2">
            {navigationItems.slice(0, 6).map((item) => (
              <motion.a key={item.href} href={item.href} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} whileHover={{ scale: 1.03 }} className={`rounded-full border px-3 py-2 text-xs tracking-[0.08em] transition ${active === item.href.slice(1) ? "border-indigo-400/60 bg-indigo-400/15 text-white" : "border-white/10 bg-white/5 text-slate-300 hover:border-indigo-400/40 hover:bg-white/10 hover:text-white"}`}>
                {item.label}
              </motion.a>
            ))}
            <button
              type="button"
              onClick={onDownloadResume}
              className="rounded-full bg-linear-to-r from-indigo-500 via-cyan-400 to-fuchsia-500 px-4 py-2 text-xs font-medium text-white shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02]"
            >
              Download Resume
            </button>
          </div>
        </nav>
      </header>

      <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-white/8 bg-[#050816]/80 px-3 py-3 backdrop-blur-xl lg:hidden">
        <div className="mx-auto grid max-w-7xl grid-cols-4 gap-2 sm:grid-cols-6">
          {navigationItems.slice(0, 12).map((item) => (
            <motion.a key={item.href} href={item.href} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} whileHover={{ scale: 1.02 }} className={`rounded-2xl px-2 py-2 text-center text-[10px] tracking-[0.08em] transition ${active === item.href.slice(1) ? "bg-indigo-400/20 text-white" : "text-slate-300/70 hover:bg-white/5 hover:text-white"}`}>
              {item.label}
            </motion.a>
          ))}
        </div>
      </nav>
    </>
  );
}

function DiagramFrame({ children }: { children: React.ReactNode }) {
  return <div className="glass-card overflow-hidden rounded-3xl p-4">{children}</div>;
}

function ArchDiagram() {
  return (
    <svg viewBox="0 0 880 360" className="h-auto w-full" role="img" aria-label="Architecture diagram">
      <defs>
        <linearGradient id="archGradient" x1="0" x2="1">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto">
          <path d="M0,0 L0,6 L7,3 z" fill="#22d3ee" />
        </marker>
      </defs>
      <rect x="20" y="20" width="840" height="320" rx="28" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.12)" />
      <rect x="54" y="60" width="140" height="64" rx="18" fill="rgba(129,140,248,0.16)" stroke="url(#archGradient)" />
      <text x="124" y="95" textAnchor="middle" fill="#f8fafc" fontSize="18">Client</text>
      <rect x="250" y="60" width="150" height="64" rx="18" fill="rgba(34,211,238,0.14)" stroke="url(#archGradient)" />
      <text x="325" y="95" textAnchor="middle" fill="#f8fafc" fontSize="18">Next.js UI</text>
      <rect x="458" y="60" width="150" height="64" rx="18" fill="rgba(192,132,252,0.12)" stroke="url(#archGradient)" />
      <text x="533" y="95" textAnchor="middle" fill="#f8fafc" fontSize="18">API Layer</text>
      <rect x="666" y="60" width="140" height="64" rx="18" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.16)" />
      <text x="736" y="95" textAnchor="middle" fill="#f8fafc" fontSize="18">Data Store</text>
      <path d="M194 92 H250" stroke="#22d3ee" strokeWidth="3" markerEnd="url(#arrow)" />
      <path d="M400 92 H458" stroke="#22d3ee" strokeWidth="3" markerEnd="url(#arrow)" />
      <path d="M608 92 H666" stroke="#22d3ee" strokeWidth="3" markerEnd="url(#arrow)" />
      <rect x="130" y="190" width="620" height="88" rx="22" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.12)" />
      <text x="440" y="224" textAnchor="middle" fill="#e2e8f0" fontSize="19">Background jobs, observability, and third-party integrations</text>
      <text x="440" y="252" textAnchor="middle" fill="#94a3b8" fontSize="14">Queues · Webhooks · Caching · Metrics · Alerts</text>
    </svg>
  );
}

function CloudDiagram() {
  return (
    <svg viewBox="0 0 880 340" className="h-auto w-full" role="img" aria-label="Cloud deployment diagram">
      <defs>
        <marker id="cloudArrow" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto">
          <path d="M0,0 L0,6 L7,3 z" fill="#22d3ee" />
        </marker>
      </defs>
      <rect x="20" y="20" width="840" height="300" rx="28" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.12)" />
      <rect x="60" y="52" width="160" height="70" rx="18" fill="rgba(129,140,248,0.16)" stroke="rgba(129,140,248,0.6)" />
      <text x="140" y="92" textAnchor="middle" fill="#f8fafc" fontSize="17">Route 53 + CDN</text>
      <rect x="282" y="52" width="150" height="70" rx="18" fill="rgba(34,211,238,0.14)" stroke="rgba(34,211,238,0.56)" />
      <text x="357" y="92" textAnchor="middle" fill="#f8fafc" fontSize="17">Public API</text>
      <rect x="478" y="52" width="160" height="70" rx="18" fill="rgba(16,185,129,0.12)" stroke="rgba(16,185,129,0.56)" />
      <text x="558" y="92" textAnchor="middle" fill="#f8fafc" fontSize="17">App Service</text>
      <rect x="680" y="52" width="140" height="70" rx="18" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.16)" />
      <text x="750" y="92" textAnchor="middle" fill="#f8fafc" fontSize="17">RDS / Redis</text>
      <path d="M220 87 H282" stroke="#22d3ee" strokeWidth="3" markerEnd="url(#cloudArrow)" />
      <path d="M432 87 H478" stroke="#22d3ee" strokeWidth="3" markerEnd="url(#cloudArrow)" />
      <path d="M638 87 H680" stroke="#22d3ee" strokeWidth="3" markerEnd="url(#cloudArrow)" />
      <rect x="110" y="170" width="640" height="92" rx="24" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.12)" />
      <text x="430" y="206" textAnchor="middle" fill="#e2e8f0" fontSize="18">CI/CD: push {'->'} build {'->'} test {'->'} containerize {'->'} deploy</text>
      <text x="430" y="235" textAnchor="middle" fill="#94a3b8" fontSize="14">GitHub Actions · Docker · Environment promotion · Health checks</text>
    </svg>
  );
}

function MLPipeline() {
  return (
    <svg viewBox="0 0 880 330" className="h-auto w-full" role="img" aria-label="Machine learning pipeline">
      <defs>
        <marker id="mlArrow" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto">
          <path d="M0,0 L0,6 L7,3 z" fill="#22d3ee" />
        </marker>
      </defs>
      <rect x="20" y="20" width="840" height="290" rx="28" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.12)" />
      <rect x="52" y="76" width="134" height="70" rx="18" fill="rgba(129,140,248,0.15)" stroke="rgba(129,140,248,0.55)" />
      <text x="119" y="118" textAnchor="middle" fill="#fff" fontSize="17">Data ingest</text>
      <rect x="242" y="76" width="150" height="70" rx="18" fill="rgba(34,211,238,0.14)" stroke="rgba(34,211,238,0.55)" />
      <text x="317" y="118" textAnchor="middle" fill="#fff" fontSize="17">Feature prep</text>
      <rect x="448" y="76" width="150" height="70" rx="18" fill="rgba(192,132,252,0.12)" stroke="rgba(192,132,252,0.55)" />
      <text x="523" y="118" textAnchor="middle" fill="#fff" fontSize="17">Training</text>
      <rect x="656" y="76" width="150" height="70" rx="18" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.15)" />
      <text x="731" y="118" textAnchor="middle" fill="#fff" fontSize="17">Inference API</text>
      <path d="M186 111 H242" stroke="#22d3ee" strokeWidth="3" markerEnd="url(#mlArrow)" />
      <path d="M392 111 H448" stroke="#22d3ee" strokeWidth="3" markerEnd="url(#mlArrow)" />
      <path d="M598 111 H656" stroke="#22d3ee" strokeWidth="3" markerEnd="url(#mlArrow)" />
      <rect x="138" y="186" width="600" height="64" rx="20" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.12)" />
      <text x="438" y="221" textAnchor="middle" fill="#e2e8f0" fontSize="18">Monitoring: drift checks, metrics, and user feedback loops</text>
    </svg>
  );
}

function ProjectCard({ project }: { project: (typeof projectCards)[number] }) {
  const [open, setOpen] = useState(false);

  return (
    <GlassCard className="overflow-hidden p-6 transition hover:-translate-y-1">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-300/60">Featured Project</p>
            <h3 className="text-2xl font-semibold tracking-[-0.02em] text-white">{project.name}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <a className="rounded-full border border-white/10 px-3 py-2 text-xs text-slate-200 transition hover:border-cyan-400/40 hover:bg-white/10" href={project.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="rounded-full border border-white/10 px-3 py-2 text-xs text-slate-200 transition hover:border-cyan-400/40 hover:bg-white/10" href={project.links.live} target="_blank" rel="noreferrer">
              Live / Demo
            </a>
          </div>
        </div>
        <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-4">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-slate-300/60">Problem</p>
              <p className="mt-2 text-sm leading-7 text-slate-200/90">{project.problem}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-slate-300/60">Architecture</p>
              <p className="mt-2 text-sm leading-7 text-slate-200/90">{project.architecture}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((stack) => <Pill key={stack}>{stack}</Pill>)}
            </div>
          </div>
          <DiagramFrame>
            <ArchDiagram />
          </DiagramFrame>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/8 pt-4">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-slate-300/60">Impact</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.impact.map((item) => (
                <span key={item} className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-50">{item}</span>
              ))}
            </div>
          </div>
          <button type="button" onClick={() => setOpen((value) => !value)} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-[0.08em] text-white transition hover:border-cyan-400/40 hover:bg-white/10">
            {open ? "Hide details" : "Expand details"}
          </button>
        </div>
        <AnimatePresence initial={false}>
          {open ? (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35 }} className="overflow-hidden">
              <div className="grid gap-4 border-t border-white/8 pt-4 lg:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-300/60">Engineering challenges</p>
                  <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200/90">
                    {project.challenges.map((challenge) => <li key={challenge}>• {challenge}</li>)}
                  </ul>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-300/60">Detail panel</p>
                  <p className="mt-3 text-sm leading-7 text-slate-200/90">This expandable area can hold a live architecture walk-through, decisions, screenshots, or a short video demo.</p>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </GlassCard>
  );
}

function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setState("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(formData.get("name") ?? ""),
          email: String(formData.get("email") ?? ""),
          message: String(formData.get("message") ?? ""),
        }),
      });

      if (!response.ok) throw new Error("Contact request failed");

      setState("success");
      setMessage("Thanks. Your message was sent and a confirmation was queued if email delivery is configured.");
      event.currentTarget.reset();
    } catch {
      setState("error");
      setMessage("The form could not be sent. Check the API route environment variables and try again.");
    }
  }

  return (
    <GlassCard className="p-6">
      <form className="grid gap-4" onSubmit={handleSubmit}>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="grid gap-2 text-sm text-slate-200/85">
            Name
            <input name="name" required className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-400 focus:border-cyan-400/50" placeholder="Siddharth Kumar" />
          </label>
          <label className="grid gap-2 text-sm text-slate-200/85">
            Email
            <input name="email" type="email" required className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-400 focus:border-cyan-400/50" placeholder="you@company.com" />
          </label>
        </div>
        <label className="grid gap-2 text-sm text-slate-200/85">
          Message
          <textarea name="message" rows={5} required className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-400 focus:border-cyan-400/50" placeholder="Tell me what you are building or hiring for." />
        </label>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <button type="submit" disabled={state === "sending"} className="rounded-full bg-linear-to-r from-indigo-500 via-cyan-400 to-fuchsia-500 px-5 py-3 text-sm font-medium text-white transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60">
            {state === "sending" ? "Sending..." : "Send message"}
          </button>
          <p className={`text-sm ${state === "error" ? "text-rose-300" : "text-emerald-300"}`}>{message}</p>
        </div>
      </form>
    </GlassCard>
  );
}

export default function Portfolio() {
  const reducedMotion = useReducedMotion();
  const typewriter = useTypewriter(heroRoles);
  const [activeSection, setActiveSection] = useState("hero");
  const [selectedSkillCategory, setSelectedSkillCategory] = useState(skillCategories[0].label);
  const [selectedDesignTab, setSelectedDesignTab] = useState(systemDesignTabs[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible?.target instanceof HTMLElement) setActiveSection(visible.target.id);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: 0.02 },
    );

    navigationItems.forEach((item) => {
      const element = document.getElementById(item.href.slice(1));
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const currentSkills = useMemo(() => skillCategories.find((item) => item.label === selectedSkillCategory) ?? skillCategories[0], [selectedSkillCategory]);
  const activeDesignTab = useMemo(() => systemDesignTabs.find((item) => item.id === selectedDesignTab) ?? systemDesignTabs[0], [selectedDesignTab]);

  function downloadResume() {
    const resume = [
      "Siddharth Kumar",
      "Full Stack · AI/ML · Cloud Engineer",
      "",
      "Selected capabilities:",
      "- Next.js, TypeScript, Tailwind CSS, Framer Motion",
      "- Python, FastAPI, REST APIs, Streamlit",
      "- PostgreSQL, Redis, Docker, GitHub Actions, AWS",
      "",
      "Portfolio highlights:",
      "- Architecture-first personal brand site",
      "- AI/ML demo surfaces and cloud diagrams",
      "- Clear documentation and contact workflows",
    ].join("\n");

    const blob = new Blob([resume], { type: "text/plain;charset=utf-8" });
    const url = window.URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "Siddharth-Kumar-Resume.txt";
    anchor.click();
    window.URL.revokeObjectURL(url);
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-transparent text-white">
      <NavBar active={activeSection} onDownloadResume={downloadResume} />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="mesh-orb absolute -left-30 -top-10 h-72 w-72 rounded-full bg-indigo-500/30 blur-3xl" />
        <div className="mesh-orb absolute -right-20 top-35 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="mesh-orb absolute bottom-[18%] left-[22%] h-64 w-64 rounded-full bg-fuchsia-500/15 blur-3xl" />
      </div>

      <main className="relative z-10 pb-28 lg:pb-0">
        <SectionShell id="hero">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-[0.08em] text-slate-200/90">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Open to opportunities
              </div>
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.32em] text-slate-300/60">Elite Personal Brand Website</p>
                <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-[5rem]">Siddharth Kumar</h1>
                <p className="text-2xl font-medium tracking-[-0.02em] text-slate-100 sm:text-3xl">
                  {typewriter}
                  <span className="ml-1 inline-block h-7 w-2 align-middle bg-cyan-300/80" />
                </p>
                <p className="max-w-2xl text-base leading-7 text-slate-300/85 sm:text-lg">
                  Building things that scale with Python, FastAPI, Next.js, cloud infrastructure, and applied AI. This blueprint turns the portfolio into a product: clear signal, polished motion, and architecture-first storytelling.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="#projects" className="rounded-full bg-linear-to-r from-indigo-500 via-cyan-400 to-fuchsia-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 transition hover:scale-[1.01]">View Projects</a>
                <button type="button" onClick={downloadResume} className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-cyan-400/40 hover:bg-white/10">Download Resume</button>
              </div>
              <div className="flex flex-wrap gap-2">{heroFocusAreas.map((area) => <Pill key={area}>{area}</Pill>)}</div>
              <div className="grid gap-4 sm:grid-cols-3">{heroStats.map((stat) => <StatCard key={stat.label} value={stat.value} label={stat.label} />)}</div>
            </div>

            <GlassCard className="relative overflow-hidden p-6 lg:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(129,140,248,0.2),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.14),transparent_28%)]" />
              <div className="relative space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-300/60">Focus areas</p>
                  <div className="mt-4 grid gap-3">{heroFocusAreas.map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100/90">{item}</div>)}</div>
                </div>
                <DiagramFrame>
                  <ArchDiagram />
                </DiagramFrame>
              </div>
            </GlassCard>
          </div>
        </SectionShell>

        <SectionShell id="about">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <SectionHeading eyebrow="01. About" title="A builder story framed around systems, not slogans." description="This section gives recruiters, founders, and collaborators the short version: what you build, how you think, and why your portfolio should feel like an engineered product." />
            <div className="space-y-5">
              <GlassCard className="p-6">
                <p className="text-sm leading-7 text-slate-200/90">I build production-minded applications across the stack: clean interfaces, reliable APIs, data-first workflows, and cloud delivery that can survive real traffic. The goal is not just to show projects, but to show how those projects are designed, measured, and operated.</p>
              </GlassCard>
              <div className="grid gap-4 md:grid-cols-3">{aboutStats.map((stat) => <StatCard key={stat.label} value={stat.value} label={stat.label} />)}</div>
            </div>
          </div>
        </SectionShell>

        <SectionShell id="philosophy">
          <SectionHeading eyebrow="02. Engineering Philosophy" title="A small set of principles that keeps the work sharp." description="These pillars frame how I make decisions when code, product, and operations start pulling in different directions." />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">{philosophy.map((item) => <GlassCard key={item.title} className="p-6"><p className="text-lg font-medium tracking-[-0.02em] text-white">{item.title}</p><p className="mt-3 text-sm leading-7 text-slate-300/85">{item.description}</p></GlassCard>)}</div>
        </SectionShell>

        <SectionShell id="skills">
          <SectionHeading eyebrow="03. Skills" title="Categorized by discipline, not dumped into one wall of tags." description="The site uses tabs to group skills into frontend, backend, data, AI/ML, cloud, and DevOps, making the profile easier to scan and more credible." />
          <div className="mt-8 grid gap-6 lg:grid-cols-[0.34fr_0.66fr]">
            <GlassCard className="p-4">
              <div className="grid gap-2">
                {skillCategories.map((category) => (
                  <button key={category.label} type="button" onClick={() => setSelectedSkillCategory(category.label)} className={`rounded-2xl px-4 py-3 text-left text-sm transition ${currentSkills.label === category.label ? "bg-white/10 text-white" : "text-slate-300/80 hover:bg-white/5 hover:text-white"}`}>
                    <span className={`mb-2 block h-1.5 rounded-full bg-linear-to-r ${category.accent}`} />
                    {category.label}
                  </button>
                ))}
              </div>
            </GlassCard>
            <GlassCard className="p-6">
              <div className="flex flex-wrap gap-2">{currentSkills.skills.map((skill) => <Pill key={skill}>{skill}</Pill>)}</div>
              <div className="mt-6 rounded-3xl border border-white/8 bg-black/20 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-300/60">Capability snapshot</p>
                <p className="mt-3 text-sm leading-7 text-slate-200/90">Frontend polish, backend orchestration, storage design, ML prototypes, and cloud delivery are all represented in one consistent visual system. Each category can also support an optional proficiency meter if you want to make strengths more explicit.</p>
              </div>
            </GlassCard>
          </div>
        </SectionShell>

        <SectionShell id="projects">
          <SectionHeading eyebrow="04. Featured Projects" title="Every project card carries the full anatomy." description="Each card exposes the problem, architecture, stack, challenges, impact, and links, which is the kind of detail that makes a portfolio feel senior instead of decorative." />
          <div className="mt-8 grid gap-6">{projectCards.map((project) => <ProjectCard key={project.name} project={project} />)}</div>
        </SectionShell>

        <SectionShell id="system-design">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <SectionHeading eyebrow="05. System Design Showcase" title="Architecture thinking, trade-offs, and scalability in one view." description="A recruiter or hiring manager can switch from design intent to trade-offs to growth strategy without leaving the page." />
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">{systemDesignTabs.map((tab) => <button key={tab.id} type="button" onClick={() => setSelectedDesignTab(tab.id)} className={`rounded-full px-4 py-2 text-sm transition ${activeDesignTab.id === tab.id ? "bg-white/10 text-white" : "border border-white/10 bg-white/5 text-slate-300/80 hover:bg-white/10 hover:text-white"}`}>{tab.label}</button>)}</div>
              <GlassCard className="p-6"><p className="text-xs uppercase tracking-[0.28em] text-slate-300/60">{activeDesignTab.title}</p><p className="mt-3 text-sm leading-7 text-slate-200/90">{activeDesignTab.content}</p></GlassCard>
              <DiagramFrame><ArchDiagram /></DiagramFrame>
            </div>
          </div>
        </SectionShell>

        <SectionShell id="ai-showcase">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <SectionHeading eyebrow="06. AI/ML Showcase" title="Model cards and pipelines, not just a logo and a buzzword." description="This section gives the portfolio a concrete machine learning story: training data, inference, metrics, and a working demo path." />
            <div className="space-y-4">
              {mlModels.map((model) => (
                <GlassCard key={model.name} className="p-5">
                  <p className="text-lg font-medium text-white">{model.name}</p>
                  <p className="mt-2 text-sm text-slate-300/80">Accuracy: {model.accuracy}</p>
                  <p className="text-sm text-slate-300/80">Dataset: {model.dataset}</p>
                  <a href={model.inference} target="_blank" rel="noreferrer" className="mt-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white transition hover:bg-white/10">Open inference demo</a>
                </GlassCard>
              ))}
              <DiagramFrame><MLPipeline /></DiagramFrame>
            </div>
          </div>
        </SectionShell>

        <SectionShell id="cloud-architecture">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeading eyebrow="07. Cloud Architecture" title="Service maps, delivery flow, and cost-aware deployment thinking." description="This area demonstrates how compute, storage, CI/CD, and edge delivery fit together in an engineer’s mental model." />
            <div className="space-y-4">
              <GlassCard className="p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-300/60">AWS services panel</p>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">{cloudServices.map((service) => <div key={service} className="rounded-2xl border border-white/10 bg-white/5 px-3 py-4 text-center text-sm text-slate-100/90">{service}</div>)}</div>
                <p className="mt-4 text-sm leading-7 text-slate-300/80">The best cloud section is usually a story about how requests move through the system, where state lives, and what gets optimized first.</p>
              </GlassCard>
              <DiagramFrame><CloudDiagram /></DiagramFrame>
            </div>
          </div>
        </SectionShell>

        <SectionShell id="certifications">
          <SectionHeading eyebrow="08. Certifications" title="Credential cards that feel like part of the system, not an afterthought." description="Each certificate card can show issuer, date, credential ID, and a verification link, which keeps the section recruiter-friendly." />
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">{certifications.map((cert) => (
            <GlassCard key={cert.credentialId} className="overflow-hidden p-4">
              <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                <Image src={cert.image} alt={cert.title} fill className="object-cover" />
              </div>
              <div className="mt-4 space-y-2">
                <p className="text-base font-medium text-white">{cert.title}</p>
                <p className="text-sm text-slate-300/80">{cert.issuer}</p>
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">{cert.date} · {cert.credentialId}</p>
              </div>
            </GlassCard>
          ))}</div>
        </SectionShell>

        <SectionShell id="writing">
          <SectionHeading eyebrow="09. Technical Writing" title="Articles and blog previews that prove you can explain what you build." description="Writing cards reinforce that the portfolio is not just about output, but also about clarity and communication." />
          <div className="mt-8 grid gap-6 lg:grid-cols-3">{writings.map((post) => (
            <GlassCard key={post.title} className="p-6">
              <p className="text-lg font-medium text-white">{post.title}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs uppercase tracking-[0.18em] text-slate-300/70"><span>{post.platform}</span><span>{post.readTime}</span></div>
              <div className="mt-4 flex flex-wrap gap-2">{post.tags.map((tag) => <Pill key={tag}>{tag}</Pill>)}</div>
              <a href="#contact" className="mt-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white transition hover:bg-white/10">Read more</a>
            </GlassCard>
          ))}</div>
        </SectionShell>

        <SectionShell id="experience">
          <SectionHeading eyebrow="10. Experience" title="A timeline that focuses on contributions and outcomes." description="Each milestone should read like a contribution summary, with enough specificity to show engineering judgment and momentum." />
          <div className="mt-8 space-y-4">{experience.map((item, index) => (
            <GlassCard key={`${item.role}-${index}`} className="p-6">
              <div className="grid gap-4 lg:grid-cols-[0.35fr_0.65fr]">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-300/60">{item.dates}</p>
                  <p className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-white">{item.role}</p>
                  <p className="mt-1 text-sm text-slate-300/80">{item.org}</p>
                </div>
                <ul className="space-y-2 text-sm leading-7 text-slate-200/90">{item.bullets.map((bullet) => <li key={bullet}>• {bullet}</li>)}</ul>
              </div>
            </GlassCard>
          ))}</div>
        </SectionShell>

        <SectionShell id="contact">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeading eyebrow="11. Contact" title="A final CTA with form, social links, and availability." description="The contact area closes the loop: it lets people reach you directly and keeps the call to action visible to recruiters and collaborators." />
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-xs tracking-[0.18em] text-emerald-100">Open to opportunities</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-[0.18em] text-slate-200/90">Available for freelance and full-time roles</span>
              </div>
              <ContactForm />
              <GlassCard className="p-5"><div className="flex flex-wrap gap-3">{socials.map((social) => <a key={social.label} href={social.href} target={social.href.startsWith("mailto:") ? "_self" : "_blank"} rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100/90 transition hover:border-cyan-400/40 hover:bg-white/10">{social.label}</a>)}</div></GlassCard>
            </div>
          </div>
        </SectionShell>
      </main>

      {!reducedMotion ? <div aria-hidden className="pointer-events-none fixed inset-0 opacity-20 [background:radial-gradient(circle_at_center,transparent_0,transparent_58%,rgba(255,255,255,0.03)_100%)]" /> : null}
    </div>
  );
}