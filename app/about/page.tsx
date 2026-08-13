import type { Metadata } from "next";
import {
  User,
  GraduationCap,
  Coffee,
  MapPin,
  Languages,
  Code2,
  Server,
  Wrench,
  Users,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Kingsley Nyoyoko - a software engineer, mentor, and builder of user-friendly web applications.",
};

const skillGroups = [
  {
    Icon: Code2,
    title: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Responsive Web Design",
    ],
    accent: "from-sky-500 to-indigo-500",
  },
  {
    Icon: Server,
    title: "Backend",
    skills: ["Python", "FastAPI", "REST APIs", "SQL Basics", "API Design"],
    accent: "from-indigo-500 to-violet-500",
  },
  {
    Icon: Wrench,
    title: "Tools & Practices",
    skills: [
      "Debugging",
      "Code Optimization",
      "Git",
      "Technical Documentation",
      "Time Management",
      "Problem Solving",
    ],
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    Icon: Users,
    title: "Teaching & Mentorship",
    skills: [
      "Instructional Design",
      "Curriculum Development",
      "Group Learning",
      "Student Assessment",
      "Team Collaboration",
      "Communication",
    ],
    accent: "from-fuchsia-500 to-rose-500",
  },
];

const facts = [
  { Icon: Coffee, label: "Powered by", value: "Curiosity & clean code" },
  { Icon: MapPin, label: "Based in", value: "Lagos, Nigeria" },
  {
    Icon: GraduationCap,
    label: "Education",
    value: "B.Sc. Electronics & Computer Technology",
  },
  { Icon: Languages, label: "Languages", value: "English" },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading
        eyebrow="About Me"
        title="Engineer. Mentor. Lifelong Learner."
        subtitle="I&apos;m Kingsley - a software engineer who believes great software is equal parts craft and empathy."
      />

      <div className="grid items-start gap-10 lg:grid-cols-2">
        <Reveal direction="right">
          <div className="glass-card rounded-3xl p-8">
            <div className="mb-6 flex items-center gap-4">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 shadow-lg shadow-indigo-500/30">
                <User className="h-8 w-8 text-white" />
              </span>
              <div>
                <h2 className="text-2xl font-bold">Kingsley Nyoyoko</h2>
                <p className="text-sm text-soft">Software Engineer</p>
              </div>
            </div>

            <div className="space-y-4 text-muted">
              <p>
                I&apos;m a resourceful and motivated software engineer with a B.Sc. in
                Electronics and Computer Technology from the University of Calabar.
                I specialize in building user-friendly, responsive websites and web
                applications with HTML, CSS, JavaScript, and modern frameworks like
                Next.js and React, backed by Python and FastAPI on the server side.
              </p>
              <p>
                I&apos;m currently teaching at GlobalTech Computer Institute and lecturing
                at the National Open University of Nigeria, where I foster group
                learning and mentor aspiring developers. I&apos;m passionate about
                transforming designs into interactive interfaces, improving user
                experience, and solving real-world problems through clean and
                efficient code.
              </p>
              <p>
                Outside of work you&apos;ll find me committed to continuous learning,
                contributing to the developer community, and using technology to
                inspire and empower others.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {facts.map(({ Icon, label, value }) => (
                <div
                  key={label}
                  className="rounded-xl bg-surface p-4 ring-1 ring-line transition-colors hover:ring-indigo-400/40"
                >
                  <div className="flex items-center gap-2 text-soft">
                    <Icon className="h-4 w-4" />
                    <span className="text-xs uppercase tracking-wider">{label}</span>
                  </div>
                  <p className="mt-1.5 text-sm font-medium text-strong">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {skillGroups.map(({ Icon, title, skills, accent }, i) => (
            <Reveal key={title} delay={i * 0.1}>
              <div className="glass-card group h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-line-strong">
                <div
                  className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${accent} shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                >
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-surface px-3 py-1 text-xs text-muted ring-1 ring-line transition-colors group-hover:ring-indigo-400/30"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
