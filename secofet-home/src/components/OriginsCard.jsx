import SplitTextReveal from '../SplitTextAnimation/SplitTextReveal';
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

const OriginsCard = ({ selectedOrigin, onSelectOrigin }) => {
    const activeOrigin = originsData.find((item) => item.name === selectedOrigin) || originsData[1];
    const selectedId = activeOrigin.id;

    return (
        <div className="origins-wrapper">
            <div className="origins-card">
                {/* Left Column: Description & Selection List */}
                <div className="origins-left">
                    <SplitTextReveal
                        key={`${activeOrigin.id}-subtitle`}
                        as="span"
                        className="origins-tag"
                        text={activeOrigin.subtitle}
                    />
                    <SplitTextReveal
                        key={`${activeOrigin.id}-title`}
                        as="h2"
                        className="origins-title"
                        text={activeOrigin.name}
                    />

                    <div className="origins-description">
                        <SplitTextReveal
                            key={`${activeOrigin.id}-description`}
                            text={activeOrigin.description}
                        />
                        <SplitTextReveal
                            key={`${activeOrigin.id}-description-extra`}
                            text={activeOrigin.descriptionExtra}
                        />
                    </div>

                    <div className="origins-list">
                        {originsData.map((item) => {
                            const isSelected = item.id === selectedId;
                            return (
                                <button
                                    key={item.id}
                                    className={`origins-item ${isSelected ? 'active' : ''}`}
                                    type="button"
                                    aria-pressed={isSelected}
                                    onClick={() => onSelectOrigin(item.name)}
                                >
                                    <span className="origins-item-name">
                                        {item.id}. {item.name}
                                    </span>
                                    <span className="origins-item-icon">
                                        {isSelected ? '✕' : '↗'}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Right Column: Key Details Spec Card */}
                <div className="origins-right">
                    <div className="spec-card">
                        <div className="spec-group">
                            <label className="spec-label">Location</label>
                            <SplitTextReveal
                                key={`${activeOrigin.id}-location`}
                                className="spec-value"
                                text={activeOrigin.specs.location}
                            />
                        </div>

                        <div className="spec-group">
                            <label className="spec-label">Elevation</label>
                            <SplitTextReveal
                                key={`${activeOrigin.id}-elevation`}
                                className="spec-value"
                                text={activeOrigin.specs.elevation}
                            />
                        </div>

                        <div className="spec-group">
                            <label className="spec-label">Climate</label>
                            <SplitTextReveal
                                key={`${activeOrigin.id}-climate`}
                                className="spec-value"
                                text={activeOrigin.specs.climate}
                            />
                        </div>

                        <div className="spec-group">
                            <label className="spec-label">Coffee</label>
                            <SplitTextReveal
                                key={`${activeOrigin.id}-coffee`}
                                className="spec-value"
                                text={activeOrigin.specs.coffee}
                            />
                        </div>

                        <div className="spec-group">
                            <label className="spec-label">Processing</label>
                            <SplitTextReveal
                                key={`${activeOrigin.id}-processing`}
                                className="spec-value"
                                text={activeOrigin.specs.processing}
                            />
                        </div>

                        <div className="spec-group">
                            <label className="spec-label">Location</label>
                            <SplitTextReveal
                                key={`${activeOrigin.id}-secondary-location`}
                                className="spec-value"
                                text={activeOrigin.specs.secondaryLocation}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OriginsCard;
