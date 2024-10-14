import { BenefitsSection } from "@/components/BenefitsSection";
import { CallToActionSection } from "@/components/CallToActionSection";
import { CompatibilitySection } from "@/components/CompatibilitySection";
import { FAQSection } from "@/components/FAQSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";

export default function Home() {
    return (
        <div>
            <Navbar />

            {/* PAGE SECTIONS */}
            <HeroSection />
            <BenefitsSection />
            <FeaturesSection />
            <CompatibilitySection />
            <FAQSection />
            <CallToActionSection />

            <Footer />
        </div>
    );
}
