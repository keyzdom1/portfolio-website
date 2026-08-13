import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Portfolio of Kingsley Nyoyoko, a software engineer building user-friendly, responsive web applications.",
};

const featured = [
  {
    title: "PulseBoard Analytics",
    description:
      "Real-time analytics dashboard with streaming charts, custom query builder, and team workspaces.",
    tags: ["Next.js", "TypeScript", "FastAPI"],
    gradient: "from-indigo-500 to-violet-500",
  },
  {
    title: "NimbusCloud Sync",
    description:
      "Cross-platform file synchronization tool with end-to-end encryption and conflict resolution.",
    tags: ["Python", "FastAPI", "React"],
    gradient: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Orbit Commerce",
    description:
      "Headless e-commerce platform with edge rendering, one-click checkout, and AI product search.",
    tags: ["Next.js", "TypeScript", "Python"],
    gradient: "from-fuchsia-500 to-rose-500",
  },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      <Hero />
      <TechMarquee />

      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <SectionHeading
          eyebrow="Featured Work"
          title="Projects that make an impact"
          subtitle="A hand-picked selection of things I've built recently. See the full gallery on the projects page."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.12}>
              <Link
                href="/projects"
                className="glass-card group flex h-full flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10"
              >
                <div
                  className={`mb-5 h-1.5 w-14 rounded-full bg-gradient-to-r ${p.gradient} transition-all duration-300 group-hover:w-24`}
                />
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted">{p.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-surface px-3 py-1 text-xs text-muted ring-1 ring-line"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="link-accent mt-6 inline-flex items-center gap-1 text-sm font-medium">
                  View details
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
