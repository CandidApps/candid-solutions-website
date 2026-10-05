import type { Metadata, Viewport } from "next";
import { Archivo, Inter } from "next/font/google";
import Script from "next/script";
import { SiteShell } from "@/components/SiteShell";
import { organizationJsonLd } from "@/lib/seo";
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
    default: "Business technology, payments & IT",
    template: "%s – Candid Solutions",
  },
  description:
    "Candid Solutions is a vendor-neutral IT consulting firm for business phone systems, payment processing, cybersecurity, and technology spend.",
  metadataBase: new URL(site.url),
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary",
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
