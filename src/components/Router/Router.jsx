import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage/HomePage";
import AboutPage from "../pages/AboutPage/AboutPage";
import ResourcePage from "../pages/ResourcePage/ResourcePage";


export default function Router() {


    return(
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/resource" element={<ResourcePage />} />
        </Routes>
    );
}