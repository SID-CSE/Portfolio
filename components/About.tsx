"use client";

import Image from "next/image";
import { aboutContent } from "@/data/portfolio";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

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

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="chip">
      {children}
    </span>
  );
}

function AboutDisclosure({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <GlassCard className="overflow-hidden p-0">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left transition hover:bg-white/[0.04] sm:px-5"
      >
        <span className="eyebrow">{title}</span>
        <span className="text-xl leading-none text-cyan-300" aria-hidden="true">
          {open ? "−" : "+"}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="border-t border-white/8 px-4 pb-4 pt-3 sm:px-5 sm:pb-5">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </GlassCard>
  );
}

export default function AboutSection() {
  const photoAvailable = aboutContent.photoUrl !== "REPLACE_WITH_CLOUDINARY_URL";

  return (
    <section id="about" className="section-shell mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="space-y-8 sm:space-y-12"
      >
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="eyebrow">
                About Me
              </p>
              <h2 className="section-title">
                {aboutContent.heroHeadline}
              </h2>
              <p className="body-copy max-w-2xl">
                {aboutContent.heroDescription}
              </p>
              <div className="space-y-2 pt-2">
                <AboutDisclosure title="Professional Background">
                  <p className="text-sm leading-7 text-slate-100/90">
                    {aboutContent.mainBio}
                  </p>
                </AboutDisclosure>
                <AboutDisclosure title="Vision & Goals">
                  <p className="text-sm leading-7 text-slate-100/90">
                    {aboutContent.vision}
                  </p>
                </AboutDisclosure>
              </div>
            </div>
          </div>

          <GlassCard className="overflow-hidden p-0">
            {photoAvailable ? (
              <div className="relative aspect-square overflow-hidden bg-black/20">
                <Image
                  src={aboutContent.photoUrl}
                  alt="Siddharth Kumar"
                  fill
                  sizes="(max-width: 1023px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
              </div>
            ) : (
              <div className="aspect-square flex flex-col items-center justify-center bg-black/20 p-8">
                <p className="text-5xl font-semibold tracking-normal text-white">SK</p>
              </div>
            )}
          </GlassCard>
        </div>

        <div className="space-y-4">
          <p className="eyebrow">
            Specializations
          </p>
          <div className="flex flex-wrap gap-3">
            {aboutContent.specializations.map((spec) => (
              <Pill key={spec}>{spec}</Pill>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <p className="eyebrow">
            Core Skills
          </p>
          <div className="flex flex-wrap gap-3">
            {aboutContent.coreSkills.map((skill) => (
              <Pill key={skill}>{skill}</Pill>
            ))}
          </div>
        </div>

        <GlassCard className="p-6">
          <div className="space-y-3">
            <p className="eyebrow">
              Current Focus
            </p>
            <p className="text-sm leading-7 text-slate-200/90">
              {aboutContent.currentFocus}
            </p>
          </div>
        </GlassCard>

        <div className="flex flex-wrap gap-3 pt-4">
          <a href="#projects" className="btn-primary">View My Projects</a>
          <a href="#experience" className="btn-secondary">See Experience</a>
          <a href="#certifications" className="btn-secondary">Certifications</a>
        </div>
      </motion.div>
    </section>
  );
}
