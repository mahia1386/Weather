import React from "react";
import { Route, Routes } from "react-router-dom";
import MatherComponent from "./components/MatherComponent";
import AboutMe from "./components/AboutMe";
import Layout from "./components/Layout";
import NoPage from "./components/NoPage";

function App() {
    return (
        <>
            <Layout/>
            <Routes>
                <Route path="/" element={<MatherComponent />} />
                <Route path="/about" element={<AboutMe/>}/>
                <Route path="*" element={<NoPage />} />
            </Routes>
        </>
    );
}

export default App;