import { Routes, Route, useLocation } from "react-router";
import Home from "./Pages/Home";
import Destination from "./Pages/Destination";
import Crew from "./Pages/Crew";
import Technology from "./Pages/Technology";

import { useEffect } from "react";
import Header from "./Components/Header";

function App() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Destination" element={<Destination />} />
                <Route path="/Crew" element={<Crew />} />
                <Route path="/Technology" element={<Technology />} />
            </Routes>
        </>
    );
}

export default App;
