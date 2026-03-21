import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Church } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column">
            <div className="flex items-center gap-sm" style={{ marginBottom: '1rem' }}>
              <Church color="var(--color-secondary)" size={32} />
              <h3 style={{ margin: 0 }}>Dwangwa CCAP</h3>
            </div>
            <p>Sharing the love of Christ and serving our community through faith, hope, and love.</p>
          </div>
          
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/ministries">Ministries</Link></li>
              <li><Link to="/sermons">Sermons & Resources</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Contact Us</h3>
            <ul className="footer-links">
              <li className="flex items-center gap-sm">
                <MapPin size={18} color="var(--color-secondary)" />
                <span>Dwangwa, Nkhotakota, Malawi</span>
              </li>
              <li className="flex items-center gap-sm">
                <Phone size={18} color="var(--color-secondary)" />
                <span>+265 (0) 000 000 000</span>
              </li>
              <li className="flex items-center gap-sm">
                <Mail size={18} color="var(--color-secondary)" />
                <span>info@dwangwaccap.org</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Dwangwa CCAP Mission Church. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
