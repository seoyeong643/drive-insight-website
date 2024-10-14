import { BenefitsSection } from "@/components/BenefitsSection";
import { CallToActionSection } from "@/components/CallToActionSection";
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
            <FAQSection />
            <CallToActionSection />

            <Footer />
        </div>
    );
}
