import { BenefitsSection } from "@/components/BenefitsSection";
import { CallToActionSection } from "@/components/CallToActionSection";
import { CompatibilitySection } from "@/components/CompatibilitySection";
import { FAQSection } from "@/components/FAQSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
    return (
        <div className="container">
            {/* PAGE SECTIONS */}
            <HeroSection />
            <BenefitsSection />
            <FeaturesSection />
            <CompatibilitySection />
            <FAQSection />
            <CallToActionSection />
        </div>
    );
}
