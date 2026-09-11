import type { Metadata, Viewport } from "next";
import { Archivo, Inter } from "next/font/google";
import Script from "next/script";
import { SiteShell } from "@/components/SiteShell";
import { site } from "@/lib/site";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Candid Solutions",
    template: "%s – Candid Solutions",
  },
  description:
    "Candid Solutions simplifies and transforms business technology and payments — clarity, savings, and operational improvement through tailored IT, payments, and commerce solutions.",
  metadataBase: new URL(site.url),
  icons: {
    icon: "/brand/candid-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const themeInit = `(function(){try{var s=localStorage.getItem("candid-theme");var t=s==="dark"||s==="light"?s:"light";document.documentElement.setAttribute("data-theme",t);}catch(e){document.documentElement.setAttribute("data-theme","light");}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${archivo.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInit}
        </Script>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
