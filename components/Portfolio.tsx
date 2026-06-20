"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ClickableImage from "@/components/ClickableImage";
import AboutSection from "@/components/About";
import SkillsSection from "@/components/Skills";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FaDownload, FaEye, FaShareAlt } from "react-icons/fa";
import {
  certifications,
  experience,
  heroFocusAreas,
  heroRoles,
  heroStats,
  navigationItems,
  projectCards,
  socials,
} from "@/data/portfolio";

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const CLOUDINARY_RESUME_URL = "https://res.cloudinary.com/dn37tck9g/raw/upload/Siddharth_Kumar_Resume_zi82vf.docx";
const RESUME_FILE_NAME = "Siddharth-Kumar-Resume.docx";
const RESUME_VIEW_URL = `https://view.officeapps.live.com/op/view.aspx?src=${encodeURIComponent(CLOUDINARY_RESUME_URL)}`;
const resumeMenuItems = [
  { label: "View Resume", icon: FaEye, action: "view" },
  { label: "Share Resume", icon: FaShareAlt, action: "share" },
  { label: "Download Resume", icon: FaDownload, action: "download" },
] as const;

function GlassCard({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`glass-card ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="max-w-3xl space-y-3">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      <p className="body-copy max-w-2xl">{description}</p>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return <span className="chip">{children}</span>;
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <GlassCard className="p-5">
      <p className="text-3xl font-semibold tracking-normal text-white">{value}</p>
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

function ResumeMenu({
  align = "right",
  onViewResume,
  onDownloadResume,
  onShareResume,
}: {
  align?: "left" | "right";
  onViewResume: () => void;
  onDownloadResume: () => void;
  onShareResume: () => void;
}) {
  const handlers = {
    view: onViewResume,
    share: onShareResume,
    download: onDownloadResume,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      className={`absolute ${align === "right" ? "right-0" : "left-0"} z-50 mt-2 w-52 overflow-hidden rounded-lg border border-white/10 bg-slate-900/95 shadow-2xl shadow-black/40 backdrop-blur-xl`}
    >
      {resumeMenuItems.map((item, index) => {
        const Icon = item.icon;

        return (
          <button
            key={item.action}
            type="button"
            onClick={handlers[item.action]}
            className={`flex w-full items-center gap-3 px-4 py-3 text-left text-sm text-white transition hover:bg-white/10 ${index < resumeMenuItems.length - 1 ? "border-b border-white/8" : ""}`}
          >
            <Icon className="text-cyan-300" />
            {item.label}
          </button>
        );
      })}
    </motion.div>
  );
}

function NavBar({ active, resumeMenuOpen, onResumeClick, onViewResume, onDownloadResume, onShareResume }: { active: string; resumeMenuOpen: boolean; onResumeClick: () => void; onViewResume: () => void; onDownloadResume: () => void; onShareResume: () => void }) {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 hidden border-b border-white/8 bg-[#050816]/85 backdrop-blur-xl lg:block">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-slate-300/60">Siddharth Kumar</p>
            <p className="mt-1 text-sm text-slate-100/90">Full Stack · AI/ML · Cloud Engineer</p>
          </div>
          <div className="flex flex-wrap items-center justify-end gap-2">
            {navigationItems.slice(0, 6).map((item) => (
              <motion.a key={item.href} href={item.href} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className={`btn-sm-secondary ${active === item.href.slice(1) ? "btn-sm-secondary-active" : ""}`} aria-current={active === item.href.slice(1) ? "page" : undefined}>
                {item.label}
              </motion.a>
            ))}
            <div className="relative">
              <button
                type="button"
                onClick={onResumeClick}
                className="btn-sm-secondary border-cyan-400/30 bg-cyan-400/10"
                aria-expanded={resumeMenuOpen}
              >
                Resume
              </button>
              <AnimatePresence>
                {resumeMenuOpen && <ResumeMenu onViewResume={onViewResume} onDownloadResume={onDownloadResume} onShareResume={onShareResume} />}
              </AnimatePresence>
            </div>
          </div>
        </nav>
      </header>

      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-[#050816]/85 px-3 py-3 backdrop-blur-xl lg:hidden" aria-label="Primary navigation">
        <div className="mx-auto grid max-w-7xl grid-cols-4 gap-2 sm:grid-cols-6">
          {navigationItems.slice(0, 12).map((item) => (
            <motion.a key={item.href} href={item.href} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className={`btn-sm-secondary px-2 py-2 text-center text-[10px] ${active === item.href.slice(1) ? "btn-sm-secondary-active" : "text-slate-300/70"}`} aria-current={active === item.href.slice(1) ? "page" : undefined}>
              {item.label}
            </motion.a>
          ))}
        </div>
      </nav>
    </>
  );
}

function DiagramFrame({ children }: { children: React.ReactNode }) {
  return <div className="glass-card overflow-hidden p-4">{children}</div>;
}


function ProjectCard({ project, projectIndex, onSelectImage }: { project: (typeof projectCards)[number]; projectIndex: number; onSelectImage: (projectIndex: number) => void }) {
  const [open, setOpen] = useState(false);

  return (

    <GlassCard className="overflow-hidden p-6 transition hover:-translate-y-1">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-300/60">Featured Project</p>
            <h3 className="text-2xl font-semibold tracking-normal text-white">{project.name}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <a className="btn-sm-secondary" href={project.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="btn-sm-secondary" href={project.links.live} target="_blank" rel="noreferrer">
              Live / Demo
            </a>
          </div>
        </div>
        <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-4">
            <div className="soft-panel">
              <p className="eyebrow">Problem</p>
              <p className="mt-2 text-sm leading-7 text-slate-200/90">{project.problem}</p>
            </div>
            <div className="soft-panel">
              <p className="eyebrow">Architecture</p>
              <p className="mt-2 text-sm leading-7 text-slate-200/90">{project.architecture}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((stack) => <Pill key={stack}>{stack}</Pill>)}
            </div>
          </div>
          <DiagramFrame>
            {project.image ? (
                <ClickableImage
                  src={project.image}
                  alt={`${project.name} Architecture`}
                  onClick={() => onSelectImage(projectIndex)}
                />
            ) : (
              <div className="flex items-center justify-center p-4">
                <p className="text-slate-400">No architecture diagram available.</p>
              </div>
            )}
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
          <button type="button" onClick={() => setOpen((value) => !value)} className="btn-sm-secondary">
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
                    {project.challenges.map((challenge) => <li key={challenge}>- {challenge}</li>)}
                  </ul>
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
  const [state, setState] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setState("sending");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: String(formData.get("name") ?? ""),
          email: String(formData.get("email") ?? ""),
          message: String(formData.get("message") ?? ""),
          website: String(formData.get("website") ?? ""),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Failed to send message"
        );
      }

      setState("success");
      setStatusMessage(
        "Thank you for reaching out. Your message has been sent successfully."
      );

      form.reset();
    } catch (error) {
      setState("error");

      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Unable to send message right now. Please contact me directly via email."
      );
    }
  }

  return (
    <GlassCard className="p-6">
      <form
        className="grid gap-4"
        onSubmit={handleSubmit}
      >
        {/* Honeypot */}
        <input
          type="text"
          name="website"
          autoComplete="off"
          className="hidden"
          tabIndex={-1}
        />

        <div className="grid gap-4 md:grid-cols-2">
          <label className="grid gap-2 text-sm text-slate-200/85">
            Name

            <input
              name="name"
              required
              maxLength={100}
              disabled={state === "sending"}
              placeholder="Siddharth Kumar"
              className="form-field"
            />
          </label>

          <label className="grid gap-2 text-sm text-slate-200/85">
            Email

            <input
              name="email"
              type="email"
              required
              maxLength={100}
              disabled={state === "sending"}
              placeholder="recruiter@example.com"
              className="form-field"
            />
          </label>
        </div>

        <label className="grid gap-2 text-sm text-slate-200/85">
          Message

          <textarea
            name="message"
            rows={5}
            required
            maxLength={2000}
            disabled={state === "sending"}
            placeholder="Share details about the role, team, project, or hiring opportunity you'd like to discuss."
            className="form-field"
          />
        </label>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <button
            type="submit"
            disabled={state === "sending"}
            className="btn-primary"
          >
            {state === "sending"
              ? "Sending..."
              : "Send Message"}
          </button>

          {statusMessage && (
            <p
              className={`text-sm ${
                state === "error"
                  ? "text-rose-400"
                  : "text-emerald-400"
              }`}
            >
              {statusMessage}
            </p>
          )}
        </div>
      </form>
    </GlassCard>
  );
}

function FeedbackForm() {
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setState("sending");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "feedback",
          message: String(formData.get("feedback") ?? ""),
          website: String(formData.get("website") ?? ""),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send feedback");
      }

      setState("success");
      setStatusMessage("Feedback sent anonymously. Thank you.");
      form.reset();
    } catch (error) {
      setState("error");
      setStatusMessage(error instanceof Error ? error.message : "Unable to send feedback right now.");
    }
  }

  return (
    <GlassCard className="p-6">
      <form className="grid gap-4" onSubmit={handleSubmit}>
        <input type="text" name="website" autoComplete="off" className="hidden" tabIndex={-1} />

        <div className="space-y-2">
          <p className="eyebrow">Anonymous Feedback</p>
          <h3 className="text-xl font-semibold tracking-normal text-white">Help improve this portfolio.</h3>
          <p className="body-copy">Share quick feedback about design, content, speed, or accessibility. No name or email is collected.</p>
        </div>

        <label className="grid gap-2 text-sm text-slate-200/85">
          Feedback
          <textarea
            name="feedback"
            rows={4}
            required
            maxLength={1200}
            disabled={state === "sending"}
            placeholder="What should be improved?"
            className="form-field resize-y"
          />
        </label>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <button type="submit" disabled={state === "sending"} className="btn-secondary">
            {state === "sending" ? "Sending..." : "Send Anonymous Feedback"}
          </button>

          {statusMessage && (
            <p className={`text-sm ${state === "error" ? "text-rose-400" : "text-emerald-400"}`}>
              {statusMessage}
            </p>
          )}
        </div>
      </form>
    </GlassCard>
  );
}

export default function Portfolio() {
  const reducedMotion = useReducedMotion();
  const typewriter = useTypewriter(heroRoles);
  const [activeSection, setActiveSection] = useState("hero");
  const [navResumeMenuOpen, setNavResumeMenuOpen] = useState(false);
  const [heroResumeMenuOpen, setHeroResumeMenuOpen] = useState(false);
  const certificateRef = useRef<HTMLDivElement>(null);
  const [gallery, setGallery] = useState<string[]>([]);
  const [galleryTitles, setGalleryTitles] = useState<string[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [gallerySection, setGallerySection] = useState<"certifications" | "experience" | "projects" | null>(null);
  const [projectsExpanded, setProjectsExpanded] = useState(false);


  useEffect(() => {
  if (!certificateRef.current) return;

  const container = certificateRef.current;

  container.scrollLeft =
    (container.scrollWidth - container.clientWidth) / 2;
}, []);


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

  function viewResume() {
    window.open(RESUME_VIEW_URL, "_blank", "noopener,noreferrer");
    setNavResumeMenuOpen(false);
    setHeroResumeMenuOpen(false);
  }

  function openGallery(images: string[], index: number, section: "certifications" | "experience" | "projects", titles: string[] = []) {
  setGallery(images);
  setGalleryTitles(titles);
  setActiveIndex(index);
  setGallerySection(section);
  }

  function downloadResume() {
    const anchor = document.createElement("a");
    anchor.href = CLOUDINARY_RESUME_URL;
    anchor.download = RESUME_FILE_NAME;
    anchor.click();
    setNavResumeMenuOpen(false);
    setHeroResumeMenuOpen(false);
  }

  function shareResume() {
    if (navigator.share) {
      navigator.share({
        title: "Siddharth Kumar - Resume",
        text: "Check out my resume",
        url: CLOUDINARY_RESUME_URL,
      }).catch(() => undefined);
    } else {
      navigator.clipboard.writeText(CLOUDINARY_RESUME_URL);
    }
    setNavResumeMenuOpen(false);
    setHeroResumeMenuOpen(false);
  }

  function handleNavResumeClick() {
    setNavResumeMenuOpen((open) => !open);
    setHeroResumeMenuOpen(false);
  }

  function handleHeroResumeClick() {
    setHeroResumeMenuOpen((open) => !open);
    setNavResumeMenuOpen(false);
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-transparent text-white">
      <NavBar active={activeSection} resumeMenuOpen={navResumeMenuOpen} onResumeClick={handleNavResumeClick} onViewResume={viewResume} onDownloadResume={downloadResume} onShareResume={shareResume} />
      <main className="relative z-10 pb-12 pt-28 sm:pt-24 lg:pt-20">
        <SectionShell id="hero">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-[0.08em] text-slate-200/90">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Open to opportunities
              </div>
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.32em] text-slate-300/60">Full Stack, AI/ML & Cloud Engineer</p>
                <h1 className="max-w-4xl text-5xl font-semibold tracking-normal text-white sm:text-6xl lg:text-[5rem]">Siddharth Kumar</h1>
                <p className="text-2xl font-medium tracking-normal text-slate-100 sm:text-3xl">
                  {typewriter}
                  <span className="ml-1 inline-block h-7 w-2 align-middle bg-cyan-300/80" />
                </p>
                <p className="max-w-2xl text-base leading-7 text-slate-300/85 sm:text-lg">
                  Passionate about developing AI-powered applications, scalable web platforms, and cloud-based solutions. I enjoy transforming complex problems into intelligent products through software engineering, data-driven decision making, and modern development practices.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="#projects" className="btn-primary">Explore my Work</a>
                <div className="relative">
                  <button type="button" onClick={handleHeroResumeClick} className="btn-secondary" aria-expanded={heroResumeMenuOpen}>Resume</button>
                  <AnimatePresence>
                    {heroResumeMenuOpen && <ResumeMenu align="left" onViewResume={viewResume} onDownloadResume={downloadResume} onShareResume={shareResume} />}
                  </AnimatePresence>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">{heroFocusAreas.map((area) => <Pill key={area}>{area}</Pill>)}</div>
              <div className="grid gap-4 sm:grid-cols-3">{heroStats.map((stat) => <StatCard key={stat.label} value={stat.value} label={stat.label} />)}</div>

              <div className="flex flex-wrap gap-2 pt-2">
                {socials.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("mailto:") ? "_self" : "_blank"}
                    rel="noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    whileHover={{ scale: 1.05, translateY: -2 }}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300"
                  >
                    {social.label}
                  </motion.a>
                ))}
              </div>
            </div>

            <GlassCard className="relative overflow-hidden p-6 lg:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(129,140,248,0.2),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.14),transparent_28%)]" />
              <div className="relative space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-300/60">Focus areas</p>
                  <div className="mt-4 grid gap-3">{heroFocusAreas.map((item) => <div key={item} className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100/90">{item}</div>)}</div>
                </div>
              </div>
            </GlassCard>
          </div>
        </SectionShell>

        <motion.div
          className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <GlassCard className="overflow-hidden border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-fuchsia-500/10 p-6 lg:p-8">
            <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1">
                  <span className="h-2 w-2 rounded-full bg-cyan-400" />
                  <p className="text-xs font-medium uppercase tracking-[0.12em] text-cyan-300">Currently Seeking</p>
                </div>
                <h3 className="text-2xl font-semibold tracking-normal text-white sm:text-3xl">
                  Open to Opportunities
                </h3>
                <p className="max-w-2xl text-base leading-7 text-slate-200/90">
                  Software Engineering, AI/ML, Full-Stack Development, and Cloud Engineering roles
                </p>
                <p className="text-sm text-slate-300/70">
                  <span className="font-medium">Expected Graduation:</span> 2027
                </p>
              </div>
              <a href="#contact" className="btn-primary whitespace-nowrap">
                Let&apos;s Talk
              </a>
            </div>
          </GlassCard>
        </motion.div>

        <AboutSection />


        <SkillsSection />

        <SectionShell id="projects">
          <SectionHeading eyebrow="Featured Projects" title="Selected engineering work with clear outcomes." description="Production-minded projects spanning full-stack platforms, machine learning applications, and security automation." />
          <div className="mt-8 space-y-6">
            {projectCards.slice(0, 2).map((project, index) => (
              <ProjectCard
                key={project.name}
                project={project}
                projectIndex={index}
                onSelectImage={(projectIndex) =>
                  openGallery(
                    projectCards.map((p) => p.image),
                    projectIndex,
                    "projects",
                    projectCards.map((p) => p.name)
                  )
                }
              />
            ))}

            <AnimatePresence initial={false}>
              {projectsExpanded ? (
                <motion.div
                  id="additional-projects"
                  key="additional-projects"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="space-y-6">
                    {projectCards.slice(2).map((project, index) => (
                      <ProjectCard
                        key={project.name}
                        project={project}
                        projectIndex={index + 2}
                        onSelectImage={(projectIndex) =>
                          openGallery(
                            projectCards.map((p) => p.image),
                            projectIndex,
                            "projects",
                            projectCards.map((p) => p.name)
                          )
                        }
                      />
                    ))}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>

            {projectCards.length > 2 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex justify-center pt-4"
              >
                <button
                  type="button"
                  onClick={() => setProjectsExpanded(!projectsExpanded)}
                  className="btn-secondary"
                  aria-expanded={projectsExpanded}
                  aria-controls="additional-projects"
                >
                  {projectsExpanded
                    ? "Show Less Projects"
                    : `View More Projects (${projectCards.length - 2})`}
                </button>
              </motion.div>
            )}
          </div>
        </SectionShell>


        <SectionShell id="certifications">
          <SectionHeading eyebrow="Certifications" title="Verified learning across AI, ML, and data systems." description="A compact certificate gallery with issuers, dates, credential IDs, and quick image previews." />
          <motion.div
  ref={certificateRef}
  drag="x"
  dragConstraints={{ left: -2000, right: 0 }}
  dragElastic={0.05}
  className="
    mt-8
    flex
    gap-6
    overflow-x-auto
    scroll-smooth
    pb-4
    px-[30vw]
    no-scrollbar
  "
>
  {certifications.map((cert, index) => (
    <GlassCard
      key={cert.credentialId}
      className="
        min-w-[350px]
        max-w-[350px]
        flex-shrink-0
        overflow-hidden
        p-4
        snap-center
        cursor-pointer
        transition
        hover:scale-[1.02]
      "
      onClick={() =>
        openGallery(
          certifications.map((c) => c.image),
          index,
          "certifications",
          certifications.map((c) => c.title)
        )
      }
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10 bg-black/20">
        <Image
          src={cert.image}
          alt={cert.title}
          fill
          className="object-cover transition duration-300 hover:scale-105"
        />
      </div>

      <div className="mt-4 space-y-2">
        <p className="text-base font-medium text-white">
          {cert.title}
        </p>

        <p className="text-sm text-slate-300/80">
          {cert.issuer}
        </p>

        <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
          {cert.date} · {cert.credentialId}
        </p>
      </div>
    </GlassCard>
  ))}
</motion.div>
        </SectionShell>

        <SectionShell id="experience">
        <SectionHeading
          eyebrow="Experience"
          title="Experience focused on practical engineering delivery."
          description="Project, internship, and lab work summarized around contribution, ownership, and technical depth."
        />

        <div className="mt-8 space-y-4">
          {experience.map((item, index) => (
            <GlassCard key={`${item.role}-${index}`} className="p-6">
              <div className="grid gap-6 lg:grid-cols-[0.35fr_0.65fr]">
                
                {/* Left Side */}
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-300/60">
                    {item.dates}
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold tracking-normal text-white">
                    {item.role}
                  </h3>

                  <p className="mt-1 text-sm text-slate-300/80">
                    {item.org}
                  </p>

                  {item.project && (
                    <div className="mt-4">
                      <p className="text-xs uppercase tracking-wider text-cyan-400">
                        Project
                      </p>
                      <p className="mt-1 text-sm text-slate-200">
                        {item.project}
                      </p>
                    </div>
                  )}

                  {item.projects && (
                    <div className="mt-4">
                      <p className="text-xs uppercase tracking-wider text-cyan-400">
                        Key Projects
                      </p>

                      <div className="mt-2 flex flex-wrap gap-2">
                        {item.projects.map((project) => (
                          <span
                            key={project}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                          >
                            {project}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {item.certificate && (
                    <button
                      onClick={() =>
                        openGallery(
                          experience.filter((e) => e.certificate).map((e) => e.certificate!.image),
                          experience.slice(0, index).filter((e) => e.certificate).length,
                          "experience",
                          experience.filter((e) => e.certificate).map((e) => e.certificate!.title)
                        )
                      }
                      className="mt-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 transition hover:bg-cyan-500/20"
                    >
                      View Certificate ↗
                    </button>
                  )}
                </div>

                {/* Right Side */}
                <div>
                  <ul className="space-y-3">
                    {item.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-3 text-sm leading-7 text-slate-200/90"
                      >
                        <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </GlassCard>
          ))}
        </div>
      </SectionShell>

        <SectionShell id="contact">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeading eyebrow="Contact" title="Let's build something useful." description="Reach out for opportunities in full-stack development, AI/ML, cloud engineering, and more." />
            <div className="space-y-4">
              <ContactForm />
              <GlassCard className="p-5"><div className="flex flex-wrap gap-3">{socials.map((social) => <a key={social.label} href={social.href} target={social.href.startsWith("mailto:") ? "_self" : "_blank"} rel="noreferrer" className="btn-sm-secondary">{social.label}</a>)}</div></GlassCard>
            </div>
          </div>
        </SectionShell>
      </main>

      <AnimatePresence>
        {activeIndex !== null && gallerySection && (
          <motion.div
            className="fixed inset-0 z-[90] flex flex-col items-center justify-center bg-black/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setActiveIndex(null);
              setGallerySection(null);
            }}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex((prev) =>
                  prev !== null
                    ? prev > 0
                      ? prev - 1
                      : gallery.length - 1
                    : 0
                );
              }}
              className="absolute left-5 top-1/2 -translate-y-1/2 z-10 text-5xl text-white hover:text-cyan-300 transition"
            >
              ‹
            </button>

            <div className="flex flex-col items-center gap-4 max-w-4xl w-full">
              <div
                className="relative h-[75vh] w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={gallery[activeIndex]}
                  alt={galleryTitles[activeIndex] || "Image"}
                  fill
                  className="object-contain"
                />
              </div>

              {galleryTitles[activeIndex] && (
                <p className="text-center text-sm text-slate-200 max-w-2xl">
                  {galleryTitles[activeIndex]}
                </p>
              )}

              <p className="text-xs text-slate-400 mt-2">
                {activeIndex + 1} / {gallery.length}
              </p>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex((prev) =>
                  prev !== null
                    ? prev < gallery.length - 1
                      ? prev + 1
                      : 0
                    : 0
                );
              }}
              className="absolute right-5 top-1/2 -translate-y-1/2 z-10 text-5xl text-white hover:text-cyan-300 transition"
            >
              ›
            </button>

            <button
              onClick={() => {
                setActiveIndex(null);
                setGallerySection(null);
              }}
              className="absolute top-5 right-5 rounded-lg bg-white/10 px-4 py-2 text-white hover:bg-white/20 transition"
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {!reducedMotion ? <div aria-hidden className="pointer-events-none fixed inset-0 opacity-20 [background:radial-gradient(circle_at_center,transparent_0,transparent_58%,rgba(255,255,255,0.03)_100%)]" /> : null}
    </div>
  );
}
