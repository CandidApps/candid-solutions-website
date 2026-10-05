"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { nav, site } from "@/lib/site";

function isExternalChild(child: object): boolean {
  return "external" in child && (child as { external?: boolean }).external === true;
}

function NavLink({
  href,
  label,
  external,
  current,
  onClick,
}: {
  href: string;
  label: string;
  external?: boolean;
  current?: boolean;
  onClick?: () => void;
}) {
  if (external) {
    return (
      <a href={href} rel="noopener noreferrer" target="_blank" onClick={onClick}>
        {label}
      </a>
    );
  }

  return (
    <Link
      href={href}
      aria-current={current ? "page" : undefined}
      onClick={onClick}
    >
      {label}
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMenu(null);
  }, [pathname]);

  useEffect(() => {
    if (!menu) return;

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setMenu(null);
    }

    function onPointer(event: MouseEvent) {
      if (!headerRef.current?.contains(event.target as Node)) setMenu(null);
    }

    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointer);
    };
  }, [menu]);

  return (
    <header
      ref={headerRef}
      className={`site-header${open ? " is-open" : ""}`}
    >
      <div className="site-header__top">
        <p>
          Partner Program ·{" "}
          <Link href="/agents">Become an agent</Link>
        </p>
        <a href={site.phoneHref}>{site.phone}</a>
      </div>
      <div className="site-header__inner">
        <Link href="/" className="site-header__brand" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav aria-label="Primary">
          {nav.map((item) =>
            "children" in item ? (
              <div
                className={`nav-drop${menu === item.href ? " is-open" : ""}`}
                key={item.href}
              >
                <Link
                  href={item.href}
                  className="nav-drop__trigger"
                  aria-current={
                    pathname === item.href ||
                    pathname.startsWith(`${item.href}/`)
                      ? "page"
                      : undefined
                  }
                  onClick={() => setMenu(null)}
                >
                  {item.label}
                </Link>
                <button
                  type="button"
                  className="nav-drop__caret-btn"
                  aria-expanded={menu === item.href}
                  aria-controls={`${item.label.toLowerCase()}-menu`}
                  aria-label={
                    menu === item.href
                      ? `Close ${item.label} menu`
                      : `Open ${item.label} menu`
                  }
                  onClick={() =>
                    setMenu((current) =>
                      current === item.href ? null : item.href,
                    )
                  }
                >
                  <span className="nav-drop__caret" aria-hidden="true" />
                </button>
                <div
                  id={`${item.label.toLowerCase()}-menu`}
                  className="nav-drop__menu"
                  role="list"
                >
                  <div role="listitem">
                    <NavLink
                      href={item.href}
                      label={`All ${item.label.toLowerCase()}`}
                      current={pathname === item.href}
                      onClick={() => setMenu(null)}
                    />
                  </div>
                  {item.children.map((child) => (
                    <div role="listitem" key={child.label}>
                      <NavLink
                        href={child.href}
                        label={child.label}
                        external={isExternalChild(child)}
                        current={
                          !isExternalChild(child) && pathname === child.href
                        }
                        onClick={() => setMenu(null)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                current={pathname === item.href}
              />
            ),
          )}
        </nav>

        <div className="site-header__tools">
          <Link href="/contact" className="btn btn-solid site-header__chat">
            Let’s Chat!
          </Link>
          <ThemeToggle />
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div id="mobile-nav" className="site-header__panel">
        {nav.map((item) =>
          "children" in item ? (
            <div className="nav-drop nav-drop--panel" key={item.href}>
              <NavLink
                href={item.href}
                label={item.label}
                current={
                  pathname === item.href || pathname.startsWith(`${item.href}/`)
                }
                onClick={() => setOpen(false)}
              />
              <div className="nav-drop__menu">
                <NavLink
                  href={item.href}
                  label={`All ${item.label.toLowerCase()}`}
                  current={pathname === item.href}
                  onClick={() => setOpen(false)}
                />
                {item.children.map((child) => (
                  <NavLink
                    key={child.label}
                    href={child.href}
                    label={child.label}
                    external={isExternalChild(child)}
                    current={
                      !isExternalChild(child) && pathname === child.href
                    }
                    onClick={() => setOpen(false)}
                  />
                ))}
              </div>
            </div>
          ) : (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              current={pathname === item.href}
              onClick={() => setOpen(false)}
            />
          ),
        )}
        <Link href="/contact" className="btn btn-solid" onClick={() => setOpen(false)}>
          Let’s Chat!
        </Link>
      </div>
    </header>
  );
}
