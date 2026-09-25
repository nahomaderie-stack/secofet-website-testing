import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/Header.css';
import Secofetlogo from '../assets/Logos/Secofet-Logo-01.svg';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchMessage, setSearchMessage] = useState('');
  const searchWrapperRef = useRef(null);
  const searchInputRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const closeSearch = useCallback(() => {
    setIsSearchOpen(false);
    setSearchQuery('');
    setSearchMessage('');
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const query = searchQuery.trim().toLocaleLowerCase();
    if (!query) return;
    const match = navLinks.find(({ label, to }) =>
      `${label} ${to}`.toLocaleLowerCase().includes(query),
    );
    if (match) {
      navigate(match.to);
      closeSearch();
    } else {
      setSearchMessage('No matching page found. Try About, Coffee, Origins, Operations, or Contact.');
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

  useEffect(() => {
    if (!isSearchOpen) return undefined;

    searchInputRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeSearch();
    };

    const handleOutsideClick = (event) => {
      if (!searchWrapperRef.current?.contains(event.target)) closeSearch();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('pointerdown', handleOutsideClick);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('pointerdown', handleOutsideClick);
    };
  }, [isSearchOpen, closeSearch]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/our-coffees', label: 'Our Coffees' },
    { to: '/origins', label: 'Origins' },
    { to: '/operations', label: 'Our Operations' },
    { to: '/contact', label: 'Contact Us' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="header-logo">
          <Link to="/">
            <img src={Secofetlogo} alt="Secofet" />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="header-nav">
          <ul>
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={isActive(link.to) ? 'nav-link active' : 'nav-link'}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    closeSearch();
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Header Right Action Area */}
        <div className="header-actions">
          {/* Search Form */}
          <div
            ref={searchWrapperRef}
            className={`search-wrapper ${isSearchOpen ? 'open' : ''}`}
          >
            <form onSubmit={handleSearchSubmit} className="search-form" role="search">
              <input
                ref={searchInputRef}
                id="header-search-input"
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setSearchMessage('');
                }}
                className="search-input"
                aria-label="Search pages"
                aria-describedby={searchMessage ? 'search-message' : undefined}
              />
              {searchMessage && (
                <span id="search-message" className="search-message" role="status">
                  {searchMessage}
                </span>
              )}
            </form>

            <button
              type="button"
              className="search-toggle-btn"
              onClick={() => {
                if (isSearchOpen) {
                  closeSearch();
                } else {
                  setSearchMessage('');
                  setIsSearchOpen(true);
                }
              }}
              aria-label={isSearchOpen ? 'Close search' : 'Open search'}
              aria-expanded={isSearchOpen}
              aria-controls="header-search-input"
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
          >
            Request a Quote
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              if (isSearchOpen) {
                closeSearch();
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
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={isActive(link.to) ? 'active' : ''}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  closeSearch();
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mobile-actions mobile-RFQ-btn">
          <Link
            to="/rfq"
            className="btn-quote btn-mobile-quote"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Request a Quote
          </Link>
        </div>
      </div>


    </header>
  );
};

export default Header;
