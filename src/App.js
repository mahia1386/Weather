import React from "react";
import { Route, Routes } from "react-router-dom";
import MatherComponent from "./components/MatherComponent";
import AboutMe from "./components/AboutMe";
import Layout from "./components/Layout";

function App() {
    return (
        <>
            <Layout/>
            <Routes>
                <Route path="/" element={<MatherComponent />} />
                <Route path="/about" element={<AboutMe/>}/>
            </Routes>
        </>
    );
}

export default App;