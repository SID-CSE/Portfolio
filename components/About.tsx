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
            </div>
          </div>

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
                <p className="text-5xl font-semibold tracking-normal text-white">SK</p>
              </div>
            )}
          </GlassCard>
        </div>

        <GlassCard className="p-8">
          <div className="space-y-4">
            <p className="eyebrow">
              Professional Background
            </p>
            <p className="text-lg leading-8 text-slate-100/90">
              {aboutContent.mainBio}
            </p>
          </div>
        </GlassCard>


        <GlassCard className="p-8">
          <div className="space-y-4">
            <p className="eyebrow">
              Vision & Goals
            </p>
            <p className="text-base leading-8 text-slate-100/90">
              {aboutContent.vision}
            </p>
          </div>
        </GlassCard>

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
