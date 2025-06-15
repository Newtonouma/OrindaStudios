import './Footer.css';
import { 
    FaInstagram, 
    FaFacebookF, 
    FaTwitter, 
    FaPinterestP, 
    FaYoutube,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaClock,
    FaCamera,
    FaHeart,
    FaArrowRight
} from 'react-icons/fa';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            {/* Main Footer Content */}
            <div className="footer-container">
                {/* Brand Section */}
                <div className="footer-brand">
                    <div className="brand-header">
                        <FaCamera className="brand-icon" />
                        <h2 className="brand-name">ICONIC LENSES</h2>
                    </div>
                    <p className="brand-description">
                        Crafting visual stories that resonate. We capture the essence of life's 
                        most meaningful moments with artistic vision and professional excellence.
                    </p>
                    <div className="brand-stats">
                        <div className="stat">
                            <span className="stat-number">500+</span>
                            <span className="stat-label">Happy Clients</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">10K+</span>
                            <span className="stat-label">Photos Captured</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">5+</span>
                            <span className="stat-label">Years Experience</span>
                        </div>
                    </div>
                </div>

                {/* Services Section */}
                <div className="footer-services">
                    <h3 className="section-title">Our Services</h3>
                    <ul className="service-list">
                        <li><a href="#" className="service-link">Wedding Photography</a></li>
                        <li><a href="#" className="service-link">Portrait Sessions</a></li>
                        <li><a href="#" className="service-link">Event Coverage</a></li>
                        <li><a href="#" className="service-link">Commercial Work</a></li>
                        <li><a href="#" className="service-link">Photo Editing</a></li>
                        <li><a href="#" className="service-link">Print Services</a></li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div className="footer-contact">
                    <h3 className="section-title">Get In Touch</h3>
                    <div className="contact-info">
                        <div className="contact-item">
                            <FaEnvelope className="contact-icon" />
                            <div className="contact-details">
                                <span className="contact-label">Email</span>
                                <span className="contact-value">hello@iconiclenses.com</span>
                            </div>
                        </div>
                        <div className="contact-item">
                            <FaPhone className="contact-icon" />
                            <div className="contact-details">
                                <span className="contact-label">Phone</span>
                                <span className="contact-value">+1 (555) 123-4567</span>
                            </div>
                        </div>
                        <div className="contact-item">
                            <FaMapMarkerAlt className="contact-icon" />
                            <div className="contact-details">
                                <span className="contact-label">Studio</span>
                                <span className="contact-value">123 Photography Lane<br />Creative District, CA 90210</span>
                            </div>
                        </div>
                        <div className="contact-item">
                            <FaClock className="contact-icon" />
                            <div className="contact-details">
                                <span className="contact-label">Hours</span>
                                <span className="contact-value">Mon-Fri: 9AM-6PM<br />Weekends: By Appointment</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="footer-newsletter">
                    <h3 className="section-title">Stay Connected</h3>
                    <p className="newsletter-description">
                        Subscribe to receive our latest work, photography tips, and exclusive offers.
                    </p>
                    <form className="newsletter-form">
                        <div className="input-group">
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                required 
                                className="newsletter-input"
                            />
                            <button type="submit" className="newsletter-btn">
                                <FaArrowRight />
                            </button>
                        </div>
                    </form>
                    <div className="social-media">
                        <h4 className="social-title">Follow Our Journey</h4>
                        <div className="social-links">
                            <a href="#" className="social-link" aria-label="Instagram">
                                <FaInstagram />
                            </a>
                            <a href="#" className="social-link" aria-label="Facebook">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="social-link" aria-label="Twitter">
                                <FaTwitter />
                            </a>
                            <a href="#" className="social-link" aria-label="Pinterest">
                                <FaPinterestP />
                            </a>
                            <a href="#" className="social-link" aria-label="YouTube">
                                <FaYoutube />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <div className="footer-bottom-content">
                    <div className="copyright">
                        <p>
                            &copy; {currentYear} <span className="brand-highlight">ICONIC LENSES</span>.
                        </p>
                    </div>
                    <div className="footer-links">
                        <a href="#" className="footer-link">Privacy Policy</a>
                        <a href="#" className="footer-link">Terms of Service</a>
                        <a href="#" className="footer-link">Site Map</a>
                    </div>
                    <div className="developer-credit">
                        <p>Built by <span className="developer-highlight">Gravixel Solution - 0714453669</span></p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;