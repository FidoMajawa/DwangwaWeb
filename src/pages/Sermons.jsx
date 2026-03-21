import React, { useState, useEffect } from 'react';
import { PlayCircle, Download, FileText } from 'lucide-react';

const Sermons = () => {
  const [sermons, setSermons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/sermons')
      .then(res => res.json())
      .then(data => {
        setSermons(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="sermons-page">
      <div className="page-header" style={{ backgroundColor: 'var(--color-primary)', padding: 'var(--space-3xl) 0', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h1 className="page-title" style={{ fontSize: '3rem', margin: 0 }}>Sermons & Resources</h1>
          <p className="page-subtitle" style={{ fontSize: '1.25rem', opacity: 0.9, marginTop: 'var(--space-sm)' }}>
            Listen to past messages and access study materials.
          </p>
        </div>
      </div>

      <section className="content-section bg-surface" style={{ padding: 'var(--space-3xl) 0', minHeight: '50vh' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          
          <h2 className="section-title">Latest Messages</h2>
          
          {loading ? (
            <div style={{ textAlign: 'center', padding: '2rem' }}>Loading sermons...</div>
          ) : sermons.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '2rem' }}>No sermons available.</div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {sermons.map((sermon) => (
                <div key={sermon.id} style={{ display: 'flex', flexDirection: 'column', background: 'var(--color-background)', borderRadius: 'var(--radius-md)', padding: 'var(--space-lg)', borderLeft: '4px solid var(--color-secondary)', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ flex: 1 }}>
                    <span style={{ fontSize: '0.875rem', color: 'var(--color-text-light)', fontWeight: 500, textTransform: 'uppercase' }}>{sermon.date} {sermon.series ? `• ${sermon.series}` : ''}</span>
                    <h3 style={{ color: 'var(--color-primary)', margin: '0.25rem 0' }}>{sermon.title}</h3>
                    <p style={{ color: 'var(--color-text)', marginBottom: '0.5rem' }}>Speaker: <strong>{sermon.preacher}</strong></p>
                    <p style={{ color: 'var(--color-secondary)', fontSize: '0.875rem', fontWeight: 600 }}>{sermon.scripture}</p>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '1rem', flexWrap: 'wrap' }}>
                    <button className="btn btn-primary" style={{ padding: '0.5rem 1rem', display: 'flex', gap: '0.5rem' }}>
                      <PlayCircle size={20} /> Listen
                    </button>
                    <button className="btn btn-outline" title="Download Audio" style={{ padding: '0.5rem' }}>
                      <Download size={20} />
                    </button>
                    <button className="btn btn-outline" title="Sermon Notes" style={{ padding: '0.5rem' }}>
                      <FileText size={20} />
                    </button>
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

export default Sermons;
