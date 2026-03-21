import React, { useState, useEffect } from 'react';
import { Clock, MapPin } from 'lucide-react';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/events')
      .then(res => res.json())
      .then(data => {
        setEvents(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="events-page">
      <div className="page-header" style={{ backgroundColor: 'var(--color-primary-dark)', padding: 'var(--space-3xl) 0', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h1 className="page-title" style={{ fontSize: '3rem', margin: 0 }}>Upcoming Events</h1>
          <p className="page-subtitle" style={{ fontSize: '1.25rem', opacity: 0.9, marginTop: 'var(--space-sm)' }}>
            Stay connected with what is happening in our church family.
          </p>
        </div>
      </div>

      <section className="content-section bg-light" style={{ padding: 'var(--space-3xl) 0', minHeight: '50vh' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          
          <div className="weekly-schedule" style={{ background: 'var(--color-primary)', color: 'white', padding: 'var(--space-xl)', borderRadius: 'var(--radius-lg)', marginBottom: 'var(--space-3xl)', boxShadow: 'var(--shadow-lg)' }}>
            <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-lg)', color: 'white' }}>Weekly Services</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', textAlign: 'center' }}>
              <div>
                <h3 style={{ color: 'var(--color-secondary)' }}>Sunday</h3>
                <p>English Service: 08:00 AM</p>
                <p>Chichewa Service: 10:00 AM</p>
              </div>
              <div>
                <h3 style={{ color: 'var(--color-secondary)' }}>Wednesday</h3>
                <p>Bible Study: 05:00 PM</p>
              </div>
              <div>
                <h3 style={{ color: 'var(--color-secondary)' }}>Friday</h3>
                <p>Prayer Meeting: 05:00 PM</p>
              </div>
            </div>
          </div>

          <h2 className="section-title">Special Events</h2>
          {loading ? (
            <div style={{ textAlign: 'center', padding: '2rem' }}>Loading events...</div>
          ) : events.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '2rem' }}>No upcoming special events.</div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {events.map((evt) => (
                <div key={evt.id} style={{ display: 'flex', background: 'var(--color-surface)', borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
                  <div style={{ background: 'var(--color-secondary)', padding: 'var(--space-lg)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minWidth: '100px', color: 'var(--color-primary-dark)' }}>
                    <span style={{ fontSize: '2rem', fontWeight: 'bold', lineHeight: 1 }}>{evt.day}</span>
                    <span style={{ fontSize: '1rem', textTransform: 'uppercase', fontWeight: 600 }}>{evt.month}</span>
                  </div>
                  <div style={{ padding: 'var(--space-lg)', flex: 1 }}>
                    <h3 style={{ color: 'var(--color-primary)', margin: '0 0 0.5rem 0' }}>{evt.title}</h3>
                    <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--color-text-light)', fontSize: '0.9rem', flexWrap: 'wrap' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Clock size={16} /> {evt.time}</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><MapPin size={16} /> {evt.location}</span>
                    </div>
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

export default Events;
