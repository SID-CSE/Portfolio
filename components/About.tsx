"use client";

import Image from "next/image";
import { aboutContent } from "@/data/portfolio";
import { motion } from "framer-motion";

function GlassCard({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`glass-card rounded-3xl ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-[0.08em] text-slate-100/90">
      {children}
    </span>
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
        className="space-y-12"
      >
        {/* Hero Section */}
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.32em] text-slate-300/60">
                About Me
              </p>
              <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                {aboutContent.heroHeadline}
              </h2>
              <p className="max-w-2xl text-base leading-7 text-slate-300/85 sm:text-lg">
                {aboutContent.heroDescription}
              </p>
            </div>
          </div>

          {/* Photo Area */}
          <GlassCard className="overflow-hidden p-0">
            {photoAvailable ? (
              <div className="relative aspect-square overflow-hidden bg-black/20">
                <Image
                  src={aboutContent.photoUrl}
                  alt="Siddharth Kumar"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            ) : (
              <div className="aspect-square flex flex-col items-center justify-center bg-black/20 p-8">
                <div className="text-center space-y-4">
                  <p className="text-sm text-slate-300/70">
                    Photo Placeholder
                  </p>
                  <p className="text-xs text-slate-400/60 leading-relaxed">
                    To add your photo:
                  </p>
                  <ol className="text-xs text-slate-400/60 space-y-2 text-left">
                    <li>1. Upload image to Cloudinary</li>
                    <li>2. Copy the image URL</li>
                    <li>3. Update photoUrl in data/portfolio.ts</li>
                  </ol>
                </div>
              </div>
            )}
          </GlassCard>
        </div>

        {/* Main Bio */}
        <GlassCard className="p-8">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-300/60">
              Professional Background
            </p>
            <p className="text-lg leading-8 text-slate-100/90">
              {aboutContent.mainBio}
            </p>
          </div>
        </GlassCard>

        {/* Journey & Experience */}
        <div className="grid gap-6 lg:grid-cols-2">
          <GlassCard className="p-6">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-300/60">
                Academic Journey
              </p>
              <p className="text-sm leading-7 text-slate-200/90">
                {aboutContent.journeyDescription}
              </p>
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-300/60">
                Achievements & Certifications
              </p>
              <p className="text-sm leading-7 text-slate-200/90">
                {aboutContent.achievements}
              </p>
            </div>
          </GlassCard>
        </div>

        {/* Vision & Goals */}
        <GlassCard className="p-8">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-300/60">
              Vision & Goals
            </p>
            <p className="text-base leading-8 text-slate-100/90">
              {aboutContent.vision}
            </p>
          </div>
        </GlassCard>

        {/* Specializations */}
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.28em] text-slate-300/60">
            Specializations
          </p>
          <div className="flex flex-wrap gap-3">
            {aboutContent.specializations.map((spec) => (
              <Pill key={spec}>{spec}</Pill>
            ))}
          </div>
        </div>

        {/* Core Skills */}
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.28em] text-slate-300/60">
            Core Skills
          </p>
          <div className="flex flex-wrap gap-3">
            {aboutContent.coreSkills.map((skill) => (
              <Pill key={skill}>{skill}</Pill>
            ))}
          </div>
        </div>

        {/* Current Focus */}
        <GlassCard className="p-6">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-300/60">
              Current Focus
            </p>
            <p className="text-sm leading-7 text-slate-200/90">
              {aboutContent.currentFocus}
            </p>
          </div>
        </GlassCard>

        {/* CTA */}
        <div className="flex flex-wrap gap-3 pt-4">
          <a
            href="#projects"
            className="rounded-full bg-linear-to-r from-indigo-500 via-cyan-400 to-fuchsia-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 transition hover:scale-[1.01]"
          >
            View My Projects
          </a>
          <a
            href="#experience"
            className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:border-cyan-400/40 hover:bg-white/10"
          >
            See Experience
          </a>
          <a
            href="#certifications"
            className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:border-cyan-400/40 hover:bg-white/10"
          >
            Certifications
          </a>
        </div>
      </motion.div>
    </section>
  );
}
