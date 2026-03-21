import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, BookOpen } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-content">
          <h1 className="hero-title">Welcome to Dwangwa CCAP Mission Church</h1>
          <p className="hero-subtitle">
            Growing Together in Faith, Serving in Love, and Glorifying God in Everything We Do.
          </p>
          <div className="flex justify-center gap-md">
            <Link to="/about" className="btn btn-secondary">Our Story</Link>
            <Link to="/sermons" className="btn btn-primary" style={{ border: '2px solid var(--color-white)' }}>Latest Sermons</Link>
          </div>
        </div>
      </section>

      {/* Quick Links / Features */}
      <section className="container">
        <div className="features-section">
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Calendar size={32} />
              </div>
              <h3 style={{ color: 'var(--color-primary)' }}>Upcoming Events</h3>
              <p>Join us for our weekly services and special community gatherings.</p>
              <Link to="/events" className="text-primary flex items-center justify-center gap-sm" style={{ fontWeight: 600, marginTop: '1rem', textDecoration: 'none' }}>
                View Calendar &rarr;
              </Link>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Users size={32} />
              </div>
              <h3 style={{ color: 'var(--color-primary)' }}>Our Ministries</h3>
              <p>Get involved in our diverse ministries from Youth to Women's Guild.</p>
              <Link to="/ministries" className="text-primary flex items-center justify-center gap-sm" style={{ fontWeight: 600, marginTop: '1rem', textDecoration: 'none' }}>
                Connect Now &rarr;
              </Link>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <BookOpen size={32} />
              </div>
              <h3 style={{ color: 'var(--color-primary)' }}>Sermons & Media</h3>
              <p>Catch up on recent messages and access our spiritual resources.</p>
              <Link to="/sermons" className="text-primary flex items-center justify-center gap-sm" style={{ fontWeight: 600, marginTop: '1rem', textDecoration: 'none' }}>
                Watch & Listen &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Inspirational Scripture */}
      <section className="scripture-section" style={{ marginTop: '4rem' }}>
        <div className="container">
          <BookOpen size={48} color="var(--color-secondary)" style={{ margin: '0 auto 1.5rem', opacity: 0.5 }} />
          <blockquote className="scripture-text">
            "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope."
          </blockquote>
          <p className="scripture-reference">— Jeremiah 29:11</p>
        </div>
      </section>

      {/* Welcome / Intro Text */}
      <section className="py-section container text-center" style={{ maxWidth: '800px' }}>
        <h2 className="section-title">A Place to Belong</h2>
        <p style={{ fontSize: '1.125rem', color: 'var(--color-text-light)', marginBottom: '2rem' }}>
          Whether you are a lifelong believer, new to the Christian faith, or simply searching for a community, 
          you are welcome here at Dwangwa CCAP Mission Church. Our doors are open to everyone seeking spiritual growth, 
          fellowship, and an opportunity to serve others.
        </p>
        <Link to="/contact" className="btn btn-outline">Plan a Visit</Link>
      </section>
    </div>
  );
};

export default Home;
