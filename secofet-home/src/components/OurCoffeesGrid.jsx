import '../styles/OurCoffeesGrid.css';
import coffeeCherriesImg from '../assets/Images/Coffee-drying-3.png';
import coffeeFarmImg from '../assets/Images/AboutSecofet3.jpg';
import coffeeDryingImg from '../assets/Images/Sidamo.jpg';
import coffeeHarvestImg from '../assets/Images/Coffee-Image.png';
import coffeeBranchImg from '../assets/Images/Coffee-cherry.png';

const coffeeCards = [
  {
    image: coffeeCherriesImg,
    alt: 'Green coffee drying on raised beds in Ethiopia',
    title: 'Grade 1',
    description: 'The top tier of the Grade 1–5 scale, with the strongest combined raw-bean and cup-quality assessment.',
  },
  {
    image: coffeeFarmImg,
    alt: 'Coffee farmers working together at a drying station',
    title: 'Grade 2',
    description: 'A high-ranking export grade, with strong results across bean condition and cup quality.',
  },
  {
    image: coffeeDryingImg,
    alt: 'Green coffee beans drying at a Sidamo coffee station',
    title: 'Grade 3',
    description: 'A balanced middle grade, assessed across both green-bean condition and cup quality.',
  },
  {
    image: coffeeHarvestImg,
    alt: 'Hands holding freshly harvested coffee cherries',
    title: 'Grade 4',
    description: 'A commercial export grade with a lower combined assessment than Grades 1–3.',
  },
  {
    image: coffeeBranchImg,
    alt: 'Red and green coffee cherries ripening on a branch',
    title: 'Grade 5',
    description: 'The lowest level in this five-grade range, offering a value-focused commercial option.',
  },
];

const OurCoffeesGrid = () => {
  return (
    <section className="our-coffees-grid-section" id="coffee-categories">
      <div className="coffees-grid-container">
        {/* Top Header Block */}
        <div className="coffees-header">
          <span className="category-kicker">Our Coffee Categories</span>
          <h2 className="coffees-title">
            Ethiopian Green <span className="serif-text">Coffee Grades</span>
          </h2>
          <p className="coffees-subtitle">
            We export a comprehensive range of specialty and commercial grade
            Arabica beans sourced directly from washing and drying stations
            across Ethiopia.
          </p>
        </div>

        {/* 5-Card Origin Image Grid */}
        <div className="category-cards-grid">
          {coffeeCards.map((card) => (
            <article
              className="category-card-box"
              key={card.title}
              tabIndex={0}
              aria-label={`${card.title}: ${card.description}`}
            >
              <img src={card.image} alt={card.alt} className="category-card-img" />
              <div className="category-card-front" aria-hidden="true">
                <h3 className="category-card-title">{card.title}</h3>
              </div>
              <div className="category-card-hover" aria-hidden="true">
                <span className="category-card-kicker">Ethiopian coffee</span>
                <h3 className="category-card-hover-title">{card.title}</h3>
                <p className="category-card-description">{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCoffeesGrid;
