import OriginsHero from '../components/OriginsHero';
import OriginsCard from '../components/OriginsCard';
import OriginsGrid from '../components/OriginsGrid';
import WorkWithSecofet from '../components/WorkWithSecofet';
import OriginsMap from '../components/OriginsMap';

function OriginsPage() {
  const [selectedOrigin, setSelectedOrigin] = useState('Yirgacheffe');

  return (
    <>
      <OriginsHero />
      <OriginsCard selectedOrigin={selectedOrigin} onSelectOrigin={setSelectedOrigin} />
      <OriginsMap origin={selectedOrigin} />
      <OriginsGrid />
      <WorkWithSecofet />
    </>
  );
}
export default OriginsPage;
import { useState } from 'react';
