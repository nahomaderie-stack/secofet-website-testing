import CoffeeFarmsGrid from "../components/CoffeeFarmsGrid";
import ExportLogistics from "../components/ExportLogistics";
import InsideSecofet from "../components/InsideSecofet";
import QualityControl from "../components/QualityControl";
import WorkWithSecofet from "../components/WorkWithSecofet";
import SplitTextPage from '../SplitTextAnimation/SplitTextPage';

function OurOperations() {
    return (
        <SplitTextPage>
            {/* <InsideSecofetNav /> */}
            <InsideSecofet />
            <CoffeeFarmsGrid />
            <QualityControl />
            <ExportLogistics />
            <WorkWithSecofet />
        </SplitTextPage>
    )
}

export default OurOperations;
