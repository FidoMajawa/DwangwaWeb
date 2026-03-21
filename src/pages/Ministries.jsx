import React, { useState, useEffect } from 'react';
import { Users, Music, Heart, Sun, Bookmark } from 'lucide-react';

const iconsMap = {
  Users: <Users size={40} color="var(--color-secondary)" />,
  Music: <Music size={40} color="var(--color-secondary)" />,
  Heart: <Heart size={40} color="var(--color-secondary)" />,
  Sun: <Sun size={40} color="var(--color-secondary)" />,
  Bookmark: <Bookmark size={40} color="var(--color-secondary)" />
};

const Ministries = () => {
  const [ministries, setMinistries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/ministries')
      .then(res => res.json())
      .then(data => {
        setMinistries(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="ministries-page">
      <div className="page-header" style={{ backgroundColor: 'var(--color-primary-dark)', padding: 'var(--space-3xl) 0', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h1 className="page-title" style={{ fontSize: '3rem', margin: 0 }}>Our Ministries</h1>
          <p className="page-subtitle" style={{ fontSize: '1.25rem', opacity: 0.9, marginTop: 'var(--space-sm)' }}>
            Find your place to serve, grow, and connect.
          </p>
        </div>
      </div>

      <section className="content-section bg-light" style={{ padding: 'var(--space-3xl) 0', minHeight: '50vh' }}>
        <div className="container">
          {loading ? (
            <div style={{ textAlign: 'center', padding: '2rem' }}>Loading ministries...</div>
          ) : ministries.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '2rem' }}>No ministries found.</div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {ministries.map((min) => (
                <div key={min.id} style={{ background: 'var(--color-surface)', padding: 'var(--space-xl)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', transition: 'transform 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  <div style={{ marginBottom: 'var(--space-md)' }}>
                    {iconsMap[min.iconName] || iconsMap['Users']}
                  </div>
                  <h3 style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-sm)' }}>{min.title}</h3>
                  <p style={{ color: 'var(--color-text-light)', marginBottom: 'var(--space-md)' }}>{min.description}</p>
                  <div style={{ padding: 'var(--space-sm)', backgroundColor: 'var(--color-background)', borderRadius: 'var(--radius-sm)', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-primary)' }}>
                    Meeting Time: {min.meeting}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Ministries;
