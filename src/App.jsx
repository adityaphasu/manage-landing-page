import React from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AboutSection from "./components/AboutSection/AboutSection";
import TestimonialSection from "./components/TestimonialSection/TestimonialSection";
import CtaSection from "./components/CtaSection/CtaSection";
import "./scss/App.scss";

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <TestimonialSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
