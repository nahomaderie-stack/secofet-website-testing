import { useState } from 'react';
import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import KeyCategories from '../components/KeyCategories';
import OurOrigins from '../components/OurOrigins';
import WhySecofet from '../components/WhySecofet';
import WorkWithSecofet from '../components/WorkWithSecofet';

function HomePage() {
  return (
    <>
      <Hero />
      <AboutUs />
      <KeyCategories />
      <OurOrigins />
      <WhySecofet />
      <WorkWithSecofet />
    </>
  );
}
export default HomePage;
