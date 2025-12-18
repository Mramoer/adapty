import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LogoCloud from "./components/LogoCloud";
import Features from "./components/Features";
import Metrics from "./components/Metrics";
import Personas from "./components/Personas";
import SdkSection from "./components/SdkSection";
import SdkPlatforms from "./components/SdkPlatforms";
import Integrations from "./components/Integrations";
import GrowthStories from "./components/GrowthStories";
import Testimonials from "./components/Testimonials";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9F5] text-slate-900">
      <Header />
      <main className="flex-1">
        <Hero />
        <LogoCloud />
        <Metrics />
        <Personas />
        <Features />
        <SdkSection />
        <SdkPlatforms />
        <Integrations />
        <GrowthStories />
        <Testimonials />
        <Benefits />
      </main>
      <Footer />
    </div>
  );
};

export default App;