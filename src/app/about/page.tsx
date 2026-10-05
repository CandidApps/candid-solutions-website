import Link from "next/link";
import { WorkingWith } from "@/components/WorkingWith";
import { pageMeta } from "@/lib/seo";
import { values } from "@/lib/site";

export const metadata = pageMeta(
  "/about",
  "Why Candid",
  "Candid is an unpaid, vendor-neutral IT partner for commercial clients nationwide. Phone systems, payments, and the rest of the stack, at no advisory cost.",
);

export default function AboutPage() {
  return (
    <>
      <div className="page page--tight-bottom">
        <p className="label">Why Candid</p>
        <h1>We are not a middleman, a reseller, or a VAR.</h1>
        <p className="page__lead">
          Candid Solutions, Inc. is a vendor-neutral advisory based in the Chicago
          area, serving commercial clients nationwide since 2006. We sit on your side
          of the table while we source, implement, and manage technology. Vendor
          selection and management come at no cost to the customer.
        </p>
      </div>

      <WorkingWith />

      <div className="page page--tight-top">
        <ul className="values values--row">
          {values.map((item) => (
            <li key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>

        <div className="page__close">
          <h2>Ready to put IT in shape?</h2>
          <p>
            Tell us where it hurts: spend, support, or a project that’s stalled, and
            we’ll map the next step.
          </p>
          <Link href="/contact" className="btn btn-solid">
            Schedule a conversation
          </Link>
        </div>
      </div>
    </>
  );
}
