import { BenefitsSection } from "@/components/BenefitsSection";
import { CompatibilitySection } from "@/components/CompatibilitySection";
import { FAQSection } from "@/components/FAQSection";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
    return (
        <div className="container flex flex-col gap-10">
            {/* PAGE SECTIONS */}
            <HeroSection />
            <BenefitsSection />
            {/* <FeaturesSection /> */}
            <CompatibilitySection />
            <FAQSection />
            {/* <CallToActionSection /> */}
        </div>
    );
}
