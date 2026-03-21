import React, { useState, useEffect } from 'react';
import './Leadership.css';

const Leadership = () => {
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/leaders')
      .then(res => res.json())
      .then(data => {
        setLeaders(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="leadership-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Church Leadership</h1>
          <p className="page-subtitle">Meet the team dedicated to serving God and our congregation.</p>
        </div>
      </div>

      <section className="content-section bg-light" style={{ minHeight: '50vh' }}>
        <div className="container">
          <h2 className="section-title">Pastors & Elders</h2>
          
          {loading ? (
             <div style={{ textAlign: 'center', padding: '2rem' }}>Loading leaders...</div>
          ) : leaders.length === 0 ? (
             <div style={{ textAlign: 'center', padding: '2rem' }}>No leaders profiles found.</div>
          ) : (
            <div className="leadership-grid">
              {leaders.map((leader) => (
                <div key={leader.id} className="leader-card">
                  <div className="leader-image-wrapper">
                    <img src={leader.imageUrl} alt={leader.name} className="leader-image" />
                  </div>
                  <div className="leader-info">
                    <h3 className="leader-name">{leader.name}</h3>
                    <div className="leader-role">{leader.role}</div>
                    <p className="leader-bio">{leader.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      
      <section className="content-section bg-surface">
        <div className="container text-center" style={{ maxWidth: '800px' }}>
          <h2 className="section-title">Church Governance</h2>
          <p style={{ color: 'var(--color-text-light)', textAlign: 'left', marginBottom: '1rem' }}>
            In accordance with the Presbyterian system of church government, our congregation is led by a body of elders, 
            known as the Session. The Session is responsible for the spiritual oversight, discipline, and direction of the church.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Leadership;
