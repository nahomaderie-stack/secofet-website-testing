import { useState } from 'react';
import OriginsHero from '../components/OriginsHero';
import OriginsCard from '../components/OriginsCard';
import OriginsGrid from '../components/OriginsGrid';
import WorkWithSecofet from '../components/WorkWithSecofet';
import OriginsMap from '../components/OriginsMap';
import SplitTextPage from '../SplitTextAnimation/SplitTextPage';

function OriginsPage() {
  const [selectedOrigin, setSelectedOrigin] = useState('Yirgacheffe');

  return (
    <SplitTextPage>
      <OriginsHero />
      <OriginsCard selectedOrigin={selectedOrigin} onSelectOrigin={setSelectedOrigin} />
      <OriginsMap origin={selectedOrigin} />
      <OriginsGrid />
      <WorkWithSecofet />
    </SplitTextPage>
  );
}
export default OriginsPage;
