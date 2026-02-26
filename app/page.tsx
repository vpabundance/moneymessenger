import HeroSection from "@/components/home/HeroSection";
import ScrollStory from "@/components/home/ScrollStory";
import ThesisReveal from "@/components/home/ThesisReveal";
import OutcomesSection from "@/components/home/OutcomesSection";
import CommunitySection from "@/components/home/CommunitySection";
import WritingPreview from "@/components/home/WritingPreview";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <main>
      {/* 1. Hero — line animation, stats ticker */}
      <HeroSection />

      {/* 2. Scroll-pinned 4-beat story: Pattern → Diagnosis → Cards → Shift */}
      <ScrollStory />

      {/* 3. Word-by-word core thesis reveal */}
      <ThesisReveal />

      {/* 4. What actually changes — 3 outcome cards */}
      <OutcomesSection />

      {/* 5. Community tiers — light section */}
      <CommunitySection />

      {/* 6. Writing preview — dark section */}
      <WritingPreview />

      {/* 7. Final CTA — full viewport */}
      <FinalCTA />
    </main>
  );
}
