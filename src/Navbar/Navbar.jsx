import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiCamera } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    // Handle scroll effect for navbar background
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMenuOpen && !event.target.closest('.navbar')) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isMenuOpen]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Navigation items
    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' }
    ];

    // Check if current path is active
    const isActiveLink = (path) => {
        if (path === '/' && location.pathname === '/') {
            return true;
        }
        return path !== '/' && location.pathname.startsWith(path);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
            <div className="navbar-container">                {/* Logo */}
                <div className="navbar-logo">
                    <Link to="/" className="logo-link" onClick={closeMenu}>
                        <img 
                            src="/public/images/logo.jpg" 
                            alt="Mc Orinda Studios Logo" 
                            className="logo-image" 
                        />
                        <span className="logo-text">Mc Orinda Studios</span>
                    </Link>
                </div>

                {/* Desktop Navigation Links */}
                <div className="navbar-menu">
                    <ul className="navbar-nav">
                        {navItems.map((item, index) => (
                            <li key={index} className="nav-item">
                                <Link 
                                    to={item.path} 
                                    className={`nav-link ${isActiveLink(item.path) ? 'active' : ''}`}
                                    onClick={closeMenu}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Us Button & Mobile Toggle */}
                <div className="navbar-actions">
                    <Link to="/contact" className="contact-btn" onClick={closeMenu}>
                        Contact Us
                    </Link>
                    
                    {/* Mobile Menu Toggle */}
                    <button 
                        className={`mobile-toggle ${isMenuOpen ? 'active' : ''}`}
                        onClick={toggleMenu}
                        aria-label="Toggle navigation menu"
                        aria-expanded={isMenuOpen}
                    >
                        {isMenuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>

                {/* Mobile Navigation Menu */}
                <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
                    <ul className="mobile-nav">
                        {navItems.map((item, index) => (
                            <li key={index} className="mobile-nav-item">
                                <Link 
                                    to={item.path} 
                                    className={`mobile-nav-link ${isActiveLink(item.path) ? 'active' : ''}`}
                                    onClick={closeMenu}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                        <li className="mobile-nav-item">
                            <Link to="/contact" className="mobile-contact-btn" onClick={closeMenu}>
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Mobile Menu Overlay */}
                {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
            </div>
        </nav>
    );
};

export default Navbar;
