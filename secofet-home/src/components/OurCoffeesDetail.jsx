import { Link } from 'react-router-dom';
import '../styles/OurCoffeesDetail.css';

// SVG Placeholder or import your green coffee bean photo
const darkBoxPlaceholder =
    'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600"><rect width="100%" height="100%" fill="%2322252a"/></svg>';

const OurCoffeesDetail = () => {
    return (
        <section className="coffees-detail-section">
            <div className="coffees-detail-container">

                {/* Left Column: Headline, Body, and Action CTAs */}
                <div className="coffees-detail-text-col">
                    <h2 className="detail-main-title">
                        Exceptional <span className="serif-text">Grade 1 & 2</span>
                        Arabica <span className="bold-emphasis">lots.</span>
                    </h2>

                    <p className="detail-body-desc">
                        Directly sourced from high-altitude washing stations in Yirgacheffe, Sidama, and Gedeo. Each lot undergoes rigorous physical defect assessment and cupping analysis to guarantee clean cup profiles and consistent moisture levels for international roasters.
                    </p>

                    <div className="detail-actions-row">
                        <Link to="/request-sample" className="btn-pill-black">
                            Request a Sample
                        </Link>

                        <Link to="/rfq" className="btn-underline-link">
                            Request a Quote ↗
                        </Link>
                    </div>
                </div>

                {/* Right Column: Dark Square Image Box */}
                <div className="coffees-detail-media-col">
                    <div className="media-square-box">
                        <img
                            src={darkBoxPlaceholder}
                            alt="Secofet Grade 1 Arabica Coffee"
                            className="media-box-img"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default OurCoffeesDetail;
