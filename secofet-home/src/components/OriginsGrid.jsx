import React from 'react';
import '../styles/OriginsGrid.css';

const gridItems = [
    {
        id: 1,
        title: 'Origin',
        text: '[Verified variety information] Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod'
    },
    {
        id: 2,
        title: 'Variety',
        text: '[Verified variety information] Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod'
    },
    {
        id: 3,
        title: 'Processing',
        text: '[Verified variety information] Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod'
    },
    {
        id: 4,
        title: 'Grade',
        text: '[Verified variety information] Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod'
    },
    {
        id: 5,
        title: 'Cup Profile',
        text: '[Verified variety information] Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod'
    },
    {
        id: 6,
        title: 'Processing',
        text: '[Verified variety information] Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod'
    }
];

const OriginsGrid = () => {
    return (
        <section className="origins-grid-section">
            <div className="origins-grid-header">
                <h2 className="origins-grid-title">
                    Understanding <br />
                    <span className="origins-grid-italic">Yirgacheffe</span> Coffee.
                </h2>
                <p className="origins-grid-subtitle">
                    The character of Yirgacheffe coffee is influenced by its origin, growing conditions, varieties, and processing methods.
                </p>
            </div>

            <div className="origins-grid-container">
                {gridItems.map((item) => (
                    <div key={item.id} className="origins-grid-card">
                        <h3 className="card-title">{item.title}</h3>

                        <div className="card-icon-container">
                            <div className="info-icon">
                                <span>i</span>
                            </div>
                        </div>

                        <p className="card-text">{item.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OriginsGrid;