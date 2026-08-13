import Reveal from "@/components/Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export default function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12 text-center">
      <p className="tint-indigo mb-3 inline-block rounded-full border px-4 py-1 text-xs font-medium uppercase tracking-widest">
        {eyebrow}
      </p>
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
      {subtitle && <p className="mx-auto mt-4 max-w-2xl text-muted">{subtitle}</p>}
    </Reveal>
  );
}
