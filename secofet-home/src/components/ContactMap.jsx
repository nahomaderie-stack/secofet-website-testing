import '../styles/MapSection.css';

const ContactMap = () => {
  return (
    <section className="contact-map-section">
      <div className="contact-map-container">
        
        {/* Header Overlay Card */}
        <div className="map-header-card">
          <span className="map-tag">• Origin Sourcing Hub</span>
          <h3 className="map-location-title">Yirgacheffe, Gedeo Zone</h3>
          <p className="map-location-desc">
            Addis Ababa - Moyale Rd, SNNPR, Ethiopia
          </p>
          <a 
            href="https://maps.google.com/?q=Yirga+Chefe,+Ethiopia" 
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
            title="Secofet Yirgacheffe Sourcing Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15814.073479632837!2d38.2054178!3d6.1625805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17b6a4a1ef1eb11b%3A0x6334547c94b7a145!2sYirga%20Chefe%2C%20Ethiopia!5e0!3m2!1sen!2set!4v1700000000000!5m2!1sen!2set"
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

export default ContactMap;
