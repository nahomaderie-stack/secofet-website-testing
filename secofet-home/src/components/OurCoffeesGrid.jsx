import React from 'react';
import '../styles/OurCoffeesGrid.css';

// SVG Placeholder or your imported image assets
const greenBoxPlaceholder =
    'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="750"><rect width="100%" height="100%" fill="%2338783e"/></svg>';

const OurCoffeesGrid = () => {
    return (
        <section className="our-coffees-grid-section" id="coffee-categories">
            <div className="coffees-grid-container">

                {/* Top Header Block */}
                <div className="coffees-header">
                    <span className="category-kicker">Our Coffee Categories</span>
                    <h2 className="coffees-title">
                        Ethiopian Green <span className="serif-text">Coffee Grades</span>
                    </h2>
                    <p className="coffees-subtitle">
                        We export a comprehensive range of specialty and commercial grade Arabica beans sourced directly from washing and drying stations across Ethiopia.
                    </p>
                </div>

                {/* 3-Column Solid Green Image Cards Grid */}
                <div className="category-cards-grid">
                    <div className="category-card-box">
                        <img src={greenBoxPlaceholder} alt="Category 1" className="category-card-img" />
                    </div>

                    <div className="category-card-box">
                        <img src={greenBoxPlaceholder} alt="Category 2" className="category-card-img" />
                    </div>

                    <div className="category-card-box">
                        <img src={greenBoxPlaceholder} alt="Category 3" className="category-card-img" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default OurCoffeesGrid;