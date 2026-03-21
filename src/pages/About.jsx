import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">About Us</h1>
          <p className="page-subtitle">Learn about our history, mission, and what we believe.</p>
        </div>
      </div>

      <section className="content-section bg-surface">
        <div className="container content-grid">
          <div>
            <h2 className="section-title" style={{ textAlign: 'left' }}>Our History & Heritage</h2>
            <p style={{ marginBottom: '1rem', color: 'var(--color-text-light)' }}>
              Dwangwa CCAP Mission Church is a thriving congregation belonging to the Church of Central Africa Presbyterian (CCAP). 
              Located in the heart of Dwangwa, our church has served as a spiritual home for countless families over the decades.
            </p>
            <p style={{ color: 'var(--color-text-light)' }}>
              Built on the robust theological foundation of the Reformed tradition, we are dedicated to preaching the Gospel, 
              nurturing believers, and extending Christ's love to our local community through various outreach programs.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1548625361-2495dc0d7b21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Church Building" 
              className="about-image"
            />
          </div>
        </div>
      </section>

      <section className="content-section bg-light text-center">
        <div className="container">
          <h2 className="section-title">Our Core Identity</h2>
          
          <div className="values-grid">
            <div className="value-card">
              <h3>Our Vision</h3>
              <p className="text-light">
                To be a vibrant, Christ-centered family that transforms Dwangwa and the world through the power of the Gospel.
              </p>
            </div>
            <div className="value-card">
              <h3>Our Mission</h3>
              <p className="text-light">
                To glorify God by making disciples, nurturing spiritual growth, and serving our community with love and compassion.
              </p>
            </div>
            <div className="value-card">
              <h3>Our Values</h3>
              <p className="text-light">
                Biblical fidelity, prayerful dependence, loving fellowship, compassionate outreach, and joyful worship.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section bg-surface">
        <div className="container text-center" style={{ maxWidth: '800px' }}>
          <h2 className="section-title">What We Believe</h2>
          <p style={{ color: 'var(--color-text-light)', marginBottom: '1.5rem', textAlign: 'left' }}>
            We adhere to the historic Reformed confessions of faith. We believe that:
          </p>
          <ul style={{ textAlign: 'left', color: 'var(--color-text-light)', display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingLeft: '1.5rem' }}>
            <li>The Bible is the inspired, infallible, and authoritative Word of God.</li>
            <li>There is one God, eternally existent in three persons: Father, Son, and Holy Spirit.</li>
            <li>Salvation is by grace alone, through faith alone, in Christ alone.</li>
            <li>The Church is the body of Christ, called to proclaim the Gospel and administer the sacraments (Baptism and the Lord's Supper).</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;
