import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { CommunitySection } from "@/components/community-section";
import { FAQSection } from "@/components/faq-section";
import { LinksSection } from "@/components/links-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CommunitySection />
      <FAQSection />
      <LinksSection />
      <SiteFooter />
    </>
  );
}
