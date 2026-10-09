import { useState } from 'react';
import SplitTextReveal from '../SplitTextAnimation/SplitTextReveal';
import { Link } from 'react-router-dom';
import '../styles/OurOrigins.css';

import yirgacheffeImg from '../assets/Images/Yirgacheffe-farm.png';
import coffeeFarmImg from '../assets/Images/Coffee-farm-2.png';
import coffeeDryingImg from '../assets/Images/Coffee-drying-3.png';

const originsData = [
  {
    id: '01',
    name: 'Sidama',
    description:
      'Prized for its vibrant citrus acidity, sweet cane sugar finish, and floral aromas, Sidama represents one of Ethiopia’s cornerstone specialty regions.',
    image: coffeeFarmImg,
  },
  {
    id: '02',
    name: 'Yirgacheffe',
    description:
      "Known for its important role in Ethiopian coffee, Yirgacheffe represents one of the origins within Secofet's current Gedeo sourcing network.",
    image: yirgacheffeImg,
  },
  {
    id: '03',
    name: 'Guji',
    description:
      'Renowned for its complex berry-forward flavor profiles, rich body, and distinctive dark chocolate notes.',
    image: coffeeDryingImg,
  },
];

const OurOrigins = () => {
  const [activeOrigin, setActiveOrigin] = useState('02'); // Yirgacheffe active by default

  const currentOrigin =
    originsData.find((item) => item.id === activeOrigin) || originsData[1];

  return (
    <section className="origins-section">
      <div className="origins-container">
        {/* --- Top Text Header --- */}
        <div className="origins-header">
          <span className="origins-tag">Our Origins</span>

          <h2 className="origins-title">
            From <span className="serif-text">Ethiopia's</span> Coffee
            <br />
            Growing Origins
          </h2>

          <div className="origins-lead-text">
            <p className="lead-paragraph">
              Ethiopian coffee begins with its origins. Secofet currently works
              with coffee sourced from Yirgacheffe, planning to establish into
              Gedeo and Sidama coffee-growing areas within Ethiopia.
            </p>
            <p className="sub-paragraph">
              Our origin-focused approach allows buyers to understand where
              their coffee comes from and explore available coffees according to
              origin, processing, grade, and lot characteristics.
            </p>
          </div>

          <div className="origins-actions">
            <Link to="/origins" className="btn-visit-origins">
              <span>Visit Origins</span>
              <span className="pill-icon">
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
            </Link>

            <Link
              to="/request-sample"
              className="btn-request-sample btn-secondary"
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
          </div>
        </div>

        {/* --- Bottom Split Interactive Card --- */}
        <div className="origins-card">
          {/* Left Dark Content Column */}
          <div className="origins-card-left">
            <SplitTextReveal
              key={activeOrigin}
              className="origin-dynamic-desc"
              text={currentOrigin.description}
            />

            {/* Accordion List Selector */}
            <div className="origin-selector-list">
              {originsData.map((item) => {
                const isActive = item.id === activeOrigin;
                return (
                  <button
                    key={item.id}
                    className={`origin-item-btn ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveOrigin(item.id)}
                  >
                    <span className="origin-item-name">
                      {item.id}. {item.name}
                    </span>
                    <span className="origin-item-symbol">
                      {isActive ? '✕' : '↗'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Image Display Column */}
          <div className="origins-card-right">
            <img
              src={currentOrigin.image}
              alt={currentOrigin.name}
              className="origin-hero-img"
            />

            {/* Carousel Dots Indicator */}
            <div className="origin-dots">
              {originsData.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`dot ${item.id === activeOrigin ? 'active' : ''}`}
                  aria-label={`Show ${item.name} origin`}
                  aria-pressed={item.id === activeOrigin}
                  onClick={() => setActiveOrigin(item.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurOrigins;
