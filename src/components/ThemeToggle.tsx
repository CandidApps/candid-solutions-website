"use client";

export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("candid-theme", next);
    } catch {
      /* private mode */
    }
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label="Toggle dark mode"
    >
      <svg
        className="theme-toggle__sun"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        aria-hidden="true"
      >
        <circle cx="8" cy="8" r="3" fill="currentColor" />
        <path
          d="M8 1.25v1.5M8 13.25v1.5M1.25 8h1.5M13.25 8h1.5M3.05 3.05l1.06 1.06M11.89 11.89l1.06 1.06M3.05 12.95l1.06-1.06M11.89 4.11l1.06-1.06"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="square"
          fill="none"
        />
      </svg>
      <svg
        className="theme-toggle__moon"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        aria-hidden="true"
      >
        <path
          d="M13.2 10.4A5.6 5.6 0 0 1 5.6 2.8 5.7 5.7 0 1 0 13.2 10.4Z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
}
