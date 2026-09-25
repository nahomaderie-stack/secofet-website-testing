import { useState } from 'react';
import '../styles/OriginsCard.css';

const originsData = [
    {
        id: '01',
        name: 'Sidama',
        subtitle: 'Coffee From Sidama Origin',
        description:
            'Sidama is renowned for producing high-grade Arabica coffee with rich flavor profiles.',
        descriptionExtra:
            'Sourced based on seasonal yield, processing standards, and custom buyer preferences.',
        specs: {
            location: 'Southern Ethiopia',
            elevation: '1,500 - 2,200 meters',
            climate: 'Sub-tropical / High Rainfall',
            coffee: 'Ethiopian Arabica',
            processing: 'Washed / Natural / Honey',
            secondaryLocation: 'Southern Ethiopia'
        }
    },
    {
        id: '02',
        name: 'Yirgacheffe',
        subtitle: 'Coffee From Yirgacheffe Origin',
        description:
            'Yirgacheffe is one of the established coffee origins within Ethiopia\'s coffee growing area and forms part of Secofet\'s current main sourcing network.',
        descriptionExtra:
            'Our Yirgacheffe coffees are sourced according to available lots, quality, processing, grade, and buyer requirements.',
        specs: {
            location: 'Southern Ethiopia',
            elevation: '[To be Verified elevation range]',
            climate: '[To be Verified elevation range]',
            coffee: 'Ethiopian Arabica',
            processing: '[Washed / Natural / Other verified methods]',
            secondaryLocation: 'Southern Ethiopia'
        }
    },
    {
        id: '03',
        name: 'Guji',
        subtitle: 'Coffee From Guji Origin',
        description:
            'Guji offers distinct, sweet, and floral cup profiles that have gained massive international acclaim.',
        descriptionExtra:
            'Carefully selected lots processed to perfection through specialized local washing stations.',
        specs: {
            location: 'Oromia Region, Ethiopia',
            elevation: '1,800 - 2,300 meters',
            climate: 'High Altitude Temperate',
            coffee: 'Ethiopian Arabica',
            processing: 'Washed / Natural / Anaerobic',
            secondaryLocation: 'Oromia Region'
        }
    }
];

const OriginsCard = () => {
    const [selectedId, setSelectedId] = useState('02');

    const activeOrigin = originsData.find((item) => item.id === selectedId) || originsData[1];

    return (
        <div className="origins-wrapper">
            <div className="origins-card">
                {/* Left Column: Description & Selection List */}
                <div className="origins-left">
                    <span className="origins-tag">{activeOrigin.subtitle}</span>
                    <h2 className="origins-title">{activeOrigin.name}</h2>

                    <div className="origins-description">
                        <p>{activeOrigin.description}</p>
                        <p>{activeOrigin.descriptionExtra}</p>
                    </div>

                    <div className="origins-list">
                        {originsData.map((item) => {
                            const isSelected = item.id === selectedId;
                            return (
                                <div
                                    key={item.id}
                                    className={`origins-item ${isSelected ? 'active' : ''}`}
                                    onClick={() => setSelectedId(item.id)}
                                >
                                    <span className="origins-item-name">
                                        {item.id}. {item.name}
                                    </span>
                                    <span className="origins-item-icon">
                                        {isSelected ? '✕' : '↗'}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Right Column: Key Details Spec Card */}
                <div className="origins-right">
                    <div className="spec-card">
                        <div className="spec-group">
                            <label className="spec-label">Location</label>
                            <p className="spec-value">{activeOrigin.specs.location}</p>
                        </div>

                        <div className="spec-group">
                            <label className="spec-label">Elevation</label>
                            <p className="spec-value">{activeOrigin.specs.elevation}</p>
                        </div>

                        <div className="spec-group">
                            <label className="spec-label">Climate</label>
                            <p className="spec-value">{activeOrigin.specs.climate}</p>
                        </div>

                        <div className="spec-group">
                            <label className="spec-label">Coffee</label>
                            <p className="spec-value">{activeOrigin.specs.coffee}</p>
                        </div>

                        <div className="spec-group">
                            <label className="spec-label">Processing</label>
                            <p className="spec-value">{activeOrigin.specs.processing}</p>
                        </div>

                        <div className="spec-group">
                            <label className="spec-label">Location</label>
                            <p className="spec-value">{activeOrigin.specs.secondaryLocation}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OriginsCard;