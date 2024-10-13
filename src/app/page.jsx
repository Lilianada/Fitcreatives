import { MissionSection } from "@/components/home/Mission";
import FrequentlyAskedQtn from "@/components/home/Faq";
import Hero from "@/components/home/Hero";
import Process from "@/components/home/Process";

export default function Home() {
  return (
    <div className="w-full grid gap-8">
      <Hero />
      <MissionSection/>
      <Process />
      <FrequentlyAskedQtn />
    </div>
  );
}
