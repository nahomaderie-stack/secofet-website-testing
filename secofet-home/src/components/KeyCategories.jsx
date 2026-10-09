import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/KeyCategories.css';

import heroImg from '../assets/Images/Hero-image-2.png';
import yirgacheffeImg from '../assets/Images/Yirgacheffe-farm.png';
import coffeeFarmImg from '../assets/Images/Coffee-farm-2.png';
import coffeeDryingImg from '../assets/Images/Coffee-drying-3.png';

const categories = [
  {
    id: 'arabica',
    title: 'Ethiopian Arabica',
    description:
      'Sourced from Ethiopia’s renowned coffee-growing regions, with current sourcing focused on Yirgacheffe, Gedeo and Sidama.',
    image: coffeeFarmImg,
    link: '/our-coffees',
  },
  {
    id: 'yirgacheffe',
    title: 'Yirgacheffe Coffee',
    description:
      'Known worldwide for its distinct floral aroma, bright acidity, and sweet citrus flavor profile.',
    image: yirgacheffeImg,
    link: '/our-coffees',
  },
  {
    id: 'guji',
    title: 'Guji Specialty',
    description:
      'Rich complex profiles featuring heavy berry notes, intense sweetness, and elegant body.',
    image: coffeeDryingImg,
    link: '/our-coffees',
  },
  {
    id: 'sidama',
    title: 'Sidama Arabica',
    description:
      'Balanced acidity with vibrant lemon and cane sugar sweetness, prized by global roasters.',
    image: heroImg,
    link: '/our-coffees',
  },
];

const KeyCategories = () => {
  // First card is expanded by default (index 0)
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="categories-section">
      <div className="categories-container">
        {/* Section Header */}
        <div className="categories-header">
          <span className="categories-tag">Key Coffee Categories</span>
          <h2 className="categories-title">
            Our Key <span className="serif-text">Ethiopian Coffee</span>
            <br />
            Categories
          </h2>
        </div>

        {/* Accordion Grid */}
        <div className="categories-grid">
          {categories.map((cat, index) => {
            const isExpanded = index === activeIndex;

            return (
              <div
                key={cat.id}
                className={`category-card ${isExpanded ? 'expanded' : 'collapsed'}`}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
              >
                {/* Background Image & Overlay */}
                <img src={cat.image} alt={cat.title} className="card-bg-img" />
                <div className="card-overlay"></div>

                {/* Card Content */}
                <div className="card-content">
                  {/* Category Title & Badge (Always visible in both collapsed and expanded states) */}
                  <div className="card-header-info">
                    <span className="card-number">0{index + 1}</span>
                    <h3 className="card-title">
                      <button
                        type="button"
                        className="category-card-title"
                        aria-label={`Show details for ${cat.title}`}
                        aria-expanded={isExpanded}
                        onClick={(event) => {
                          event.stopPropagation();
                          setActiveIndex(index);
                        }}
                      >
                        {cat.title}
                      </button>
                    </h3>
                  </div>

                  {/* Expanded Body Details */}
                  <div className="expanded-info">
                    <p className="card-desc">{cat.description}</p>
                    <Link to={cat.link} className="btn-card-cta">
                      Explore Coffees
                    </Link>
                  </div>

                  {/* Collapsed Arrow Indicator */}
                  <span className="collapsed-arrow-btn" aria-hidden="true">
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
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KeyCategories;
