import '../styles/CoffeeFarmsGrid.css';

// SVG Placeholder Generator
const createPlaceholder = (label) =>
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="800" viewBox="0 0 600 800"><rect width="100%" height="100%" fill="%232b2b2b"/><text x="50%" y="50%" font-family="sans-serif" font-size="22" font-weight="bold" fill="%236b7280" text-anchor="middle">${encodeURIComponent(label)}</text></svg>`;

const CoffeeFarmsGrid = () => {
    return (
        <section className="farms-grid-section" id="coffee-farms">
            <div className="farms-grid-container">

                {/* Main Flex/Grid Split Wrapper */}
                <div className="farms-layout-wrapper">

                    {/* Left Column: Fixed Text Content */}
                    <div className="farms-text-col">
                        <h2 className="farms-title">
                            Coffee & <span className="serif-text">Farms</span>
                        </h2>
                        <p className="farms-description">
                            A closer look at the farms, growing regions, farming communities, and cultivation practices that shape the character and quality of Secofet's coffees.
                        </p>
                    </div>

                    {/* Right Column: Pixel-Accurate Staggered Image Grid */}
                    <div className="farms-mosaic-grid">

                        {/* Box 1: Left Medium-Tall (Starts aligned under text) */}
                        <div className="mosaic-card card-1">
                            <img src={createPlaceholder('Highland Farms')} alt="Highland Farms" />
                        </div>

                        {/* Box 2: Middle Top Square */}
                        <div className="mosaic-card card-2">
                            <img src={createPlaceholder('Cherries')} alt="Cherries" />
                        </div>

                        {/* Box 3: Center Hero Tall (Pushes up above the rest) */}
                        <div className="mosaic-card card-3">
                            <img src={createPlaceholder('Gedeo Valley')} alt="Gedeo Valley" />
                        </div>

                        {/* Box 4: Far Right Medium Square */}
                        <div className="mosaic-card card-4">
                            <img src={createPlaceholder('Soil')} alt="Soil" />
                        </div>

                        {/* Box 5: Middle Bottom Wide Block */}
                        <div className="mosaic-card card-5">
                            <img src={createPlaceholder('Drying Beds')} alt="Drying Beds" />
                        </div>

                        {/* Box 6: Bottom Right Square Block */}
                        <div className="mosaic-card card-6">
                            <img src={createPlaceholder('Farmers')} alt="Farmers" />
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default CoffeeFarmsGrid;