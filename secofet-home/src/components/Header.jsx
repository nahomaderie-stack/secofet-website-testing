import React, { useState, useEffect } from 'react';
import '../styles/Header.css';
import Secofetlogo from '../assets/Logos/Secofet-Logo-01.svg';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your quote request has been submitted.');
    setIsQuoteModalOpen(false);
  };

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
    <>
      <header className="header">
        <div className="header-container">
          {/* Logo */}
          <div className="header-logo">
            <a href="#home">
              <img src={Secofetlogo} alt="" />
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="header-nav">
            <ul>
              {[
                'Home',
                'About Us',
                'Our Coffees',
                'Origins',
                'Inside Secofet',
                'Contact Us',
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
                    className={
                      activeLink === item ? 'nav-link active' : 'nav-link'
                    }
                    onClick={() => setActiveLink(item)}
                  >
                    {item}
                  </a>
                </li>
              ))}
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
                  if (isSearchOpen) setSearchQuery('');
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

            {/* Request a Quote Button */}
            <button
              className="btn-quote"
              onClick={() => setIsQuoteModalOpen(true)}
            >
              Request a Quote
            </button>

            {/* Mobile Hamburger Icon */}
            <button
              className="mobile-menu-toggle"
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
                if (isSearchOpen) setIsSearchOpen(false);
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
            {[
              'Home',
              'About Us',
              'Our Coffees',
              'Origins',
              'Inside Secofet',
              'Contact Us',
            ].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
                  className={activeLink === item ? 'active' : ''}
                  onClick={() => {
                    setActiveLink(item);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div className="mobile-actions">
            <button
              className="btn-quote btn-mobile-quote"
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsQuoteModalOpen(true);
              }}
            >
              Request a Quote
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
