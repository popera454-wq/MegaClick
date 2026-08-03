import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AISection from "@/components/AISection";
import IVRSection from "@/components/IVRSection";
import DemoSection from "@/components/DemoSection";



export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <Features />
     
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <AISection />

      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <IVRSection />

      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <DemoSection />
    </main>
  );
}
