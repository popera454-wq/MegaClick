import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <Features />
    </main>
  );
}