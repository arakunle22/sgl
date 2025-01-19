import React from 'react';
import Header from '../components/Header';
import HeroSlider from '../components/HeroSlider'
import HeroSection from '../components/HeroSection';
import MissionVisionSection from '../components/MissionSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer';
import '../index.css';

const Home: React.FC = () => {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <HeroSlider />
        <HeroSection />
        <MissionVisionSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </div>
    );
  };

export default Home;

