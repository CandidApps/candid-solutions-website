"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { nav, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-charcoal/95 text-white backdrop-blur">
      <div className="mx-auto flex w-full max-w-[var(--wrap)] items-center justify-between gap-6 px-[var(--page-pad)] py-4">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <Logo className="brightness-0 invert" />
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium tracking-wide text-white/80 md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a href={site.phoneHref} className="text-sm text-white/70 hover:text-white">
            {site.phone}
          </a>
          <Link
            href="/contact"
            className="rounded-sm bg-red px-4 py-2 text-sm font-semibold text-white hover:bg-red-dark"
          >
            Let’s talk
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-0.5 w-6 bg-white" />
          <span className="mt-1.5 block h-0.5 w-6 bg-white" />
          <span className="mt-1.5 block h-0.5 w-6 bg-white" />
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-4 text-sm font-medium">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 w-fit rounded-sm bg-red px-4 py-2 font-semibold"
              onClick={() => setOpen(false)}
            >
              Let’s talk
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
