import { Link } from 'react-router-dom';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Background Overlay */}
      <div className="hero-overlay"></div>

      {/* Hero Content Container */}
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            The World’s Most Sought-After
            <br />
            Ethiopian <span className="serif-text">Coffee</span> Carefully
            Sourced, <span className="serif-text">Reliably</span> Exported.
          </h1>

          <p className="hero-subtitle">
            Supplying international importers and specialty roasters with
            meticulously selected green coffee from Ethiopia’s premier growing
            regions.
          </p>

          <div className="hero-cta-group">
            <Link to="/our-coffees" className="btn-primary ">
              Explore Our Coffees
            </Link>
            <Link to="/rfq" className="btn-secondary">
              <span>Request a Quote</span>
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
      </div>
    </section>
  );
};

export default Hero;
