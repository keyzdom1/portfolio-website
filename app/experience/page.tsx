import type { Metadata } from "next";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience of Kingsley Nyoyoko - software engineer, lecturer, and mentor with teaching roles at NOUN and GlobalTech.",
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've worked"
        subtitle="Teaching, mentoring, and building - four years of empowering the next generation of developers."
      />
      <ExperienceTimeline />
    </div>
  );
}
