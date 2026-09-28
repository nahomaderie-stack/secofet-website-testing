import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/AboutSecofetBanner.css';

import heroImg from '../assets/Images/Hero-image-2.png';

const slides = [
  {
    id: 1,
    image: heroImg,
    alt: 'Ethiopian Coffee Drying Beds in Yirgacheffe',
  },
  {
    id: 2,
    image: heroImg,
    alt: 'Secofet Coffee Sourcing and Inspection',
  },
  {
    id: 3,
    image: heroImg,
    alt: 'Coffee Processing and Quality Assurance',
  },
  {
    id: 4,
    image: heroImg,
    alt: 'Export Logistics and Preparation',
  },
];

const AboutSecofetBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1,
    );
  };

  return (
    <section className="about-secofet-section">
      <div className="about-secofet-container">
        {/* Section Heading */}
        <h2 className="about-secofet-title">
          About <span className="serif-text">Secofet.</span>
        </h2>

        {/* Carousel Card Box */}
        <div className="carousel-card">
          <img
            src={slides[currentIndex].image}
            alt={slides[currentIndex].alt}
            className="carousel-bg-img"
          />

          {/* Dark Overlay Gradient */}
          <div className="carousel-overlay"></div>

          {/* Controls & Actions Container */}
          <div className="carousel-controls-bar">
            {/* Left Actions */}
            <div className="carousel-actions">
              <Link
                to="/request-sample"
                className="btn-sample-underline btn-secondary"
              >
                <span>Request a Sample</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="arrow-up-right"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </Link>
              <Link to="/rfq" className="btn-quote-white">
                Request a Quote
              </Link>
            </div>

            {/* Right Indicators & Arrows */}
            <div className="carousel-navigation">
              {/* Dots */}
              <div className="carousel-dots">
                {slides.map((_, index) => (
                  <span
                    key={index}
                    className={`dot ${currentIndex === index ? 'active' : ''}`}
                    onClick={() => setCurrentIndex(index)}
                  />
                ))}
              </div>

              {/* Arrow Controls */}
              <div className="carousel-arrows">
                <button
                  className="arrow-btn"
                  onClick={prevSlide}
                  aria-label="Previous slide"
                >
                  ◀
                </button>
                <button
                  className="arrow-btn"
                  onClick={nextSlide}
                  aria-label="Next slide"
                >
                  ▶
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSecofetBanner;
