import './Navbar.css';
import { useEffect } from "react";


function Navbar() {
    useEffect(() => {
        const navbar = document.querySelector(".navbar");
        document.documentElement.style.setProperty("--Navbar-height", `${navbar.offsetHeight}px`);
      }, []);
    
    return (
        <div className="navbar">
            <div className="logo">
                <h1>ICONIC LENSES</h1>
            </div>
            <div className="nav-links">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Contact</a>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
            </div>             
        </div>
    )
}

export default Navbar;