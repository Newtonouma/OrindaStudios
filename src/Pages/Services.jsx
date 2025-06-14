import React from 'react';
import { 
    FaCamera, 
    FaHeart, 
    FaUsers, 
    FaBuilding,
    FaEdit,
    FaPrint,
    FaCheck,
    FaStar
} from 'react-icons/fa';
import './Services.css';

function Services() {
    const services = [
        {
            id: 1,
            icon: FaHeart,
            title: 'Wedding Photography',
            description: 'Capturing your most precious moments with artistic vision and professional expertise.',
            features: ['Engagement Sessions', 'Full Day Coverage', 'Edited Gallery', 'Print Release'],
            price: 'Starting at $2,500',
            popular: true
        },
        {
            id: 2,
            icon: FaUsers,
            title: 'Portrait Sessions',
            description: 'Professional portraits that showcase your unique personality and style.',
            features: ['Individual Portraits', 'Family Sessions', 'Professional Headshots', 'Maternity Photos'],
            price: 'Starting at $350',
            popular: false
        },
        {
            id: 3,
            icon: FaCamera,
            title: 'Event Photography',
            description: 'Comprehensive coverage of your special events and celebrations.',
            features: ['Corporate Events', 'Birthday Parties', 'Anniversaries', 'Graduations'],
            price: 'Starting at $800',
            popular: false
        },
        {
            id: 4,
            icon: FaBuilding,
            title: 'Commercial Photography',
            description: 'Professional imagery for businesses, products, and marketing materials.',
            features: ['Product Photography', 'Corporate Headshots', 'Brand Photography', 'Marketing Materials'],
            price: 'Starting at $500',
            popular: false
        },
        {
            id: 5,
            icon: FaEdit,
            title: 'Photo Editing',
            description: 'Professional post-processing to enhance and perfect your images.',
            features: ['Color Correction', 'Retouching', 'Background Removal', 'Custom Edits'],
            price: 'Starting at $50',
            popular: false
        },
        {
            id: 6,
            icon: FaPrint,
            title: 'Prints & Albums',
            description: 'High-quality prints and custom albums to preserve your memories.',
            features: ['Premium Prints', 'Custom Albums', 'Canvas Prints', 'Photo Books'],
            price: 'Starting at $25',
            popular: false
        }
    ];

    return (
        <div className="services-page">
            {/* Hero Section */}
            <section className="services-hero">
                <div className="container">
                    <div className="hero-content">
                        <h1>Our <span className="highlight">Services</span></h1>
                        <p>Professional photography services tailored to capture your most important moments</p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="services-section">
                <div className="container">
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <div 
                                key={service.id} 
                                className={`service-card ${service.popular ? 'popular' : ''}`}
                                style={{animationDelay: `${index * 0.1}s`}}
                            >
                                {service.popular && <div className="popular-badge">Most Popular</div>}
                                <div className="service-icon">
                                    <service.icon />
                                </div>
                                <h3>{service.title}</h3>
                                <p className="service-description">{service.description}</p>
                                <ul className="service-features">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx}>
                                            <FaCheck className="check-icon" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <div className="service-price">{service.price}</div>
                                <button className="service-btn">Learn More</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="process-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Our Process</h2>
                        <p>How we work with you to create amazing results</p>
                    </div>
                    <div className="process-steps">
                        <div className="process-step">
                            <div className="step-number">01</div>
                            <h4>Consultation</h4>
                            <p>We discuss your vision, requirements, and preferences to understand exactly what you need.</p>
                        </div>
                        <div className="process-step">
                            <div className="step-number">02</div>
                            <h4>Planning</h4>
                            <p>We create a detailed plan including timeline, locations, and shot list for your session.</p>
                        </div>
                        <div className="process-step">
                            <div className="step-number">03</div>
                            <h4>Photography</h4>
                            <p>Professional photography session with high-end equipment and artistic expertise.</p>
                        </div>
                        <div className="process-step">
                            <div className="step-number">04</div>
                            <h4>Post-Production</h4>
                            <p>Careful editing and retouching to ensure every image meets our high standards.</p>
                        </div>
                        <div className="process-step">
                            <div className="step-number">05</div>
                            <h4>Delivery</h4>
                            <p>Final gallery delivered digitally with options for prints and additional products.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="services-cta">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Book Your Session?</h2>
                        <p>Contact us today to discuss your photography needs and get a custom quote.</p>
                        <div className="cta-buttons">
                            <button className="btn-primary">Get Quote</button>
                            <button className="btn-secondary">View Portfolio</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Services;
