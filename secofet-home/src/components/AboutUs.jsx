import React, { useState } from 'react';
import '../styles/AboutUs.css';
import videoImage from '../assets/Images/Coffee-Farm.png';

const AboutUs = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
    // Add custom video modal or play logic here
  };

  return (
    <section className="about-section">
      <div className="about-container">
        {/* Section Tag */}
        <span className="about-tag">About Secofet</span>

        {/* Main Heading */}
        <h2 className="about-heading">
          Connecting <span className="serif-text">Ethiopian Coffee</span> <br />
          with Global Customers
        </h2>

        {/* Paragraph Description */}
        <div className="about-description">
          <p>
            Secofet Trading PLC is an{' '}
            <strong>Ethiopian green coffee exporter</strong> focused on
            specialty Arabica, with commercial coffee supplied according to
            buyer requirements.
          </p>
          <p>
            Based in Addis Ababa, Secofet currently sources from established
            Ethiopian coffee origins including{' '}
            <strong>Yirgacheffe, Gedeo and Sidama</strong>, connecting
            origin-based coffee supply with international buyers through focused
            sourcing, quality management, and professional export services.
          </p>
        </div>

        {/* Highlight Banner with Buttons */}
        <div className="about-cta-banner">
          <p className="about-cta-text">
            From Ethiopian origin to international market, we focus on building
            reliable coffee supply and long-term business relationships.
          </p>
          <div className="about-cta-buttons">
            <button className="btn-discover" onClick={handlePlayVideo}>
              <span>Discover Secofet</span>
              <span className="pill-arrow">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </span>
            </button>
            <a href="#coffees" className="btn-explore">
              <span>Explore Our Coffees</span>
              <span className="arrow">↗</span>
            </a>
          </div>
        </div>

        {/* Video Card Showcase Container */}
        <div className="about-video-card">
          {/* Background Image / Plantation View */}
          <div className="video-background">
            <img
              src={videoImage}
              alt="Ethiopian Coffee Plantation Drying Beds"
              className="plantation-img"
            />

            {/* Center Play Button Overlay */}
            <button
              className="video-play-btn"
              onClick={handlePlayVideo}
              aria-label="Play video"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </button>

            {/* Inset Info Card (Bottom-Left) */}
            {/* Inset Info Card (Bottom-Left) */}
            <div className="video-inset-card">
              <ul className="inset-links">
                <li>
                  <a href="#coffees">Explore Our Coffees ↗</a>
                </li>
                <li>
                  <a href="#yirgacheffe">Explore Yirgacheffe's Coffee ↗</a>
                </li>
                <li>
                  <a href="#quote">Request a Quote ↗</a>
                </li>
                <li>
                  <a href="#sample">Request a Sample ↗</a>
                </li>
              </ul>

              <div className="inset-footer">
                <h3 className="inset-title">
                  Discover More about{' '}
                  <span className="serif-text">Secofet</span> with Global
                  Customers.
                </h3>

                {/* Clickable Action Button */}
                <a
                  href="#quote"
                  className="inset-arrow-btn"
                  aria-label="Discover More"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
