import './Navbar.css';
import { useEffect, useState } from "react";

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false); // To track if scrolled

    useEffect(() => {
        const handleScroll = () => {
            // If page is scrolled more than 100px, change background color
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        // Adding scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Cleanup event listener when component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const [menuOpen, setMenuOpen] = useState(false); // To track if menu is open

    return (
        <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="logo">
                <h1>ICONIC LENSES</h1>
            </div>
            <div className='menu'onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={menuOpen ? "open-nav-links": "nav-links"} >
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
