import AboutSecofetBanner from '../components/AboutSecofetBanner';
import AboutSecofetDetail from '../components/AboutSecofetDetail';
import CoreValues from '../components/CoreValues';
import MissionVision from '../components/MissionVision';
import SecofetTeam from '../components/SecofetTeam';
import WhatWeDo from '../components/WhatWeDo';
import WorkWithSecofet from '../components/WorkWithSecofet';
import SplitTextPage from '../SplitTextAnimation/SplitTextPage';

function AboutUsPage() {
  return (
    <SplitTextPage>
      <AboutSecofetBanner />
      <AboutSecofetDetail />
      <WhatWeDo />
      <MissionVision />
      <CoreValues />
      <SecofetTeam />
      <WorkWithSecofet />
    </SplitTextPage>
  );
}

export default AboutUsPage;
