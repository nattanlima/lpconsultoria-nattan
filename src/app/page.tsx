import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Empathy } from "@/components/sections/Empathy";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Inclusions } from "@/components/sections/Inclusions";
import { About } from "@/components/sections/About";
import { SocialProof } from "@/components/sections/SocialProof";
import { Qualifications } from "@/components/sections/Qualifications";
import { Offer } from "@/components/sections/Offer";
import { FAQ } from "@/components/sections/FAQ";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Problem />
        <Empathy />
        <HowItWorks />
        <Inclusions />
        <About />
        <SocialProof />
        <Qualifications />
        <Offer />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
