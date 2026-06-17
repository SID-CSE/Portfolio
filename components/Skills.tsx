"use client";

import { useState, useMemo } from "react";
import { skillCategories } from "@/data/portfolio";
import { motion, AnimatePresence } from "framer-motion";
import { FaBolt, FaCodeBranch, FaLayerGroup } from "react-icons/fa";

function SkillCard({
  label,
  skills,
  accent,
  isActive,
  onClick,
}: {
  label: string;
  skills: string[];
  accent: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      className={`group relative overflow-hidden rounded-2xl px-6 py-4 text-left transition-all duration-300 ${
        isActive
          ? "bg-white/10 shadow-xl shadow-cyan-500/20"
          : "bg-white/5 hover:bg-white/8"
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative z-10">
        <div className={`mb-2 h-1 w-8 rounded-full bg-gradient-to-r ${accent} transition-all duration-300 ${isActive ? "w-12" : ""}`} />
        <p className="text-sm font-semibold text-white">{label}</p>
        <p className={`mt-1 text-xs transition-all duration-300 ${isActive ? "text-cyan-300" : "text-slate-400"}`}>
          {skills.length} skills
        </p>
      </div>
      {isActive && (
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent" />
      )}
    </motion.button>
  );
}

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState(skillCategories[0].label);
  const currentCategory = useMemo(
    () => skillCategories.find((cat) => cat.label === selectedCategory) || skillCategories[0],
    [selectedCategory]
  );

  return (
    <section id="skills" className="section-shell mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="space-y-12"
      >
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">
            Technical Expertise
          </h2>
          <p className="max-w-2xl text-base leading-7 text-slate-300/85">
            Full-stack capabilities across frontend, backend, data science, cloud infrastructure, and AI/ML systems.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {skillCategories.map((category) => (
            <SkillCard
              key={category.label}
              label={category.label}
              skills={category.skills}
              accent={category.accent}
              isActive={selectedCategory === category.label}
              onClick={() => setSelectedCategory(category.label)}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${currentCategory.accent}`} />
              <div>
                <h3 className="text-2xl font-semibold text-white">{currentCategory.label}</h3>
                <p className="mt-1 text-sm text-slate-400">
                  {currentCategory.skills.length} technologies and tools
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {currentCategory.skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className="group relative overflow-hidden rounded-xl bg-white/5 p-4 backdrop-blur-sm transition hover:bg-white/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                  <div className="relative z-10">
                    <p className="font-medium text-white">{skill}</p>
                    <div className={`mt-2 h-0.5 w-0 rounded-full bg-gradient-to-r ${currentCategory.accent} transition-all duration-300 group-hover:w-8`} />
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className={`overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent p-6`}
            >
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.12em] text-slate-400">Expertise Level</p>
                <p className="text-base leading-relaxed text-slate-200">
                  {currentCategory.label === "Frontend"
                    ? "Production-grade React applications with modern state management, component patterns, and responsive design at scale."
                    : currentCategory.label === "Backend"
                    ? "High-performance APIs, microservices, authentication systems, and reliable data processing pipelines."
                    : currentCategory.label === "Databases"
                    ? "Relational database design, optimization, scaling strategies, and data integrity patterns."
                    : currentCategory.label === "AI / ML"
                    ? "End-to-end machine learning pipelines, model training, evaluation, and deployment at production scale."
                    : currentCategory.label === "Cloud & DevOps"
                    ? "Cloud infrastructure automation, CI/CD pipelines, containerization, and operational excellence."
                    : "Security-first reconnaissance, automated testing, vulnerability assessment, and ethical hacking practices."}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.45 }}
          className="grid gap-4 md:grid-cols-3"
        >
          {[
            {
              count: "6",
              label: "Skill Categories",
              icon: FaLayerGroup,
            },
            {
              count: "50+",
              label: "Technologies Mastered",
              icon: FaBolt,
            },
            {
              count: "Full Stack",
              label: "End-to-End Capability",
              icon: FaCodeBranch,
            },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              whileHover={{ scale: 1.05, borderColor: "rgba(34, 211, 238, 0.4)" }}
            >
              <stat.icon className="text-2xl text-cyan-300" />
              <p className="mt-3 text-2xl font-bold text-white">{stat.count}</p>
              <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
