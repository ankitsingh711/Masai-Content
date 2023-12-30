import React from 'react'
import {Route, Routes} from "react-router-dom";
import Home from "../Pages/Home";
import SectionPage from "../Pages/SectionPage";
import BookDetailsPage from "../Pages/BookDetailsPage";
import InvalidPage from "../Pages/InvalidPage";

export default function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/section/:section" element={<SectionPage />} />
                <Route path="/bookdetailspage/:id" element={<BookDetailsPage />} />
                <Route path="*" element={<InvalidPage />} />
            </Routes>
        </div>
    )
}
