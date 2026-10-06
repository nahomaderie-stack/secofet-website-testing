import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import KeyCategories from '../components/KeyCategories';
import OurOrigins from '../components/OurOrigins';
import WhySecofet from '../components/WhySecofet';
import WorkWithSecofet from '../components/WorkWithSecofet';
import SplitTextPage from '../SplitTextAnimation/SplitTextPage';

function HomePage() {
  return (
    <SplitTextPage>
      <Hero />
      <AboutUs />
      <KeyCategories />
      <OurOrigins />
      <WhySecofet />
      <WorkWithSecofet />
    </SplitTextPage>
  );
}
export default HomePage;
