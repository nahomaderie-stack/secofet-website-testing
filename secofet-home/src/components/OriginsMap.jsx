import '../styles/OriginsMap.css';

const mapLocations = {
  Sidama: { label: 'Sidama, Ethiopia', search: 'Sidama, Ethiopia' },
  Yirgacheffe: { label: 'Yirgacheffe, Gedeo Zone', search: 'Yirgacheffe, Ethiopia' },
  Guji: { label: 'Guji, Oromia Region', search: 'Guji, Oromia, Ethiopia' },
};

const OriginsMap = ({ origin = 'Yirgacheffe' }) => {
  const location = mapLocations[origin] || mapLocations.Yirgacheffe;
  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(location.search)}&output=embed`;
  return (
    <section className="contact-map-section">
      <div className="contact-map-container">
        {/* Header Overlay Card */}
        <div className="map-header-card">
          <span className="map-tag">• Origin Sourcing Hub</span>
          <h3 className="map-location-title">{location.label}</h3>
          <p className="map-location-desc">
            Addis Ababa - Moyale Rd, SNNPR, Ethiopia
          </p>
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(location.search)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-open-maps"
          >
            Open in Google Maps ↗
          </a>
        </div>

        {/* Full Interactive Google Map Frame */}
        <div className="map-frame-wrapper">
          <iframe
            title={`Secofet ${origin} Sourcing Location Map`}
            src={mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="yirgacheffe-map-iframe"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default OriginsMap;
