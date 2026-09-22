import React, { useState } from 'react';
import '../styles/InsideSecofet.css';
import coffeeImage from '../assets/Images/Coffee-farm-2.png';

const categories = [
    { id: 'all', targetId: 'insidesecofet', label: 'All' },
    { id: 'coffee-farms', targetId: 'coffee-farms', label: 'Coffee & Farms' },
    { id: 'quality-control', targetId: 'quality-control', label: 'Quality Control' },
    { id: 'export-logistics', targetId: 'export-logistics', label: 'Export & Logistics' }
];

const InsideSecofet = () => {
    const [activeTab, setActiveTab] = useState('all');

    const handleTabClick = (tab) => {
        setActiveTab(tab.id);

        // Smooth scroll to target section element
        const targetElement = document.getElementById(tab.targetId);
        if (targetElement) {
            const headerOffset = 80; // Offset for sticky top navbar height
            const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;

            window.scrollTo({
                top: elementPosition - headerOffset,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="inside-secofet-section" id="insidesecofet">
            <div className="inside-secofet-container">

                {/* Header Block */}
                <div className="inside-header">
                    <h2 className="inside-title">
                        Explore the <span className="serif-text">origins, people,</span><br />
                        <span className="serif-text">processes,</span> and export <span className="serif-text">journey</span><br />
                        behind Secofet.
                    </h2>
                    <p className="inside-subtitle">
                        Go beyond the coffee and discover the origins, people, traditions, and careful processes that shape Secofet coffees from farm to global markets.
                    </p>
                </div>

                {/* Filter Tabs Row */}
                <div className="inside-tabs">
                    {categories.map((tab, idx) => (
                        <React.Fragment key={tab.id}>
                            <button
                                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                                onClick={() => handleTabClick(tab)}
                            >
                                {tab.label}
                            </button>
                            {idx < categories.length - 1 && <span className="tab-divider">|</span>}
                        </React.Fragment>
                    ))}
                </div>

                {/* Single Full-Bleed Photo Box */}
                <div className="inside-single-card">
                    <img
                        src={coffeeImage}
                        alt="Inside Secofet Sourcing Operations"
                        className="inside-card-bg"
                    />
                    <div className="inside-card-overlay">
                        <h3 className="card-overlay-title">
                            Our <span className="serif-text">Operations</span>
                        </h3>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default InsideSecofet;