"use client";

import { motion } from "motion/react";

const tech = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Python",
  "FastAPI",
  "Tailwind CSS",
  "Responsive Web Design",
  "Debugging & Optimization",
  "Technical Documentation",
];

export default function TechMarquee() {
  return (
    <section className="relative border-y border-line-soft bg-surface/40 py-6">
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
        {tech.map((t, i) => (
          <motion.span
            key={t}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="font-mono text-sm text-soft transition-colors hover:text-foreground"
          >
            {t}
          </motion.span>
        ))}
      </div>
    </section>
  );
}