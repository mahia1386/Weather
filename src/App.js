import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MatherComponent from "./components/MatherComponent";
import AboutMe from "./components/AboutMe";


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<MatherComponent />} />
                    <Route path="about" element={<AboutMe />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;