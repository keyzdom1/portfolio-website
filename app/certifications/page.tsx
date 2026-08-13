import type { Metadata } from "next";
import { Award, BadgeCheck, Calendar, MapPin, Trophy } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    "Certifications earned by Kingsley Nyoyoko - web development, AI, and project management credentials.",
};

const certifications = [
  {
    title: "Responsive Web Design",
    issuer: "FreeCodeCamp",
    date: "2024 - 2025",
    id: "FCC-RWD-001",
    Icon: Award,
    accent: "from-amber-400 to-orange-500",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "FreeCodeCamp",
    date: "2024 - 2025",
    id: "FCC-JS-002",
    Icon: Trophy,
    accent: "from-sky-400 to-indigo-500",
  },
  {
    title: "AI Essentials",
    issuer: "ALX",
    date: "2025",
    id: "ALX-AI-003",
    Icon: BadgeCheck,
    accent: "from-indigo-400 to-violet-500",
  },
  {
    title: "Professional Foundations",
    issuer: "ALX",
    date: "2025",
    id: "ALX-PF-004",
    Icon: BadgeCheck,
    accent: "from-emerald-400 to-teal-500",
  },
  {
    title: "Virtual Assistant",
    issuer: "ALX",
    date: "2025",
    id: "ALX-VA-005",
    Icon: Award,
    accent: "from-violet-400 to-fuchsia-500",
  },
  {
    title: "Project Management (Short Course)",
    issuer: "HP",
    date: "2025",
    id: "HP-PM-006",
    Icon: Trophy,
    accent: "from-fuchsia-400 to-rose-500",
  },
];

export default function CertificationsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <SectionHeading
        eyebrow="Certifications"
        title="Credentials & recognition"
        subtitle="Proof that I keep my skills sharp - everything here is backed by official certification."
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {certifications.map((cert, i) => (
          <Reveal key={cert.id} delay={(i % 2) * 0.1}>
            <article className="glass-card group relative flex h-full flex-col overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-line-strong hover:shadow-xl hover:shadow-indigo-500/10">
              <div
                aria-hidden
                className={`absolute -top-14 -right-14 h-36 w-36 rounded-full bg-gradient-to-br ${cert.accent} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25`}
              />

              <div className="flex items-start justify-between gap-4">
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${cert.accent} shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}
                >
                  <cert.Icon className="h-7 w-7 text-white" />
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-surface px-3 py-1 text-xs text-soft ring-1 ring-line">
                  <Calendar className="h-3 w-3" />
                  {cert.date}
                </span>
              </div>

              <h2 className="mt-5 text-lg font-bold leading-snug">{cert.title}</h2>
              <p className="mt-1.5 flex items-center gap-1.5 text-sm text-muted">
                <MapPin className="h-3.5 w-3.5" />
                {cert.issuer}
              </p>

              <div className="mt-5 flex items-end justify-between border-t border-line-soft pt-4">
                <span className="font-mono text-xs text-faint">ID: {cert.id}</span>
                <button
                  type="button"
                  className="tint-indigo rounded-full border px-4 py-1.5 text-xs font-medium transition-all hover:brightness-110"
                >
                  Verify
                </button>
              </div>
            </article>
          </Reveal>
        ))}

        <Reveal delay={0.1} className="sm:col-span-2">
          <div className="glass-card flex flex-col items-center justify-between gap-4 rounded-2xl p-6 sm:flex-row">
            <div className="text-center sm:text-left">
              <h2 className="text-lg font-bold">Want to see the full credential list?</h2>
              <p className="mt-1 text-sm text-muted">
                Connect with me on LinkedIn for complete verification history.
              </p>
            </div>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-6 py-2.5 text-sm font-medium text-white shadow-lg shadow-indigo-500/30 transition-all hover:shadow-fuchsia-500/30 hover:brightness-110"
            >
              View on LinkedIn
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}