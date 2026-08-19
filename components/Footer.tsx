import Link from "next/link";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/SocialIcons";

const socials = [
  { href: "https://github.com", label: "GitHub", Icon: GitHubIcon },
  { href: "https://linkedin.com", label: "LinkedIn", Icon: LinkedInIcon },
  { href: "https://twitter.com", label: "Twitter", Icon: XIcon },
];

export default function Footer() {
  return (
    <footer className="border-t border-line-soft py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <p className="text-sm text-soft">
          © {new Date().getFullYear()} Kingsley Nyoyoko — Software Engineer
        </p>
        <div className="flex items-center gap-2">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface text-muted transition-all hover:-translate-y-0.5 hover:bg-surface-strong hover:text-foreground"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
      <div className="mt-4 text-center text-xs text-faint">
        <Link href="/" className="transition-colors hover:text-muted">
          Home
        </Link>
        <span className="mx-2">·</span>
        <Link href="/contact" className="transition-colors hover:text-muted">
          Contact
        </Link>
        <span className="mx-2">·</span>
        <Link href="/experience" className="transition-colors hover:text-muted">
          Experience
        </Link>
      </div>
    </footer>
  );
}