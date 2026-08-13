"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Download, GraduationCap, Mail, Sparkles } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/SocialIcons";

const stats = [
  { value: "4+", label: "Years of experience" },
  { value: "200+", label: "Students mentored" },
  { value: "6", label: "Certifications" },
  { value: "2", label: "Institutions taught at" },
];

export default function Hero() {
  return (
    <section className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6">
      <motion.div
        aria-hidden
        className="glow-indigo pointer-events-none absolute -top-32 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full blur-[120px]"
        animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="glow-fuchsia pointer-events-none absolute right-[-120px] top-1/3 h-[360px] w-[360px] rounded-full blur-[110px]"
        animate={{ opacity: [1, 0.5, 1], y: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="tint-emerald mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm"
      >
        <Sparkles className="h-4 w-4" />
        Available for freelance work
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="relative mb-8"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div
            aria-hidden
            className="glow-indigo absolute inset-0 -z-10 scale-150 rounded-full blur-3xl"
          />
          <div className="rounded-full bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-rose-400 p-1 shadow-xl shadow-indigo-500/30">
            <Image
              src="/profile_pic.jpeg"
              alt="Kingsley Nyoyoko"
              width={176}
              height={176}
              priority
              className="h-44 w-44 rounded-full object-cover"
            />
          </div>
        </motion.div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-5xl font-bold tracking-tight sm:text-7xl"
      >
        Hi, I&apos;m <span className="text-gradient">Kingsley Nyoyoko</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="mt-5 text-2xl font-medium text-strong sm:text-3xl"
      >
        <span className="text-gradient font-semibold">Software Engineer</span>
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.32 }}
        className="tint-emerald mt-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium"
      >
        <GraduationCap className="h-4 w-4" />
        Lecturer · National Open University of Nigeria
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mt-6 max-w-2xl text-lg text-muted"
      >
        I build user-friendly, responsive websites and web applications using
        TypeScript, Next.js, Python and FastAPI — turning designs into interactive
        interfaces that solve real-world problems with clean, efficient code.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.55 }}
        className="mt-10 flex flex-col gap-4 sm:flex-row"
      >
        <Link
          href="/projects"
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-8 py-3.5 font-medium text-white shadow-lg shadow-indigo-500/30 transition-all hover:shadow-xl hover:shadow-fuchsia-500/30 hover:brightness-110"
        >
          View my work
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-surface px-8 py-3.5 font-medium text-strong backdrop-blur transition-all hover:border-line-strong hover:bg-surface-strong hover:text-foreground"
        >
          <Mail className="h-4 w-4" />
          Get in touch
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="mt-10 flex items-center gap-4"
      >
        {[
          { href: "https://github.com", Icon: GitHubIcon, label: "GitHub" },
          { href: "https://linkedin.com", Icon: LinkedInIcon, label: "LinkedIn" },
        ].map(({ href, Icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-surface text-muted ring-1 ring-line transition-all hover:-translate-y-1 hover:bg-surface-strong hover:text-foreground hover:ring-line-strong"
          >
            <Icon className="h-5 w-5" />
          </a>
        ))}
        <a
          href="/resume.pdf"
          className="inline-flex items-center gap-2 rounded-full bg-surface px-5 py-2.5 text-sm text-muted ring-1 ring-line transition-all hover:-translate-y-1 hover:bg-surface-strong hover:text-foreground"
        >
          <Download className="h-4 w-4" />
          Resume
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.95 }}
        className="mt-16 grid w-full max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4"
      >
        {stats.map((s) => (
          <div
            key={s.label}
            className="glass-card rounded-2xl p-5 transition-transform hover:-translate-y-1"
          >
            <p className="text-gradient text-3xl font-bold">{s.value}</p>
            <p className="mt-1 text-xs text-soft">{s.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}