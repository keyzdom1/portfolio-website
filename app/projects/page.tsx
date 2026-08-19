import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Folder, Star } from "lucide-react";
import { GitHubIcon } from "@/components/SocialIcons";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A selection of projects built by Kingsley Nyoyoko - web applications, tools, and teaching resources.",
};

const projects = [
  {
    title: "SkillMatch",
    description:
      "AI-powered internship matching platform — build your profile once and get ranked matches against real opportunities.",
    tags: ["Next.js", "TypeScript", "AI", "Tailwind CSS"],
    gradient: "from-cyan-500 to-blue-500",
    stars: 0,
    demo: "https://skillmatch-kohl.vercel.app/",
  },
  {
    title: "PulseBoard Analytics",
    description:
      "Real-time analytics dashboard with streaming charts, a custom query builder, team workspaces, and alerting.",
    tags: ["Next.js", "TypeScript", "FastAPI", "Python"],
    gradient: "from-indigo-500 to-violet-500",
    stars: 128,
  },
  {
    title: "NimbusCloud Sync",
    description:
      "Cross-platform file synchronization with end-to-end encryption, conflict resolution, and LAN acceleration.",
    tags: ["Python", "FastAPI", "React", "TypeScript"],
    gradient: "from-violet-500 to-fuchsia-500",
    stars: 86,
  },
  {
    title: "Orbit Commerce",
    description:
      "Headless e-commerce platform with edge rendering, one-click checkout, subscriptions, and AI product search.",
    tags: ["Next.js", "TypeScript", "Python", "FastAPI"],
    gradient: "from-fuchsia-500 to-rose-500",
    stars: 64,
  },
  {
    title: "DevDesk",
    description:
      "A developer-focused helpdesk and issue tracker with keyboard-first workflows and GitHub sync.",
    tags: ["React", "TypeScript", "JavaScript", "REST APIs"],
    gradient: "from-rose-500 to-orange-500",
    stars: 41,
  },
  {
    title: "FoodieMap",
    description:
      "A social food-discovery app that aggregates reviews, price ranges, and wait times in real time.",
    tags: ["React", "JavaScript", "Responsive Design", "CSS3"],
    gradient: "from-emerald-500 to-teal-500",
    stars: 23,
  },
  {
    title: "Terminal Portfolio",
    description:
      "A fully interactive terminal-style resume that lets visitors type commands to explore my career.",
    tags: ["JavaScript", "HTML5", "CSS3"],
    gradient: "from-sky-500 to-indigo-500",
    stars: 19,
  },
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading
        eyebrow="Projects"
        title="Things I've built"
        subtitle="A collection of side projects, client work, and open source experiments. All links point to demo pages."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 0.1}>
            <article
              onClick={() =>
                p.demo && window.open(p.demo, "_blank", "noopener,noreferrer")
              }
              onKeyDown={(e) => {
                if (p.demo && (e.key === "Enter" || e.key === " ")) {
                  e.preventDefault();
                  window.open(p.demo, "_blank", "noopener,noreferrer");
                }
              }}
              role={p.demo ? "link" : undefined}
              tabIndex={p.demo ? 0 : undefined}
              className="glass-card group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-line-strong hover:shadow-2xl hover:shadow-indigo-500/10"
            >
              <div
                aria-hidden
                className={`absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${p.gradient} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30`}
              />

              <div className="relative flex items-center justify-between">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${p.gradient} shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6`}
                >
                  <Folder className="h-6 w-6 text-white" />
                </span>
                <div className="flex gap-2">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.title} source on GitHub`}
                    onClick={(e) => e.stopPropagation()}
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface text-soft transition-all hover:bg-surface-strong hover:text-foreground"
                  >
                    <GitHubIcon className="h-4 w-4" />
                  </a>
                  <a
                    href={p.demo ?? "https://example.com"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.title} live demo`}
                    onClick={(e) => e.stopPropagation()}
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface text-soft transition-all hover:bg-surface-strong hover:text-foreground"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <h2 className="relative mt-5 text-xl font-bold">{p.title}</h2>
              <p className="relative mt-2 flex-1 text-sm text-muted">{p.description}</p>

              <div className="relative mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-surface px-3 py-1 font-mono text-xs text-muted ring-1 ring-line transition-colors group-hover:ring-indigo-400/30"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="relative mt-4 flex items-center justify-between border-t border-line-soft pt-4 text-xs text-soft">
                {p.stars > 0 && (
                  <span className="inline-flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 text-amber-400/70" />
                    {p.stars}
                  </span>
                )}
                <Link
                  href="/contact"
                  onClick={(e) => e.stopPropagation()}
                  className="link-accent font-medium"
                >
                  Want something like this?
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
