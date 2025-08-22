import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage/HomePage";
import LeaguePage from "../pages/LeaguePage/LeaguePage";
import AboutPage from "../pages/AboutPage/AboutPage";
import ResourcePage from "../pages/ResourcePage/ResourcePage";
import ContactPage from "../pages/ContactPage/ContactPage";


export default function Router() {


    return(
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/league" element={<LeaguePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/resource" element={<ResourcePage />} />
            <Route path="/contact" element={<ContactPage />} />
        </Routes>
    );
}