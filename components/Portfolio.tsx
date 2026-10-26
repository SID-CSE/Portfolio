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

type CertificateFilter = "All" | "NPTEL" | "Infosys Springboard" | "Oracle University" | "IBM SkillsBuild" | "HackerRank";

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const CLOUDINARY_RESUME_URL = "https://res.cloudinary.com/dn37tck9g/raw/upload/v1793040655/Siddharth_Kumar_Resume_New_gogqdz.docx";

const RESUME_FILE_NAME = "Siddharth_Kumar_Resume_New_gogqdz.docx";
const RESUME_VIEW_URL = `https://view.officeapps.live.com/op/view.aspx?src=${encodeURIComponent(CLOUDINARY_RESUME_URL)}&wdAr=1`;
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
    <GlassCard className="p-4 sm:p-5">
      <p className="text-2xl font-semibold tracking-normal text-white sm:text-3xl">{value}</p>
      <p className="mt-1 text-xs text-slate-300/80 sm:text-sm">{label}</p>
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
    <motion.section id={id} className="section-shell mx-auto w-full max-w-7xl min-w-0 px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20" variants={sectionVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.45, ease: "easeOut" }}>
      {children}
    </motion.section>
  );
}

const introStars = [
  { x: -86, y: -42, delay: 0.04 },
  { x: -58, y: 44, delay: 0.12 },
  { x: -20, y: -72, delay: 0.2 },
  { x: 18, y: 72, delay: 0.28 },
  { x: 56, y: -48, delay: 0.36 },
  { x: 88, y: 34, delay: 0.44 },
  { x: -96, y: 10, delay: 0.52 },
  { x: 96, y: -12, delay: 0.6 },
];

function IntroOverlay({ reducedMotion }: { reducedMotion: boolean | null }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reducedMotion ? 0.15 : 0.55, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#050816]"
      aria-label="Loading portfolio"
      role="status"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(129,140,248,0.2),transparent_38%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.12),transparent_28%)]" />
      <div className="relative flex flex-col items-center gap-6">
        <div className="relative h-32 w-32">
          <motion.div
            animate={reducedMotion ? undefined : { rotate: 360 }}
            transition={{ duration: 2.8, ease: "linear", repeat: Infinity }}
            className="absolute inset-0 rounded-full border border-cyan-300/20 border-t-cyan-300/80 border-r-indigo-400/70"
          />
          {introStars.map((star) => (
            <motion.span
              key={`${star.x}-${star.y}`}
              initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
              animate={reducedMotion ? { x: star.x, y: star.y, opacity: 0.8, scale: 1 } : { x: star.x, y: star.y, opacity: [0, 1, 0.65], scale: [0, 1.2, 0.8] }}
              transition={{ delay: reducedMotion ? 0 : star.delay, duration: reducedMotion ? 0.1 : 0.85, ease: "easeOut" }}
              className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full bg-cyan-200 shadow-[0_0_12px_rgba(103,232,249,0.9)]"
            />
          ))}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: reducedMotion ? 0.1 : 0.5, ease: "easeOut" }}
            className="absolute inset-4 flex items-center justify-center rounded-3xl border border-white/15 bg-white/10 text-3xl font-semibold tracking-[0.12em] text-white shadow-2xl shadow-indigo-950/40 backdrop-blur-xl"
          >
            SK
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reducedMotion ? 0 : 0.2, duration: reducedMotion ? 0.1 : 0.4 }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-slate-300/70">Siddharth Kumar</p>
          <p className="mt-2 text-sm text-cyan-200/80">Building what&apos;s next</p>
        </motion.div>
      </div>
    </motion.div>
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

      <nav className="mobile-nav fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-[#050816]/85 px-3 py-2 backdrop-blur-xl lg:hidden" aria-label="Primary navigation">
        <div className="mx-auto flex w-max min-w-full gap-2">
          {navigationItems.slice(0, 12).map((item) => (
            <motion.a key={item.href} href={item.href} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className={`btn-sm-secondary shrink-0 px-3 py-2 text-center text-[10px] ${active === item.href.slice(1) ? "btn-sm-secondary-active" : "text-slate-300/70"}`} aria-current={active === item.href.slice(1) ? "page" : undefined}>
              {item.label}
            </motion.a>
          ))}
        </div>
      </nav>
    </>
  );
}

function DiagramFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`glass-card w-full min-w-0 overflow-hidden p-3 sm:p-4 ${className}`}>
      {children}
    </div>
  );
}

function isCanvasCroppedDiagram(projectName: string) {
  return ["ActionFlow AI", "Game Arcade – Android Gaming & AI Assistant Platform", "Raspberry Pi-Based IoT Remote Farm Animal Monitoring System", "Arduino-Based IoT Wearable Health Monitoring System"].includes(projectName);
}

