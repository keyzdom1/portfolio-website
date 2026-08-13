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

function Row({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  return (
    <div className="relative overflow-hidden py-3">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent sm:w-40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent sm:w-40"
      />
      <div
        className={`marquee-track flex w-max items-center ${reverse ? "marquee-track-reverse" : ""}`}
      >
        {[items, items].map((group, gi) => (
          <div
            key={gi}
            aria-hidden={gi === 1}
            className="flex shrink-0 items-center"
          >
            {group.map((t) => (
              <span
                key={t}
                className="flex items-center font-mono text-sm text-soft transition-colors hover:text-foreground"
              >
                <span className="px-6">{t}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-fuchsia-400" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechMarquee() {
  return (
    <section className="marquee relative border-y border-line-soft bg-surface/40 py-4">
      <Row items={tech} />
      <Row items={tech} reverse />
    </section>
  );
}