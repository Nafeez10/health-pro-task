import IVFCalculator from "./components/IVFCalculator"
import IVFSuccessRate from "./components/IVFSuccessRate";
import { Route, Routes } from "react-router";
import AppLayout from "./components/AppLayout";
import MissingComponent from "./components/MissingComponent";


function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<IVFCalculator />} />
                    <Route path="/result" element={<IVFSuccessRate />} />
                    <Route path="*" element={<MissingComponent />} />
                </Route>
            </Routes>
        </>
    )
}

export default App
