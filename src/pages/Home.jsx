import React from "react";
import Navbar from "../components/portfolio/Navbar";
import HeroSection from "../components/portfolio/HeroSection";
import AboutSection from "../components/portfolio/AboutSection";
import SpecialtiesSection from "../components/portfolio/SpecialtiesSection";
import TimelineSection from "../components/portfolio/TimelineSection";
import TestimonialsSection from "../components/portfolio/TestimonialsSection";
import ContactSection from "../components/portfolio/ContactSection";
import Footer from "../components/portfolio/Footer";

const DOCTOR_IMAGE = "https://media.base44.com/images/public/69e9655d2e648f5936dc0caa/4bdf73545_generated_3c84e603.png";
const CLINIC_IMAGE = "https://media.base44.com/images/public/69e9655d2e648f5936dc0caa/1559e395e_generated_df9547dc.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />
      <HeroSection doctorImage={DOCTOR_IMAGE} />
      <AboutSection clinicImage={CLINIC_IMAGE} />
      <SpecialtiesSection />
      <TimelineSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}