function ExpandableText({ text, className = "", maxLength = 220 }: { text: string; className?: string; maxLength?: number }) {
  const [expanded, setExpanded] = useState(false);
  const shouldCollapse = text.length > maxLength;

  if (!shouldCollapse) {
    return <p className={className}>{text}</p>;
  }

  return (
    <div className="space-y-2">
      <p className={className + (expanded ? "" : " line-clamp-4")}>{text}</p>
      <button
        type="button"
        onClick={() => setExpanded((value) => !value)}
        className="text-xs font-medium uppercase tracking-[0.12em] text-cyan-300 transition hover:text-cyan-200"
      >
        {expanded ? "Read less" : "Read more"}
      </button>
    </div>
  );
}

function ProjectCard({ project, projectIndex, onSelectImage }: { project: (typeof projectCards)[number]; projectIndex: number; onSelectImage: (projectIndex: number) => void }) {
  const [open, setOpen] = useState(false);

  return (

    <GlassCard className="overflow-hidden p-4 transition hover:-translate-y-1 sm:p-6">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-300/60">Featured Project</p>
            <h3 className="text-2xl font-semibold tracking-normal text-white">{project.name}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.links.github !== "#" && (
              <a className="btn-sm-secondary" href={project.links.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            )}
            {project.links.live !== "#" && (
              <a className="btn-sm-secondary" href={project.links.live} target="_blank" rel="noreferrer">
                Live / Demo
              </a>
            )}
          </div>
        </div>
        <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-3 sm:space-y-4">
            <div className="soft-panel">
              <p className="eyebrow">Problem</p>
              <div className="mt-2">
                <ExpandableText text={project.problem} className="text-sm leading-7 text-slate-200/90" maxLength={220} />
              </div>
            </div>
            <div className="soft-panel">
              <p className="eyebrow">Architecture</p>
              <div className="mt-2">
                <ExpandableText text={project.architecture} className="text-sm leading-7 text-slate-200/90" maxLength={180} />
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((stack) => <Pill key={stack}>{stack}</Pill>)}
            </div>
          </div>
          <DiagramFrame className={isCanvasCroppedDiagram(project.name) ? "aspect-[16/9]" : ""}>
            {project.image ? (
                <ClickableImage
                  src={project.image}
                  alt={`${project.name} Architecture`}
                  crop={isCanvasCroppedDiagram(project.name)}
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
              <div className="grid gap-4 border-t border-white/8 pt-4">
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-300/60">Engineering challenges</p>
                  <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200/90">
                    {project.challenges.map((challenge) => <li key={challenge} className="break-words">- {challenge}</li>)}
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
  const [certificateFilter, setCertificateFilter] = useState<CertificateFilter>("All");
  const [projectsExpanded, setProjectsExpanded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isIntroVisible, setIsIntroVisible] = useState(true);
  const scrollProgressClass = `scroll-progress-${Math.round(scrollProgress / 10) * 10}`;
  const visibleCertificates = certificateFilter === "All"
    ? certifications
    : certifications.filter((certificate) => certificate.issuer.includes(certificateFilter));
  const certificateFilters: CertificateFilter[] = ["All", "NPTEL", "Infosys Springboard", "Oracle University", "IBM SkillsBuild", "HackerRank"];
  const certificateCount = (filter: CertificateFilter) =>
    filter === "All"
      ? certifications.length
      : certifications.filter((certificate) => certificate.issuer.includes(filter)).length;

  useEffect(() => {
    const introDuration = reducedMotion ? 350 : 1250;
    const introTimeout = window.setTimeout(() => setIsIntroVisible(false), introDuration);

    return () => window.clearTimeout(introTimeout);
  }, [reducedMotion]);

  useEffect(() => {
    function updateScrollState() {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
      setScrollProgress(Math.min(progress, 100));
      setShowScrollTop(window.scrollY > 600);
    }

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  useEffect(() => {
    if (!certificateRef.current) return;

    const container = certificateRef.current;

    const centerCertificates = () => {
      const firstCard = container.querySelector(".certificate-card") as HTMLElement | null;
      if (!firstCard) return;

      const maxScrollLeft = Math.max(container.scrollWidth - container.clientWidth, 0);
      const cardWidth = firstCard.offsetWidth;
      const preferredOffset = Math.max((container.clientWidth - cardWidth) / 2, 0);

      container.scrollLeft = Math.min(preferredOffset, maxScrollLeft);
    };

    centerCertificates();

    const resizeObserver = new ResizeObserver(centerCertificates);
    resizeObserver.observe(container);
    window.addEventListener("resize", centerCertificates);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", centerCertificates);
    };
  }, [certificateFilter]);


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
      <AnimatePresence>
        {isIntroVisible && <IntroOverlay reducedMotion={reducedMotion} />}
      </AnimatePresence>

      <NavBar active={activeSection} resumeMenuOpen={navResumeMenuOpen} onResumeClick={handleNavResumeClick} onViewResume={viewResume} onDownloadResume={downloadResume} onShareResume={shareResume} />
      <main className="relative z-10 min-w-0 pb-8 pt-20 sm:pb-12 sm:pt-24 lg:pt-20">
        <SectionShell id="hero">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-[0.08em] text-slate-200/90">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Open to opportunities
              </div>
              <div className="space-y-3">
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
            </div>

            <GlassCard className="relative mt-2 overflow-hidden p-4 sm:p-6 lg:mt-20 lg:p-7">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(129,140,248,0.2),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.14),transparent_28%)]" />
              <div className="relative">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-300/60">Focus areas</p>
                  <div className="mt-3 grid gap-2">{heroFocusAreas.map((item) => <div key={item} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-slate-100/90">{item}</div>)}</div>
                </div>
              </div>
            </GlassCard>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {heroStats.map((stat) => <StatCard key={stat.label} value={stat.value} label={stat.label} />)}
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
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
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-100 transition hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300 sm:px-4 sm:text-sm"
              >
                {social.label}
              </motion.a>
            ))}
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
          <div className="flex flex-wrap items-end justify-between gap-3">
            <SectionHeading eyebrow="Certifications" title="Verified learning across AI, ML, and data systems." description="A compact certificate gallery with issuers, dates, credential IDs, and quick image previews." />
            <span className="chip whitespace-nowrap">
              {certifications.length} {certifications.length === 1 ? "certificate" : "certificates"}
            </span>
          </div>
          <div className="mt-6 flex flex-wrap gap-2" role="tablist" aria-label="Filter certificates by issuer">
            {certificateFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={certificateFilter === filter}
                onClick={() => setCertificateFilter(filter)}
                className={`btn-sm-secondary ${certificateFilter === filter ? "btn-sm-secondary-active" : ""}`}
              >
                {filter} ({certificateCount(filter)})
              </button>
            ))}
          </div>
          <div
            ref={certificateRef}
            className="certificate-track mt-8 flex gap-4 overflow-x-auto scroll-smooth pb-4 pl-2 pr-2 sm:gap-6 sm:pl-4 sm:pr-4 lg:pl-6 lg:pr-6 no-scrollbar"
          >
  {visibleCertificates.map((cert, index) => (
    <GlassCard
      key={`${cert.title}-${index}`}
      className="
        certificate-card
        flex-shrink-0
        overflow-hidden
        p-3
        snap-center
        cursor-pointer
        transition
        hover:scale-[1.02]
        sm:p-4
      "
      role="button"
      tabIndex={0}
      aria-label={`Open certificate preview for ${cert.title}`}
      onClick={() =>
        openGallery(
          visibleCertificates.map((c) => c.image),
          index,
          "certifications",
          visibleCertificates.map((c) => c.title)
        )
      }
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          event.currentTarget.click();
        }
      }}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10 bg-black/20">
        <Image
          src={cert.image}
          alt={cert.title}
          fill
          sizes="(max-width: 639px) calc(100vw - 2rem), 350px"
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
</div>
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

        <SkillsSection />

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
              className="absolute left-2 top-1/2 z-10 -translate-y-1/2 text-4xl text-white transition hover:text-cyan-300 sm:left-5 sm:text-5xl"
            >
              ‹
            </button>

            <div className="flex flex-col items-center gap-4 max-w-4xl w-full">
              <div
                className="relative h-[62vh] w-full sm:h-[75vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={gallery[activeIndex]}
                  alt={galleryTitles[activeIndex] || "Image"}
                  fill
                  sizes="(max-width: 1023px) 100vw, 896px"
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
              className="absolute right-2 top-1/2 z-10 -translate-y-1/2 text-4xl text-white transition hover:text-cyan-300 sm:right-5 sm:text-5xl"
            >
              ›
            </button>

            <button
              onClick={() => {
                setActiveIndex(null);
                setGallerySection(null);
              }}
              className="absolute right-3 top-3 rounded-lg bg-white/10 px-3 py-2 text-sm text-white transition hover:bg-white/20 sm:right-5 sm:top-5 sm:px-4"
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        aria-hidden="true"
        className={`scroll-progress-bar ${scrollProgressClass} pointer-events-none fixed inset-x-0 top-0 z-[70] h-0.5 origin-left bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-400`}
      />

      {showScrollTop && (
        <button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-5 right-5 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-400/15 text-lg text-cyan-50 shadow-lg shadow-cyan-950/30 transition hover:-translate-y-1 hover:bg-cyan-400/25 sm:bottom-8 sm:right-8"
        >
          ↑
        </button>
      )}

      {!reducedMotion ? <div aria-hidden className="pointer-events-none fixed inset-0 opacity-20 [background:radial-gradient(circle_at_center,transparent_0,transparent_58%,rgba(255,255,255,0.03)_100%)]" /> : null}
    </div>
  );
}
