import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import FeatureGrid from "@/components/FeatureGrid";
import LiquidityVisualizer from "@/components/LiquidityVisualizer";
import Pricing from "@/components/Pricing";
import CTAForm from "@/components/CTAForm";
import Footer from "@/components/Footer";

// The page is visible from the first paint. The old splash screen held the whole page
// at opacity 0 behind a simulated progress bar for about two seconds, which was most
// of the slow Largest Contentful Paint.
export default function Home() {
  return (
    <>
      <Navbar showSplash={false} />

      {/* Main Experience Layout */}
      <main className="flex-1">
        {/* Hero Section + Interactive Routing simulator */}
        <Hero />

        {/* Sprint Timeline Features Showcase */}
        <Timeline />

        {/* Feature Deep Dive Grid */}
        <FeatureGrid />

        {/* Treasury Liquidity Live visualizer */}
        <LiquidityVisualizer />

        {/* Pricing Tier and Estimation Calculator */}
        <Pricing />

        {/* Access Sandbox CTA */}
        <CTAForm />
      </main>

      {/* Sleek Footnote and Links */}
      <Footer />
    </>
  );
}
