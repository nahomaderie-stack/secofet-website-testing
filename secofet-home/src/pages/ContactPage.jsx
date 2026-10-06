import ContactFAQ from '../components/ContactFAQ';
import ContactMap from '../components/ContactMap';
import ContactTeam from '../components/ContactTeam';
import WorkWithSecofet from '../components/WorkWithSecofet';
import SplitTextPage from '../SplitTextAnimation/SplitTextPage';

function ContactPage() {
  return (
    <SplitTextPage>
      <ContactTeam />
      <ContactMap />
      <ContactFAQ />
      <WorkWithSecofet />
    </SplitTextPage>
  );
}
export default ContactPage;
