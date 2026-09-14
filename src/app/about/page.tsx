import type { Metadata } from "next";
import Link from "next/link";
import { WorkingWith } from "@/components/WorkingWith";
import { values } from "@/lib/site";

export const metadata: Metadata = {
  title: "Why Candid",
  description:
    "Candid is not a reseller chasing quota. We are an unpaid IT partner for commercial clients nationwide.",
};

export default function AboutPage() {
  return (
    <>
      <div className="page page--tight-bottom">
        <p className="text-xs font-semibold tracking-[0.22em] text-red uppercase">
          Why Candid
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl text-balance sm:text-5xl">
          We are not a middleman, a reseller, or a VAR.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          Candid Solutions, Inc. is a vendor-neutral advisory based in the Chicago
          area, serving commercial clients nationwide since 2006. We sit on your side
          of the table while we source, implement, and manage technology. Vendor
          selection and management come at no cost to the customer.
        </p>
      </div>

      <WorkingWith />

      <div className="page page--tight-top">
        <section className="grid gap-8 md:grid-cols-4">
          {values.map((item, i) => (
            <div key={item.title}>
              <h3
                className={`font-display text-2xl ${i % 2 === 0 ? "text-red" : "text-blue"}`}
              >
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
            </div>
          ))}
        </section>

        <div className="mt-16 border-t border-line pt-10">
          <h2 className="font-display text-3xl">Ready to put IT in shape?</h2>
          <p className="mt-3 max-w-xl text-muted">
            Tell us where it hurts: spend, support, or a project that’s stalled, and
            we’ll map the next step.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-sm bg-red px-5 py-3 text-sm font-semibold text-white hover:bg-red-dark"
          >
            Schedule a conversation
          </Link>
        </div>
      </div>
    </>
  );
}
