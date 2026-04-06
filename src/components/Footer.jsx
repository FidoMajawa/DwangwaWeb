import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Church, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white pt-16 pb-8 border-t-4 border-secondary mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Col */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white p-1 rounded-full">
                <img src="/logo.png" alt="Dwangwa CCAP Logo" className="h-10 w-10 object-contain rounded-full" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-white mb-0">Dwangwa CCAP</h3>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Sharing the love of Christ and serving our community through faith, hope, and love. Join us as we grow together in spirit and truth.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary-dark transition-colors text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary-dark transition-colors text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary-dark transition-colors text-white">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="w-4 h-1 bg-secondary rounded-full"></span> Quick Links
            </h4>
            <ul className="space-y-3">
              {[{name: 'Home', path: '/'}, {name: 'About Us', path: '/about'}, {name: 'Ministries', path: '/ministries'}, {name: 'Sermons', path: '/sermons'}, {name: 'Events', path: '/events'}, {name: 'Contact', path: '/contact'}].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-300 hover:text-secondary transition-colors inline-block hover:translate-x-1 transform duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ministries */}
          <div>
            <h4 className="font-heading text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="w-4 h-1 bg-secondary rounded-full"></span> Ministries
            </h4>
            <ul className="space-y-3">
              {['Men\'s Guild', 'Women\'s Guild', 'Youth Ministry', 'Sunday School', 'Choir'].map((ministry) => (
                <li key={ministry}>
                  <Link to="/ministries" className="text-slate-300 hover:text-secondary transition-colors inline-block hover:translate-x-1 transform duration-200">
                    {ministry}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Us */}
          <div>
            <h4 className="font-heading text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="w-4 h-1 bg-secondary rounded-full"></span> Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-secondary shrink-0 mt-1" />
                <span className="text-slate-300">Dwangwa, T/A Simlemba, Kasungu, Malawi</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-secondary shrink-0" />
                <span className="text-slate-300">+265 (0) 000 000 000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-secondary shrink-0" />
                <span className="text-slate-300">info@dwangwaccap.org</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Dwangwa CCAP Mission Church. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/admin/login" className="hover:text-white transition-colors">Admin Login</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
