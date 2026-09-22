import OurCoffeesDetail from "../components/OurCoffeesDetail";
import OurCoffeesExplore from "../components/OurCoffeesExplore";
import OurCoffeesGrid from "../components/OurCoffeesGrid";
import ProcessingGrading from "../components/ProcessingGrading";
import WorkWithSecofet from "../components/WorkWithSecofet"
import WebGoesHere from "../components/Webgoeshere";
function OurCoffeesPage() {
    return (
        <>
            <OurCoffeesExplore />
            <OurCoffeesGrid />
            <OurCoffeesDetail />
            <ProcessingGrading />
            <WorkWithSecofet />
        </>
    )
}
export default OurCoffeesPage;