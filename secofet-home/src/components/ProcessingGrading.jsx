import { useState } from 'react';
import '../styles/ProcessingGrading.css';

// Import distinct high-quality image assets for each processing stage
import washingImage from '../assets/Images/coffeewashing.jpg';
import dryingImage from '../assets/Images/drying.jpg';
import gradingImage from '../assets/Images/coffeewshing1.jpg'; // Replace with your grading/cupping photo asset

const processesData = [
  {
    id: 1,
    number: '01',
    title: 'Washing Process',
    tagline: 'Processing & Grading',
    description:
      'Freshly harvested coffee cherries are pulped immediately and fermented in clean spring water for 36 to 48 hours to remove mucilage before thorough washing.',
    image: washingImage,
    altText: 'Wet processing and washing channels for Ethiopian Arabica coffee',
  },
  {
    id: 2,
    number: '02',
    title: 'Drying Process',
    tagline: 'Processing & Grading',
    description:
      'Parchment coffee is carefully spread across elevated African raised beds, raked regularly for uniform airflow, and dried to an optimal 10.5% – 11.5% moisture level.',
    image: dryingImage,
    altText: 'Coffee parchment drying on raised African bamboo beds',
  },
  {
    id: 3,
    number: '03',
    title: 'Grading Process',
    tagline: 'Processing & Grading',
    description:
      'Dry-milled beans undergo multi-stage screen size classification, density gravity separation, and optical color sorting to meet strict ECX and SCA export standards.',
    image: gradingImage,
    altText: 'Q-grader physical inspection and optical bean sorting',
  },
];

const ProcessingGrading = () => {
  const [activeProcessId, setActiveProcessId] = useState(2); // Default to Drying Process (02)

  const activeProcess =
    processesData.find((p) => p.id === activeProcessId) || processesData[1];

  return (
    <section className="processing-grading-section" id="processing-grading">
      {/* Top Light Header Area */}
      <div className="processing-header-area">
        <div className="processing-header-container">
          <h2 className="processing-main-title">
            Processing & <span className="serif-text">Grading</span>
          </h2>
          <p className="processing-header-desc">
            From pulping and fermentation to raised bed drying and optical dry
            milling, our processing methods preserve intrinsic origin character
            and enforce rigorous export standards.
          </p>
        </div>
      </div>

      {/* Lower Dark Interactive Split Area */}
      <div className="processing-dark-area">
        <div className="processing-dark-container">
          {/* Left Column: Active Process Info & Tab Switcher */}
          <div className="processing-left-col">
            {/* Active Process Details */}
            <div className="active-process-details">
              <span className="process-kicker">{activeProcess.tagline}</span>
              <h3 className="process-display-title">{activeProcess.title}</h3>
              <p className="process-description">{activeProcess.description}</p>
            </div>

            {/* Interactive Process List Tabs */}
            <div className="process-tabs-list">
              {processesData.map((item) => {
                const isActive = item.id === activeProcessId;

                return (
                  <button
                    key={item.id}
                    className={`process-tab-row ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveProcessId(item.id)}
                  >
                    <span className="tab-title-text">
                      {item.number}. {item.title}
                    </span>
                    <span className="tab-status-icon">
                      {isActive ? 'x' : '↗'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Dynamic Framed Image Panel */}
          <div className="processing-right-col">
            <div className="image-frame-border">
              <img
                key={activeProcess.id} // key triggers smooth fade re-render when active selection changes
                src={activeProcess.image}
                alt={activeProcess.altText}
                className="framed-process-img fade-in-animation"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessingGrading;
