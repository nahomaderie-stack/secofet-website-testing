import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ExportLogistics.css';
import exportImage from '../assets/Images/Truck-loading-2.jpg';

const carouselImages = [
    {
        id: 1,
        src: exportImage,
        alt: 'Secofet Coffee Container Loading'
    },
    {
        id: 2,
        src: exportImage,
        alt: 'Port Logistics and Freight Shipments'
    },
    {
        id: 3,
        src: exportImage,
        alt: 'Green Coffee Export Preparation'
    }
];

const ExportLogistics = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    return (
        /* Add id="export-logistics" here on the root section tag */
        <section className="export-logistics-section" id="export-logistics">
            <div className="export-logistics-container">

                {/* Left Dark Content Panel */}
                <div className="export-text-panel">
                    <div className="text-panel-content">

                        {/* Headline */}
                        <h2 className="export-main-title">
                            Export & <span className="serif-text">Logistics</span>
                        </h2>

                        {/* Sub-headline */}
                        <h3 className="export-sub-title">
                            Preparing Coffee for <span className="light-text">International Shipment</span>
                        </h3>

                        {/* Body Paragraphs */}
                        <p className="export-desc-paragraph">
                            Once coffee has been prepared and confirmed against the relevant requirements, it moves into the export stage.
                        </p>

                        <p className="export-desc-paragraph">
                            Secofet coordinates the necessary export preparation and shipment activities according to the requirements of each transaction.
                        </p>

                        {/* Bottom Actions Row */}
                        <div className="export-actions-row">
                            <Link to="/rfq" className="btn-pill-white">
                                Request Documentation
                            </Link>

                            <Link to="/request-sample" className="btn-link-underline">
                                Request a Sample ↗
                            </Link>
                        </div>

                    </div>
                </div>

                {/* Right Photo Carousel Panel */}
                <div className="export-media-panel">
                    <img
                        src={carouselImages[activeSlide].src}
                        alt={carouselImages[activeSlide].alt || 'Export Logistics'}
                        className="export-slide-img"
                    />

                    {/* Carousel Pagination Dots */}
                    <div className="carousel-dots-wrapper">
                        {carouselImages.map((_, index) => (
                            <button
                                key={index}
                                className={`dot-btn ${activeSlide === index ? 'active' : ''}`}
                                onClick={() => setActiveSlide(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ExportLogistics;
