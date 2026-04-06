import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Church } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll listener for sticky header effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Leadership', path: '/leadership' },
    { name: 'Ministries', path: '/ministries' },
    { name: 'Sermons', path: '/sermons' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'News', path: '/news' },
  ];

  return (
    <>
      {/* Spacer to prevent layout shift due to fixed header */}
      <div className="h-20"></div>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-white py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group" onClick={() => setIsMenuOpen(false)}>
            <img src="/logo.png" alt="Dwangwa CCAP Logo" className="h-12 w-12 object-contain group-hover:scale-105 transition-transform" />
            <div>
              <h1 className="font-heading text-xl md:text-2xl font-bold text-primary leading-tight">Dwangwa CCAP</h1>
              <p className="text-sm text-slate-500 font-medium tracking-wide">Mission Church</p>
            </div>
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.path} 
                className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-primary bg-primary/5' : 'text-slate-600 hover:text-primary hover:bg-slate-50'}`}
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink 
              to="/contact" 
              className="ml-4 px-6 py-2.5 rounded-md text-sm font-semibold bg-secondary text-primary-dark hover:bg-secondary-light transition-all shadow-sm hover:shadow hover:-translate-y-0.5"
            >
              Contact
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-md text-slate-600 hover:text-primary hover:bg-slate-50 transition-colors focus:outline-none" 
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 origin-top overflow-hidden ${isMenuOpen ? 'max-h-[80vh] opacity-100 py-4 border-t overflow-y-auto' : 'max-h-0 opacity-0'}`}>
          <nav className="flex flex-col px-4 gap-2">
            {navLinks.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.path} 
                className={({ isActive }) => `block px-4 py-3 rounded-md text-base font-medium transition-colors ${isActive ? 'text-primary bg-primary/5' : 'text-slate-600 hover:text-primary hover:bg-slate-50'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink 
              to="/contact" 
              className="mt-2 block w-full text-center px-4 py-3 rounded-md text-base font-semibold bg-secondary text-primary-dark hover:bg-secondary-light transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
