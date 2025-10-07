import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Landing/Home";


const AllRouting = () => {
    return (
        <div>
            <div className="min-h-screen">
                <Router>
                    <Routes>
                        {/* Public Routes */}
                        <Route path="/" element={<Home />} />
                    </Routes>
                </Router>

            </div>

        </div>
    );
};

export default AllRouting;

