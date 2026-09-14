import type { ReactNode } from "react";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader />
      <main id="main" className="flex-1">
        {children}
      </main>
      <div className="site-end">
        <CtaBand />
        <Footer />
      </div>
    </div>
  );
}
