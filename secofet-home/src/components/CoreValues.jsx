import '../styles/CoreValues.css';

const valuesData = [
  {
    id: 'integrity',
    category: 'Integrity',
    headline: 'Honest relationships. Dependable business.',
    description:
      'We believe trust is built through honest communication, responsible decisions, and doing what we commit to do.',
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 11 12 14 22 4" />
      </svg>
    ),
  },
  {
    id: 'quality',
    category: 'Quality',
    headline: 'Consistent coffee quality from sourcing to export.',
    description:
      'We remain focused on protecting coffee quality throughout the stages that influence the final product.',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
  {
    id: 'partnership',
    category: 'Partnership',
    headline: 'Relationships built for the long term.',
    description:
      'We seek to build lasting relationships with farmers, suppliers, buyers, and partners based on trust, communication, and mutual value.',
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: 'responsibility',
    category: 'Responsibility',
    headline:
      'Professional and responsible participation in the coffee value chain.',
    description:
      'We take responsibility for our commitments and aim to contribute positively to the coffee value chain through professional and sustainable business practices.',
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: 'lorem-1',
    category: 'Lorem',
    headline: 'Lorem ipsum dolor sit amet, consectetuer',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam',
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: 'lorem-2',
    category: 'Lorem',
    headline: 'Lorem ipsum dolor sit amet, consectetuer',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam',
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const CoreValues = () => {
  return (
    <section className="core-values-section">
      <div className="core-values-container">
        {/* Header Grid */}
        <div className="core-values-header">
          <div className="header-left">
            <div className="badge-wrapper">
              <span className="pill-badge-outline">Core Values</span>
            </div>
            <h2 className="core-values-title">What We Stand For</h2>
          </div>

          <div className="header-right">
            <p className="core-values-lead">
              Our relationships with farmers, suppliers, buyers, and partners
              are built around a small set of principles that guide how we
              conduct business.
            </p>
          </div>
        </div>

        {/* 6-Card Values Grid */}
        <div className="values-grid">
          {valuesData.map((item) => (
            <div key={item.id} className="value-card">
              {/* Icon Badge */}
              <div className="value-icon-badge">{item.icon}</div>

              {/* Category Subtitle */}
              <span className="value-category">{item.category}</span>

              {/* Bold Main Headline */}
              <h3 className="value-headline">{item.headline}</h3>

              {/* Small Body Description */}
              <p className="value-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
