"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/SocialIcons";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const contactCards = [
  {
    Icon: Mail,
    label: "Email",
    value: "kingsleynyoyoko@gmail.com",
    accent: "from-indigo-500 to-violet-500",
  },
  {
    Icon: Phone,
    label: "Phone",
    value: "+234 806 163 7166",
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    Icon: MapPin,
    label: "Location",
    value: "Ikorodu, Lagos, Nigeria",
    accent: "from-fuchsia-500 to-rose-500",
  },
];

const socials = [
  { href: "https://github.com", label: "GitHub", Icon: GitHubIcon },
  { href: "https://linkedin.com", label: "LinkedIn", Icon: LinkedInIcon },
  { href: "https://twitter.com", label: "Twitter", Icon: XIcon },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "Failed to send your message.");
      }

      setSent(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to send your message. Please try again.",
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something great"
        subtitle="Have a project in mind, a role to fill, or just want to say hi? My inbox is always open."
      />

      <div className="grid gap-8 lg:grid-cols-5">
        <div className="space-y-5 lg:col-span-2">
          <Reveal direction="right">
            <div className="space-y-4">
              {contactCards.map(({ Icon, label, value, accent }) => (
                <div
                  key={label}
                  className="glass-card group flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-line-strong"
                >
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${accent} shadow-lg transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-soft">{label}</p>
                    <p className="mt-0.5 text-sm font-medium text-strong">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.15}>
            <div className="glass-card rounded-2xl p-5">
              <p className="text-xs uppercase tracking-wider text-soft">
                Find me online
              </p>
              <div className="mt-3 flex gap-3">
                {socials.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface text-muted ring-1 ring-line transition-all hover:-translate-y-0.5 hover:bg-surface-strong hover:text-foreground"
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </a>
                ))}
              </div>
              <p className="mt-4 text-sm text-soft">
                Average response time: under 24 hours. I reply to every message.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal direction="left" className="lg:col-span-3">
          <div className="glass-card rounded-3xl p-6 sm:p-8">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex min-h-[420px] flex-col items-center justify-center text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
                  >
                    <CheckCircle2 className="h-20 w-20 text-emerald-400" />
                  </motion.div>
                  <h2 className="mt-6 text-2xl font-bold">Message sent!</h2>
                  <p className="mt-2 max-w-sm text-muted">
                    Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSent(false);
                      setError(null);
                    }}
                    className="mt-8 rounded-full border border-line bg-surface px-6 py-2.5 text-sm text-strong transition-all hover:bg-surface-strong hover:text-foreground"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -16 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm text-muted">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        placeholder="Jane Doe"
                        className="w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-foreground placeholder:text-faint outline-none transition-all focus:border-indigo-400/60 focus:ring-2 focus:ring-indigo-500/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm text-muted">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="jane@example.com"
                        className="w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-foreground placeholder:text-faint outline-none transition-all focus:border-indigo-400/60 focus:ring-2 focus:ring-indigo-500/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="mb-2 block text-sm text-muted">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      required
                      placeholder="Project inquiry"
                      className="w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-foreground placeholder:text-faint outline-none transition-all focus:border-indigo-400/60 focus:ring-2 focus:ring-indigo-500/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm text-muted">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Tell me about your project, timeline, and budget..."
                      className="w-full resize-none rounded-xl border border-line bg-surface px-4 py-3 text-sm text-foreground placeholder:text-faint outline-none transition-all focus:border-indigo-400/60 focus:ring-2 focus:ring-indigo-500/20"
                    />
                  </div>

                  {error && (
                    <p
                      role="alert"
                      className="rounded-xl border border-rose-400/40 bg-rose-500/10 px-4 py-3 text-sm text-rose-300"
                    >
                      {error}
                    </p>
                  )}

                  <motion.button
                    type="submit"
                    disabled={sending}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-6 py-3.5 font-medium text-white shadow-lg shadow-indigo-500/30 transition-all hover:shadow-fuchsia-500/30 hover:brightness-110 disabled:opacity-60 sm:w-auto"
                  >
                    <Send className="h-4 w-4" />
                    {sending ? "Sending..." : "Send message"}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </div>
  );
}