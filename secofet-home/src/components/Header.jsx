import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import Secofetlogo from '../assets/Logos/Secofet-Logo-01.svg';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 860) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="header-logo">
          <Link to="/" onClick={() => setActiveLink('Home')}>
            <img src={Secofetlogo} alt="Secofet" />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="header-nav">
          <ul>
            {/* Home */}
            <li>
              <Link
                to="/"
                className={
                  activeLink === 'Home' ? 'nav-link active' : 'nav-link'
                }
                onClick={() => setActiveLink('Home')}
              >
                Home
              </Link>
            </li>

            {/* About Us */}
            <li>
              <Link
                to="/about"
                className={
                  activeLink === 'About Us' ? 'nav-link active' : 'nav-link'
                }
                onClick={() => setActiveLink('About Us')}
              >
                About Us
              </Link>
            </li>

            {/* Anchor Sections */}
            <li>
              <a
                href="#ourcoffees"
                className={
                  activeLink === 'Our Coffees' ? 'nav-link active' : 'nav-link'
                }
                onClick={() => setActiveLink('Our Coffees')}
              >
                Our Coffees
              </a>
            </li>

            <li>
              <a
                href="#origins"
                className={
                  activeLink === 'Origins' ? 'nav-link active' : 'nav-link'
                }
                onClick={() => setActiveLink('Origins')}
              >
                Origins
              </a>
            </li>

            <li>
              <a
                href="#insidesecofet"
                className={
                  activeLink === 'Inside Secofet'
                    ? 'nav-link active'
                    : 'nav-link'
                }
                onClick={() => setActiveLink('Inside Secofet')}
              >
                Inside Secofet
              </a>
            </li>

            <li>
              <Link
                to="/contact"
                className={
                  activeLink === 'Contact Us' ? 'nav-link active' : 'nav-link'
                }
                onClick={() => setActiveLink('Contact Us')}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* Header Right Action Area */}
        <div className="header-actions">
          {/* Search Form */}
          <div className={`search-wrapper ${isSearchOpen ? 'open' : ''}`}>
            <form onSubmit={handleSearchSubmit} className="search-form">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
                autoFocus={isSearchOpen}
              />
            </form>

            <button
              type="button"
              className="search-toggle-btn"
              onClick={() => {
                setIsSearchOpen(!isSearchOpen);
                if (isSearchOpen) {
                  setSearchQuery('');
                }
              }}
              aria-label="Toggle Search"
            >
              {isSearchOpen ? (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              )}
            </button>
          </div>

          {/* Request a Quote Route Link */}
          <Link
            to="/rfq"
            className="btn-quote"
            onClick={() => setActiveLink('RFQ')}
          >
            Request a Quote
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              if (isSearchOpen) {
                setIsSearchOpen(false);
              }
            }}
            aria-label="Toggle Navigation Menu"
          >
            <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link
              to="/"
              className={activeLink === 'Home' ? 'active' : ''}
              onClick={() => {
                setActiveLink('Home');
                setIsMobileMenuOpen(false);
              }}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className={activeLink === 'About Us' ? 'active' : ''}
              onClick={() => {
                setActiveLink('About Us');
                setIsMobileMenuOpen(false);
              }}
            >
              About Us
            </Link>
          </li>

          <li>
            <a
              href="#ourcoffees"
              className={activeLink === 'Our Coffees' ? 'active' : ''}
              onClick={() => {
                setActiveLink('Our Coffees');
                setIsMobileMenuOpen(false);
              }}
            >
              Our Coffees
            </a>
          </li>

          <li>
            <a
              href="#origins"
              className={activeLink === 'Origins' ? 'active' : ''}
              onClick={() => {
                setActiveLink('Origins');
                setIsMobileMenuOpen(false);
              }}
            >
              Origins
            </a>
          </li>

          <li>
            <a
              href="#insidesecofet"
              className={activeLink === 'Inside Secofet' ? 'active' : ''}
              onClick={() => {
                setActiveLink('Inside Secofet');
                setIsMobileMenuOpen(false);
              }}
            >
              Inside Secofet
            </a>
          </li>

          <li>
            <Link
              to="/contact"
              className={activeLink === 'Contact Us' ? 'active' : ''}
              onClick={() => {
                setActiveLink('Contact Us');
                setIsMobileMenuOpen(false);
              }}
            >
              Contact Us
            </Link>
          </li>
        </ul>

        <div className="mobile-actions mobile-RFQ-btn">
          <Link
            to="/rfq"
            className="btn-quote btn-mobile-quote"
            onClick={() => {
              setActiveLink('RFQ');
              setIsMobileMenuOpen(false);
            }}
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
