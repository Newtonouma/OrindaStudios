import React, { useState } from 'react';
import { 
    FaCamera, 
    FaHeart, 
    FaAward, 
    FaUsers, 
    FaMapMarkerAlt,
    FaQuoteLeft,
    FaInstagram,
    FaPlay
} from 'react-icons/fa';
import './About.css';

function About() {
    const [activeTab, setActiveTab] = useState('story');

    const stats = [
        { icon: FaCamera, number: '2500+', label: 'Photos Captured' },
        { icon: FaHeart, number: '300+', label: 'Happy Couples' },
        { icon: FaAward, number: '15+', label: 'Awards Won' },
        { icon: FaUsers, number: '5000+', label: 'Clients Served' }
    ];

    const team = [
        {
            id: 1,
            name: 'Alex Morgan',
            role: 'Lead Photographer & Founder',
            image: '/src/assets/images/testimonials/1.jpg',
            bio: 'With over 10 years of experience, Alex specializes in capturing authentic emotions and creating timeless memories.',
            instagram: '@alexmorgan_photography'
        },
        {
            id: 2,
            name: 'Sarah Chen',
            role: 'Wedding Photographer',
            image: '/src/assets/images/testimonials/2.jpg',
            bio: 'Sarah brings artistic vision and technical expertise to every wedding, ensuring your special day is perfectly documented.',
            instagram: '@sarahchen_weddings'
        },
        {
            id: 3,
            name: 'Marcus Johnson',
            role: 'Portrait Specialist',
            image: '/src/assets/images/testimonials/3.jpg',
            bio: 'Marcus excels at bringing out the best in people, creating stunning portraits that reflect personality and character.',
            instagram: '@marcusjohnson_portraits'
        }
    ];

    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title">
                            Our <span className="highlight">Story</span>
                        </h1>
                        <p className="hero-subtitle">
                            Crafting visual narratives that capture the essence of life's most precious moments
                        </p>
                        <div className="hero-quote">
                            <FaQuoteLeft className="quote-icon" />
                            <p>"Photography is the story I fail to put into words"</p>
                            <span className="quote-author">- Destin Sparks</span>
                        </div>
                    </div>
                    <div className="hero-image">
                        <img src="/src/assets/images/background1.jpg" alt="Photography Studio" />
                        <div className="play-button">
                            <FaPlay />
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="container">
                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-card" style={{animationDelay: `${index * 0.1}s`}}>
                                <div className="stat-icon">
                                    <stat.icon />
                                </div>
                                <div className="stat-number">{stat.number}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="about-content">
                <div className="container">
                    <div className="content-tabs">
                        <div className="tab-buttons">
                            <button 
                                className={`tab-btn ${activeTab === 'story' ? 'active' : ''}`}
                                onClick={() => setActiveTab('story')}
                            >
                                Our Story
                            </button>
                            <button 
                                className={`tab-btn ${activeTab === 'mission' ? 'active' : ''}`}
                                onClick={() => setActiveTab('mission')}
                            >
                                Our Mission
                            </button>
                            <button 
                                className={`tab-btn ${activeTab === 'approach' ? 'active' : ''}`}
                                onClick={() => setActiveTab('approach')}
                            >
                                Our Approach
                            </button>
                        </div>

                        <div className="tab-content">
                            {activeTab === 'story' && (
                                <div className="tab-panel story-panel">
                                    <div className="panel-grid">
                                        <div className="panel-text">
                                            <h2>The Beginning</h2>
                                            <p>
                                                Iconic Lenses was born from a passion for storytelling through the lens. 
                                                Founded in 2014, our journey began with a simple belief: every moment 
                                                has a story worth telling, and every story deserves to be captured beautifully.
                                            </p>
                                            <p>
                                                What started as a small studio with big dreams has evolved into a 
                                                premier photography service, trusted by hundreds of clients to document 
                                                their most important life events.
                                            </p>
                                            <div className="highlight-box">
                                                <FaMapMarkerAlt className="location-icon" />
                                                <div>
                                                    <h4>Based in California</h4>
                                                    <p>Serving clients worldwide with our unique artistic vision</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="panel-image">
                                            <img src="/src/assets/images/background2.jpg" alt="Our Studio" />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'mission' && (
                                <div className="tab-panel mission-panel">
                                    <div className="panel-grid">
                                        <div className="panel-image">
                                            <img src="/src/assets/images/background3.jpg" alt="Our Mission" />
                                        </div>
                                        <div className="panel-text">
                                            <h2>Our Mission</h2>
                                            <p>
                                                We believe that photography is more than just capturing images – 
                                                it's about preserving emotions, freezing time, and creating 
                                                heirlooms that will be cherished for generations.
                                            </p>
                                            <div className="mission-points">
                                                <div className="mission-point">
                                                    <h4>Authentic Storytelling</h4>
                                                    <p>We capture genuine moments and real emotions</p>
                                                </div>
                                                <div className="mission-point">
                                                    <h4>Artistic Excellence</h4>
                                                    <p>Every image is crafted with artistic vision and technical precision</p>
                                                </div>
                                                <div className="mission-point">
                                                    <h4>Client-Centered Service</h4>
                                                    <p>Your vision guides our creative process from start to finish</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'approach' && (
                                <div className="tab-panel approach-panel">
                                    <div className="approach-content">
                                        <h2>Our Creative Process</h2>
                                        <div className="process-steps">
                                            <div className="process-step">
                                                <div className="step-number">01</div>
                                                <h4>Discovery</h4>
                                                <p>We start by understanding your vision, style preferences, and the story you want to tell.</p>
                                            </div>
                                            <div className="process-step">
                                                <div className="step-number">02</div>
                                                <h4>Planning</h4>
                                                <p>Detailed planning ensures every moment is captured perfectly, from timeline to location scouting.</p>
                                            </div>
                                            <div className="process-step">
                                                <div className="step-number">03</div>
                                                <h4>Capture</h4>
                                                <p>On the day, we blend into the background, capturing natural moments as they unfold.</p>
                                            </div>
                                            <div className="process-step">
                                                <div className="step-number">04</div>
                                                <h4>Artistry</h4>
                                                <p>Post-production magic brings out the best in every image, enhancing the natural beauty.</p>
                                            </div>
                                            <div className="process-step">
                                                <div className="step-number">05</div>
                                                <h4>Delivery</h4>
                                                <p>Your finished gallery is delivered with love, ready to be shared and treasured forever.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="team-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Meet Our Team</h2>
                        <p>The talented individuals behind every perfect shot</p>
                    </div>
                    <div className="team-grid">
                        {team.map((member, index) => (
                            <div key={member.id} className="team-card" style={{animationDelay: `${index * 0.2}s`}}>
                                <div className="team-image">
                                    <img src={member.image} alt={member.name} />
                                    <div className="team-overlay">
                                        <a href="#" className="instagram-link">
                                            <FaInstagram />
                                            {member.instagram}
                                        </a>
                                    </div>
                                </div>
                                <div className="team-info">
                                    <h3>{member.name}</h3>
                                    <span className="team-role">{member.role}</span>
                                    <p>{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="about-cta">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Create Something Beautiful?</h2>
                        <p>Let's discuss how we can capture your story in the most beautiful way possible.</p>
                        <div className="cta-buttons">
                            <button className="btn-primary">Get In Touch</button>
                            <button className="btn-secondary">View Portfolio</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
