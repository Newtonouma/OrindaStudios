import React, { useState } from 'react';
import { 
    FaEnvelope, 
    FaPhone, 
    FaMapMarkerAlt,
    FaClock,
    FaInstagram,
    FaFacebookF,
    FaTwitter,
    FaPinterestP,
    FaYoutube
} from 'react-icons/fa';
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
    };    const contactInfo = [        {
            icon: FaEnvelope,
            title: 'Email Us',
            value: 'mcorindastudios@gmail.com',
            description: 'Send us a message anytime',
            link: 'mailto:mcorindastudios@gmail.com',
            isClickable: true
        },
        {
            icon: FaPhone,
            title: 'Call Us',
            value: '0701689254',
            description: 'Available for bookings and inquiries',
            link: 'tel:+254701689254',
            isClickable: true
        },
        {
            icon: FaMapMarkerAlt,
            title: 'Visit Studio',
            value: 'Juja, Nairobi, Kenya',
            description: 'Professional Photography Studio',
            isClickable: false
        },
        {
            icon: FaClock,
            title: 'Studio Hours',
            value: 'Mon-Fri: 9AM-6PM',
            description: 'Weekends by appointment',
            isClickable: false
        }
    ];

    const services = [
        'Wedding Photography',
        'Portrait Session',
        'Event Photography',
        'Commercial Photography',
        'Photo Editing',
        'Other'
    ];

    return (
        <div className="contact-page">
            {/* Hero Section */}
            <section className="contact-hero">
                <div className="container">
                    <div className="hero-content">
                        <h1>Get In <span className="highlight">Touch</span></h1>
                        <p>Ready to capture your story? Let's discuss how we can create something beautiful together.</p>
                    </div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="contact-content">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Form */}
                        <div className="contact-form-section">
                            <div className="form-header">
                                <h2>Send Us a Message</h2>
                                <p>Fill out the form below and we'll get back to you within 24 hours.</p>
                            </div>
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Full Name *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Your full name"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email Address *</label>
                                        <input
                                            type="email"
                                            id="email"                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="example@gmail.com"
                                        />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="0701689254"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="service">Service Interested In</label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select a service</option>
                                            {services.map((service, index) => (
                                                <option key={index} value={service}>{service}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="date">Preferred Date</label>
                                    <input
                                        type="date"
                                        id="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        placeholder="Tell us about your photography needs, vision, and any specific requirements..."
                                    ></textarea>
                                </div>
                                <button type="submit" className="submit-btn">
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="contact-info-section">
                            <div className="info-header">
                                <h2>Contact Information</h2>
                                <p>We'd love to hear from you. Here's how you can reach us.</p>
                            </div>
                              <div className="contact-info-grid">
                                {contactInfo.map((info, index) => (
                                    <div key={index} className="contact-info-card">
                                        <div className="info-icon">
                                            <info.icon />
                                        </div>
                                        <div className="info-content">
                                            <h4>{info.title}</h4>
                                            {info.isClickable ? (
                                                <a href={info.link} className="info-value clickable-info">
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className="info-value">{info.value}</p>
                                            )}
                                            <p className="info-description">{info.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Social Media */}                            <div className="social-section">
                                <h3>Follow Our Work</h3>
                                <div className="social-links">
                                    <a href="#" className="social-link" aria-label="Instagram">
                                        <FaInstagram />
                                    </a>
                                    <a href="https://www.facebook.com/profile.php?id=61575972991699" className="social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                                        <FaFacebookF />
                                    </a>
                                    <a href="https://www.youtube.com/@fidelorinda" className="social-link" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                                        <FaYoutube />
                                    </a>
                                    <a href="#" className="social-link" aria-label="Pinterest">
                                        <FaPinterestP />
                                    </a>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="map-section">
                                <h3>Find Our Studio</h3>
                                <div className="map-placeholder">
                                    <div className="map-content">
                                        <FaMapMarkerAlt className="map-icon" />
                                        <p>123 Photography Lane<br />Creative District, CA 90210</p>
                                        <button className="directions-btn">Get Directions</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Frequently Asked Questions</h2>
                        <p>Quick answers to common questions about our photography services</p>
                    </div>
                    <div className="faq-grid">
                        <div className="faq-item">
                            <h4>How far in advance should I book?</h4>
                            <p>We recommend booking 6-12 months in advance for weddings and 2-4 weeks for portrait sessions to ensure availability.</p>
                        </div>
                        <div className="faq-item">
                            <h4>What's included in your packages?</h4>
                            <p>All packages include professional photography, basic editing, and a digital gallery. Additional services like prints and albums are available.</p>
                        </div>
                        <div className="faq-item">
                            <h4>Do you travel for shoots?</h4>
                            <p>Yes! We're available for destination weddings and shoots. Travel fees may apply depending on the location.</p>
                        </div>
                        <div className="faq-item">
                            <h4>How long until I receive my photos?</h4>
                            <p>Turnaround time is typically 2-4 weeks for weddings and 1-2 weeks for portrait sessions, depending on the package.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;
