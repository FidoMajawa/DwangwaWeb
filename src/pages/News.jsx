import React, { useState, useEffect } from 'react';

const News = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/news')
      .then(res => res.json())
      .then(data => {
        setNewsItems(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="news-page">
      <div className="page-header" style={{ backgroundColor: 'var(--color-primary-dark)', padding: 'var(--space-3xl) 0', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h1 className="page-title" style={{ fontSize: '3rem', margin: 0 }}>Church News</h1>
          <p className="page-subtitle" style={{ fontSize: '1.25rem', opacity: 0.9, marginTop: 'var(--space-sm)' }}>
            Stay informed with the latest updates and announcements.
          </p>
        </div>
      </div>

      <section className="content-section bg-light" style={{ padding: 'var(--space-3xl) 0', minHeight: '50vh' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          {loading ? (
            <div style={{ textAlign: 'center', padding: '3rem' }}>Loading news...</div>
          ) : newsItems.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem' }}>No news available at the moment.</div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {newsItems.map((item) => (
                <div key={item.id} style={{ background: 'var(--color-surface)', padding: 'var(--space-xl)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', borderTop: '4px solid var(--color-primary)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '0.875rem', color: 'var(--color-text-light)', fontWeight: 500 }}>{item.date}</span>
                    <span style={{ background: 'var(--color-secondary)', color: 'var(--color-primary-dark)', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase' }}>{item.category}</span>
                  </div>
                  <h3 style={{ color: 'var(--color-primary)', fontSize: '1.5rem', marginBottom: '0.75rem' }}>{item.title}</h3>
                  <p style={{ color: 'var(--color-text-light)', marginBottom: '1.5rem', whiteSpace: 'pre-wrap' }}>{item.excerpt}</p>
                  <button className="btn btn-outline" style={{ padding: '0.5rem 1rem' }}>Read More</button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default News;
