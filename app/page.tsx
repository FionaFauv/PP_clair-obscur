import HeroSection from "./components/[front-site]/index/hero-section";
import ActionSection from "./components/[front-site]/index/quick-action";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 animate-fade-in">
      <HeroSection />
      <ActionSection />
    </div>  
  );
}
