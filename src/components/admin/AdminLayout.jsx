import React from 'react';
import { NavLink, Outlet, Navigate, useNavigate } from 'react-router-dom';
import { Settings, Calendar, FileText, Users, LogOut, Home } from 'lucide-react';

const AdminLayout = () => {
  const token = localStorage.getItem('adminToken');
  const navigate = useNavigate();

  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    navigate('/admin/login');
  };

  const linkStyle = ({ isActive }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '0.75rem 1rem',
    color: isActive ? 'var(--color-secondary)' : 'var(--color-white)',
    textDecoration: 'none',
    backgroundColor: isActive ? 'rgba(255,255,255,0.1)' : 'transparent',
    borderRadius: '8px',
    transition: 'all 0.2s',
    marginBottom: '0.5rem'
  });

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--color-background)' }}>
      {/* Sidebar */}
      <aside style={{ width: '260px', backgroundColor: 'var(--color-primary-dark)', color: 'white', padding: '2rem 1rem', display: 'flex', flexDirection: 'column' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem', paddingLeft: '1rem', color: 'var(--color-secondary)' }}>Admin Panel</h2>
        
        <nav style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <NavLink to="/admin/dashboard" style={linkStyle} end><Home size={20} /> Dashboard</NavLink>
          <NavLink to="/admin/news" style={linkStyle}><FileText size={20} /> Manage News</NavLink>
          <NavLink to="/admin/events" style={linkStyle}><Calendar size={20} /> Manage Events</NavLink>
          <NavLink to="/admin/sermons" style={linkStyle}><Settings size={20} /> Manage Sermons</NavLink>
          <NavLink to="/admin/leaders" style={linkStyle}><Users size={20} /> Leaders & Ministries</NavLink>
        </nav>

        <button onClick={handleLogout} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', color: '#ff6b6b', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontWeight: 'bold' }}>
          <LogOut size={20} /> Logout
        </button>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
