"use client";

import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin, ArrowUpRight, GraduationCap } from "lucide-react";
import Reveal from "@/components/Reveal";

const jobs = [
  {
    role: "Computer Science Contract Lecturer",
    company: "National Open University Nigeria",
    location: "Lagos, Nigeria",
    period: "April 2025 - Present",
    type: "Contract",
    highlights: [
      "Deliver lectures and practical sessions for undergraduate courses in Data Structures and Algorithms, Database Management Systems, and Introduction to Programming",
      "Design and implement comprehensive course syllabi, lecture plans, and assessment materials aligned with departmental standards",
      "Mentor and supervise students on individual and group projects, providing constructive feedback and technical guidance",
      "Evaluate student performance through assignments, exams, and projects with timely, detailed feedback",
      "Utilize innovative teaching methodologies and technological tools to improve student engagement and comprehension",
    ],
    stack: ["Python", "SQL", "Data Structures", "Algorithms"],
  },
  {
    role: "Frontend Instructor",
    company: "GlobalTech Computer Institute",
    location: "Lagos, Nigeria",
    period: "Sept 2024 - Present",
    type: "Full-time",
    highlights: [
      "Instruct and mentor students on HTML, CSS, JavaScript, and frontend basics",
      "Develop simplified coding materials tailored to beginners",
      "Create interactive examples and coding projects to boost understanding",
      "Guide students in building personal portfolios and basic web applications",
      "Promote group learning and collaborative problem-solving through mini-projects",
      "Help students build confidence in debugging and optimizing their code",
    ],
    stack: ["HTML5", "CSS3", "JavaScript", "React"],
  },
  {
    role: "Private Tutor",
    company: "Freelance",
    location: "Remote",
    period: "Feb 2021 - Dec 2024",
    type: "Part-time",
    highlights: [
      "Tutored secondary school students in Mathematics, Physics, and Computer Studies",
      "Integrated technology tools like online quizzes and coding games to make learning fun and effective",
      "Assisted students with personal development and study habits",
    ],
    stack: ["Mathematics", "Physics", "Computer Studies"],
  },
];

const education = [
  {
    degree: "B.Sc. Electronics and Computer Technology",
    school: "University of Calabar",
    period: "May 2013 - Feb 2021",
    detail: "Design and structure of system hardware.",
  },
  {
    degree: "Front End Web Development",
    school: "FreeCodeCamp",
    period: "Sept 2024 - June 2025",
    detail: "Responsive webpages and JavaScript modern frameworks.",
  },
  {
    degree: "National Youth Service Corps",
    school: "NYSC",
    period: "Aug 2024 - Aug 2025",
    detail: "National service program.",
  },
  {
    degree: "West Africa Senior Secondary School Certificate",
    school: "Jeno Grammal School",
    period: "Sept 2004 - July 2010",
    detail: "Secondary education.",
  },
];

export default function ExperienceTimeline() {
  return (
    <div>
      <div className="relative">
        <motion.div
          aria-hidden
          className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-violet-500 to-fuchsia-500 sm:left-1/2"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{ originY: 0 }}
        />

        <div className="space-y-12">
          {jobs.map((job, i) => {
            const left = i % 2 === 0;
            return (
              <div key={job.company} className="relative">
                <motion.div
                  aria-hidden
                  className="absolute left-4 top-8 z-10 -translate-x-1/2 sm:left-1/2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 300, damping: 20 }}
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500 shadow-lg shadow-indigo-500/40 ring-4 ring-background">
                    <Briefcase className="h-4 w-4 text-white" />
                  </span>
                </motion.div>

                <Reveal
                  direction={left ? "right" : "left"}
                  className={`ml-12 sm:ml-0 sm:w-[calc(50%-2.5rem)] ${
                    left ? "sm:mr-auto" : "sm:ml-auto"
                  }`}
                >
                  <div className="glass-card group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-xl hover:shadow-indigo-500/10">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-soft">
                      <span className="inline-flex items-center gap-1 rounded-full tint-indigo px-3 py-1 font-medium">
                        <Calendar className="h-3 w-3" />
                        {job.period}
                      </span>
                      <span className="rounded-full bg-surface px-3 py-1 ring-1 ring-line">
                        {job.type}
                      </span>
                    </div>

                    <h2 className="mt-3 text-xl font-bold text-hover-indigo">
                      {job.role}
                    </h2>
                    <p className="mt-0.5 flex items-center gap-1.5 text-sm font-medium text-muted">
                      <ArrowUpRight className="h-4 w-4" />
                      {job.company}
                      <span className="flex items-center gap-1 text-faint">
                        Â· <MapPin className="h-3.5 w-3.5" /> {job.location}
                      </span>
                    </p>

                    <ul className="mt-4 space-y-2">
                      {job.highlights.map((h) => (
                        <li key={h} className="flex gap-2.5 text-sm text-muted">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-indigo-400 to-fuchsia-400" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {job.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-full bg-surface px-3 py-1 font-mono text-xs text-muted ring-1 ring-line"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-20">
        <Reveal className="mb-8 text-center">
          <p className="mb-3 inline-block rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1 text-xs font-medium uppercase tracking-widest text-emerald-300">
            Education
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            My academic journey
          </h2>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {education.map((edu, i) => (
            <Reveal key={edu.degree} delay={(i % 2) * 0.1}>
              <div className="glass-card group flex h-full items-start gap-4 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-line-strong">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <GraduationCap className="h-5 w-5 text-white" />
                </span>
                <div>
                  <h3 className="font-semibold leading-snug">{edu.degree}</h3>
                  <p className="mt-1 text-sm text-muted">{edu.school}</p>
                  <p className="mt-2 inline-flex items-center gap-1 rounded-full bg-surface px-3 py-1 text-xs text-soft ring-1 ring-line">
                    <Calendar className="h-3 w-3" />
                    {edu.period}
                  </p>
                  <p className="mt-2 text-sm text-soft">{edu.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
