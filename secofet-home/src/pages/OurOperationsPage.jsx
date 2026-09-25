import CoffeeFarmsGrid from "../components/CoffeeFarmsGrid";
import ExportLogistics from "../components/ExportLogistics";
import InsideSecofet from "../components/InsideSecofet";
import QualityControl from "../components/QualityControl";
import WorkWithSecofet from "../components/WorkWithSecofet";

function OurOperations() {
    return (
        <>
            {/* <InsideSecofetNav /> */}
            <InsideSecofet />
            <CoffeeFarmsGrid />
            <QualityControl />
            <ExportLogistics />
            <WorkWithSecofet />
        </>
    )
}

export default OurOperations;
