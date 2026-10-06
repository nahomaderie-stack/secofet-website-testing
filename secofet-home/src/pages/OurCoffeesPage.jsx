import OurCoffeesDetail from "../components/OurCoffeesDetail";
import OurCoffeesExplore from "../components/OurCoffeesExplore";
import OurCoffeesGrid from "../components/OurCoffeesGrid";
import ProcessingGrading from "../components/ProcessingGrading";
import WorkWithSecofet from "../components/WorkWithSecofet";
import SplitTextPage from '../SplitTextAnimation/SplitTextPage';

function OurCoffeesPage() {
    return (
        <SplitTextPage>
            <OurCoffeesExplore />
            <OurCoffeesGrid />
            <OurCoffeesDetail />
            <ProcessingGrading />
            <WorkWithSecofet />
        </SplitTextPage>
    )
}
export default OurCoffeesPage;
