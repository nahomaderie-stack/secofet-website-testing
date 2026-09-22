import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/OurCoffeesExplore.css';

// Import your drying beds hero image asset
import coffeeDryingBeds from '../assets/Images/Coffee-Farm.png';

const OurCoffeesExplore = () => {
    return (
        <section className="our-coffees-hero" id="ourcoffees">
            {/* Background Image with Dark Vignette Overlay */}
            <img
                src={coffeeDryingBeds}
                alt="Ethiopian Coffee Cherries on Raised African Drying Beds"
                className="hero-bg-img"
            />
            <div className="hero-dark-overlay"></div>

            <div className="hero-content-container">

                {/* Main Headline */}
                <h1 className="hero-main-title">
                    Explore our carefully<br />
                    sourced <span className="serif-text">Ethiopian Arabica</span><br />
                    coffees.
                </h1>

                {/* Subtitle Description */}
                <p className="hero-subtitle">
                    From the highlands of Yirgacheffe, Gedeo, and Sidama, discover coffees shaped by unique origins, careful cultivation, and generations of expertise.
                </p>

                {/* Quick CTA Actions */}
                <div className="hero-actions">
                    <Link to="/rfq" className="btn-hero-white">
                        Request a Quote
                    </Link>
                    <a href="#origins" className="btn-hero-outline">
                        View Origins ↗︎
                    </a>
                </div>

            </div>
        </section>
    );
};

export default OurCoffeesExplore;