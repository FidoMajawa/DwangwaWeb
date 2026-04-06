import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h1 style={{ color: 'var(--color-secondary)', marginBottom: '2rem' }}>Welcome to the Admin Dashboard</h1>
      <p style={{ color: 'var(--color-text-light)', marginBottom: '2rem' }}>
        From here, you can manage the content for the Dwangwa CCAP website. Select a section from the sidebar to begin editing.
      </p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: 'var(--shadow-sm)' }}>
          <h3 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>News & Announcements</h3>
          <p style={{ color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>Add, edit, or remove church news articles.</p>
          <Link to="/admin/news" className="btn btn-outline" style={{ display: 'inline-block' }}>Manage News</Link>
        </div>
        
        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: 'var(--shadow-sm)' }}>
          <h3 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Events Calendar</h3>
          <p style={{ color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>Update upcoming events and weekly schedules.</p>
          <Link to="/admin/events" className="btn btn-outline" style={{ display: 'inline-block' }}>Manage Events</Link>
        </div>
        
        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: 'var(--shadow-sm)' }}>
          <h3 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Sermons & Resources</h3>
          <p style={{ color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>Upload new sermon records and study materials.</p>
          <Link to="/admin/sermons" className="btn btn-outline" style={{ display: 'inline-block' }}>Manage Sermons</Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
