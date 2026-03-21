import React from 'react';

const photos = [
  "https://images.unsplash.com/photo-1548625361-2495dc0d7b21?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1511649475669-e288648b2339?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1507692049790-de58290a4334?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1437604586419-f53eb778efef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
];

const Gallery = () => {
  return (
    <div className="gallery-page">
      <div className="page-header" style={{ backgroundColor: 'var(--color-primary)', padding: 'var(--space-3xl) 0', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h1 className="page-title" style={{ fontSize: '3rem', margin: 0 }}>Photo Gallery</h1>
          <p className="page-subtitle" style={{ fontSize: '1.25rem', opacity: 0.9, marginTop: 'var(--space-sm)' }}>
            Moments captured in our fellowship and community life.
          </p>
        </div>
      </div>

      <section className="content-section bg-surface" style={{ padding: 'var(--space-3xl) 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {photos.map((url, idx) => (
              <div key={idx} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', aspectRatio: '1/1', background: 'var(--color-background)' }}>
                <img src={url} alt={`Gallery ${idx}`} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} 
                     onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'} 
                     onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
