import './Navbar.css';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiMenu, FiX, FiCamera } from 'react-icons/fi';

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);    const toggleMenu = () => {
        console.log('Mobile menu toggle clicked, current state:', menuOpen);
        setMenuOpen(!menuOpen);
        console.log('Mobile menu new state:', !menuOpen);
    };

    const toggleSearch = () => {
        setSearchOpen(!searchOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };    const navItems = [
        { name: 'Home', to: '/' },
        { name: 'About', to: '/about' },
        { name: 'Services', to: '/services' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Contact', to: '/contact' },
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
            <div className="nav-container">
                {/* Logo */}
                <div className="logo">
                    <FiCamera className="logo-icon" />
                    <span className="logo-text">ICONIC LENSES</span>
                </div>                {/* Desktop Navigation - Centered */}                <div className="nav-center">
                    <div className="nav-links desktop-nav">
                        {navItems.map((item, index) => (
                            item.to ? (
                                <Link 
                                    key={index} 
                                    to={item.to} 
                                    className="nav-link"
                                    onClick={closeMenu}
                                >
                                    {item.name}
                                </Link>
                            ) : (
                                <a 
                                    key={index} 
                                    href={item.href} 
                                    className="nav-link"
                                    onClick={closeMenu}
                                >
                                    {item.name}
                                </a>
                            )
                        ))}
                    </div>
                </div>{/* Right Side Actions */}
                <div className="nav-actions">
                    <button className="book-now-btn">
                        Book Now
                    </button>
                    
                    <button 
                        className="search-toggle"
                        onClick={toggleSearch}
                        aria-label="Toggle search"
                    >
                        <FiSearch />
                    </button>
                    
                    <button 
                        className={`mobile-toggle ${menuOpen ? 'active' : ''}`}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>                {/* Mobile Navigation */}
                <div className={`mobile-nav ${menuOpen ? 'active' : ''}`}>
                    <div className="mobile-nav-content">
                        {/* Debug indicator */}
                        <div style={{
                            color: 'red', 
                            fontSize: '12px', 
                            marginBottom: '10px'
                        }}>
                            Menu state: {menuOpen ? 'OPEN' : 'CLOSED'}
                        </div>
                        {navItems.map((item, index) => (
                            item.to ? (
                                <Link 
                                    key={index} 
                                    to={item.to} 
                                    className="mobile-nav-link"
                                    onClick={closeMenu}
                                >
                                    {item.name}
                                </Link>
                            ) : (
                                <a 
                                    key={index} 
                                    href={item.href} 
                                    className="mobile-nav-link"
                                    onClick={closeMenu}
                                >
                                    {item.name}
                                </a>
                            )
                        ))}
                        <button className="mobile-book-now-btn" onClick={closeMenu}>
                            Book Now
                        </button>
                    </div>
                </div>

                {/* Search Bar */}
                <div className={`search-bar ${searchOpen ? 'active' : ''}`}>
                    <div className="search-input-wrapper">
                        <FiSearch className="search-icon" />
                        <input 
                            type="text" 
                            placeholder="Search galleries..." 
                            className="search-input"
                        />
                        <button 
                            className="search-close"
                            onClick={toggleSearch}
                            aria-label="Close search"
                        >
                            <FiX />
                        </button>
                    </div>
                </div>

                {/* Overlay for mobile menu */}
                {menuOpen && <div className="nav-overlay" onClick={closeMenu}></div>}
            </div>
        </nav>
    )
}

export default Navbar;
