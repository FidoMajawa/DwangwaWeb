import React, { useState } from 'react';
import { NavLink, Outlet, Navigate, useNavigate } from 'react-router-dom';
import { LogOut, Menu, X } from 'lucide-react';

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
    `text-sm font-medium px-4 py-2 rounded-md transition-colors whitespace-nowrap ${
      isActive 
        ? 'bg-blue-50 text-blue-700' 
        : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
    }`;

  const navLinks = (
    <>
      <NavLink to="/admin/dashboard" className={linkStyle} onClick={() => setIsMobileOpen(false)} end>Dashboard</NavLink>
      <NavLink to="/admin/news" className={linkStyle} onClick={() => setIsMobileOpen(false)}>News</NavLink>
      <NavLink to="/admin/events" className={linkStyle} onClick={() => setIsMobileOpen(false)}>Events</NavLink>
      <NavLink to="/admin/sermons" className={linkStyle} onClick={() => setIsMobileOpen(false)}>Sermons</NavLink>
      <NavLink to="/admin/leaders" className={linkStyle} onClick={() => setIsMobileOpen(false)}>Leadership</NavLink>
      <NavLink to="/admin/ministries" className={linkStyle} onClick={() => setIsMobileOpen(false)}>Ministries</NavLink>
      <NavLink to="/admin/gallery" className={linkStyle} onClick={() => setIsMobileOpen(false)}>Gallery</NavLink>
    </>
  );

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      
      {/* Top Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo area */}
            <div className="flex-shrink-0 flex items-center pr-6">
              <span className="text-primary font-heading font-bold text-xl tracking-tight">Admin Portal</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex ml-4 flex-1 space-x-1 overflow-x-auto py-2 items-center">
              {navLinks}
            </nav>

            {/* Logout button (Desktop) */}
            <div className="hidden md:flex flex-shrink-0 items-center ml-6 border-l border-slate-200 pl-6">
              <button 
                onClick={handleLogout} 
                className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-red-600 transition-colors"
                title="Logout"
              >
                <LogOut size={18} /> Logout
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button 
                onClick={() => setIsMobileOpen(!isMobileOpen)} 
                className="text-slate-500 hover:text-primary p-2"
              >
                {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileOpen && (
          <div className="md:hidden border-t border-slate-100 bg-white shadow-inner">
            <div className="pt-2 pb-4 px-4 flex flex-col space-y-1">
              {navLinks}
              <button 
                onClick={handleLogout} 
                className="flex items-center gap-2 px-4 py-2 mt-4 text-sm font-medium text-red-500 hover:bg-red-50 rounded-md w-full text-left"
              >
                <LogOut size={16} /> Logout
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
