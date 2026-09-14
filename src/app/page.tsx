import { Hero } from "@/components/Hero";
import { HomeBands } from "@/components/HomeBands";
import { HowWeWork } from "@/components/HowWeWork";
import { Story } from "@/components/Story";
import { WorkingWith } from "@/components/WorkingWith";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Story />
      <HowWeWork />
      <WorkingWith />
      <HomeBands />
    </>
  );
}
