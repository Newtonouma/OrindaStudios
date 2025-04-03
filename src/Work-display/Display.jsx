import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import SinglePictures from "../pages/Home-subpages/Single";
import GroupPictures from "../pages/Home-subpages/Group";
import HomeNavbar  from "../Pages/Home-subpages/Navbar";


function Display() {
  
  return (
    <Router>
        <HomeNavbar />
        <Routes>
            <Route path="/single" element={<SinglePictures />} />
            <Route path="/group" element={<GroupPictures />} />
        </Routes>

    </Router>
  )
}

export default Display

