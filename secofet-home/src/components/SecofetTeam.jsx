import { useRef } from 'react';
import '../styles/SecofetTeam.css';

// SVG Placeholder Helper (Light grey background with dark icon)
const createPlaceholder = (name) =>
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="800" viewBox="0 0 600 800"><rect width="100%" height="100%" fill="%23d1d5db"/><circle cx="300" cy="320" r="120" fill="%239ca3af"/><path d="M120 700 C 120 500, 480 500, 480 700 Z" fill="%239ca3af"/><text x="50%" y="750" font-family="sans-serif" font-size="28" font-weight="bold" fill="%234b5563" text-anchor="middle">${encodeURIComponent(name)}</text></svg>`;

const teamMembers = [
    {
        id: 1,
        name: 'Addis Alessa',
        role: 'CEO & Founder',
        bio: 'Addis has over 15 years of experience in strategic leadership and Ethiopian coffee export operations.',
        image: createPlaceholder('Addis Alessa'),
        linkedin: '#',
        twitter: '#',
        instagram: '#'
    },
    {
        id: 2,
        name: 'Nahom Tadesse',
        role: 'dolor sit amet',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: createPlaceholder('Nahom Tadesse'),
        linkedin: '#',
        twitter: '#',
        instagram: '#'
    },
    {
        id: 3,
        name: 'Phillip Ekstrom',
        role: 'Head of Quality & Sourcing',
        bio: 'Q-Grader certified specialist managing origin washing stations in Yirgacheffe, Sidama, and Gedeo.',
        image: createPlaceholder('Phillip Ekstrom'),
        linkedin: '#',
        twitter: '#',
        instagram: '#'
    },
    {
        id: 4,
        name: 'Abram Culhane',
        role: 'Head of Export Operations',
        bio: 'Directing port logistics, customs compliance, and contract fulfillment for international buyers.',
        image: createPlaceholder('Abram Culhane'),
        linkedin: '#',
        twitter: '#',
        instagram: '#'
    },
    {
        id: 5,
        name: 'Sophia Chen',
        role: 'Client Relations Manager',
        bio: 'Connecting specialty roasters and commercial buyers with seamless sample requests and order tracking.',
        image: createPlaceholder('Sophia Chen'),
        linkedin: '#',
        twitter: '#',
        instagram: '#'
    },
    {
        id: 6,
        name: 'Sophia Chen',
        role: 'Client Relations Manager',
        bio: 'Connecting specialty roasters and commercial buyers with seamless sample requests and order tracking.',
        image: createPlaceholder('Sophia Chen'),
        linkedin: '#',
        twitter: '#',
        instagram: '#'
    }
];

const SecofetTeam = () => {
    const scrollContainerRef = useRef(null);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === 'left' ? -320 : 320;
            scrollContainerRef.current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="team-section">
            <div className="team-container">

                {/* Section Header */}
                <div className="team-header">
                    <div className="header-left">
                        <span className="badge-outline">Our Team</span>
                        <h2 className="team-title">
                            Meet the producers, partners, professionals,<br />
                            and <span className="serif-text">Secofet team members</span> who contribute to<br />
                            every coffee we bring to market.
                        </h2>
                    </div>

                    {/* Slider Controls */}
                    <div className="slider-controls">
                        <button
                            className="slider-btn"
                            onClick={() => scroll('left')}
                            aria-label="Previous Slide"
                        >
                            ←
                        </button>
                        <button
                            className="slider-btn active-blue"
                            onClick={() => scroll('right')}
                            aria-label="Next Slide"
                        >
                            →
                        </button>
                    </div>
                </div>

                {/* Horizontal Card Carousel */}
                <div className="team-carousel" ref={scrollContainerRef}>
                    {teamMembers.map((member) => (
                        <div key={member.id} className="team-card">

                            {/* Normal State: Photo & Bottom Overlay */}
                            <div className="card-photo-state">
                                <img src={member.image} alt={member.name} className="member-img" />
                                <div className="photo-overlay-info">
                                    <h3 className="member-name">{member.name}</h3>
                                    <p className="member-role">{member.role}</p>
                                </div>
                            </div>

                            {/* Hover State: Solid Blue Overlay */}
                            <div className="card-blue-hover-state">
                                <div className="hover-content-top">
                                    <h3 className="hover-name">{member.name}</h3>
                                    <p className="hover-role">{member.role}</p>
                                    <p className="hover-bio">{member.bio}</p>
                                </div>

                                <div className="hover-socials">
                                    <a href={member.linkedin} aria-label="LinkedIn">in</a>
                                    <a href={member.twitter} aria-label="Twitter">tw</a>
                                    <a href={member.instagram} aria-label="Instagram">ig</a>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default SecofetTeam;