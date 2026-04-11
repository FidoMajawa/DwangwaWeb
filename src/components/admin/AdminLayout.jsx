import React, { useState } from 'react';
import { NavLink, Outlet, Navigate, useNavigate } from 'react-router-dom';
import { Settings, Calendar, FileText, Users, LogOut, Home, Menu, X } from 'lucide-react';

const AdminLayout = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
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

  const linkStyle = ({ isActive }) => 
    `flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-all duration-200 font-medium ${
      isActive 
        ? 'bg-secondary/20 text-secondary' 
        : 'text-white hover:bg-white/10'
    }`;

  const navLinks = (
    <nav className="flex-1 flex flex-col mt-6">
      <NavLink to="/admin/dashboard" className={linkStyle} onClick={() => setIsMobileOpen(false)} end><Home size={20} /> Dashboard</NavLink>
      <NavLink to="/admin/news" className={linkStyle} onClick={() => setIsMobileOpen(false)}><FileText size={20} /> Manage News</NavLink>
      <NavLink to="/admin/events" className={linkStyle} onClick={() => setIsMobileOpen(false)}><Calendar size={20} /> Manage Events</NavLink>
      <NavLink to="/admin/sermons" className={linkStyle} onClick={() => setIsMobileOpen(false)}><Settings size={20} /> Manage Sermons</NavLink>
      <NavLink to="/admin/leaders" className={linkStyle} onClick={() => setIsMobileOpen(false)}><Users size={20} /> Manage Leaders</NavLink>
      <NavLink to="/admin/ministries" className={linkStyle} onClick={() => setIsMobileOpen(false)}><Users size={20} /> Manage Ministries</NavLink>
      <NavLink to="/admin/gallery" className={linkStyle} onClick={() => setIsMobileOpen(false)}><FileText size={20} /> Manage Gallery</NavLink>
    </nav>
  );

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden relative">
      
      {/* Mobile Header Bar */}
      <div className="md:hidden absolute top-0 left-0 right-0 h-16 bg-primary-dark flex items-center justify-between px-4 z-40 shadow-md">
        <h2 className="text-xl font-bold text-secondary">Admin Panel</h2>
        <button onClick={() => setIsMobileOpen(true)} className="text-white p-2">
          <Menu size={28} />
        </button>
      </div>

      {/* Overlay for Mobile */}
      {isMobileOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/60 z-40 transition-opacity"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-primary-dark text-white flex flex-col p-6 shadow-xl
        transform transition-transform duration-300 ease-in-out
        md:relative md:translate-x-0
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex items-center justify-between mb-4 mt-2 md:mt-0">
          <h2 className="text-2xl font-bold text-secondary tracking-wide">Admin Panel</h2>
          <button onClick={() => setIsMobileOpen(false)} className="md:hidden text-slate-300 hover:text-white">
            <X size={24} />
          </button>
        </div>
        
        {navLinks}

        <button 
          onClick={handleLogout} 
          className="flex items-center gap-3 px-4 py-3 text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded-lg mt-auto font-bold transition-colors w-full"
        >
          <LogOut size={20} /> Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden pt-16 md:pt-0">
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
