import React from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="page-header" style={{ backgroundColor: 'var(--color-primary)', padding: 'var(--space-3xl) 0', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h1 className="page-title" style={{ fontSize: '3rem', margin: 0 }}>Contact Us</h1>
          <p className="page-subtitle" style={{ fontSize: '1.25rem', opacity: 0.9, marginTop: 'var(--space-sm)' }}>
            We'd love to hear from you. Get in touch with us!
          </p>
        </div>
      </div>

      <section className="content-section bg-surface" style={{ padding: 'var(--space-3xl) 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            
            {/* Contact Info */}
            <div>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>Get In Touch</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ background: 'var(--color-secondary-light)', color: 'var(--color-primary)', padding: '1rem', borderRadius: '50%' }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem', color: 'var(--color-primary)' }}>Our Location</h3>
                    <p style={{ color: 'var(--color-text-light)' }}>Dwangwa Trading Centre,<br/>Nkhotakota, Malawi</p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ background: 'var(--color-secondary-light)', color: 'var(--color-primary)', padding: '1rem', borderRadius: '50%' }}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem', color: 'var(--color-primary)' }}>Phone Number</h3>
                    <p style={{ color: 'var(--color-text-light)' }}>+265 (0) 000 000 000</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ background: 'var(--color-secondary-light)', color: 'var(--color-primary)', padding: '1rem', borderRadius: '50%' }}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem', color: 'var(--color-primary)' }}>Email Address</h3>
                    <p style={{ color: 'var(--color-text-light)' }}>info@dwangwaccap.org</p>
                  </div>
                </div>
              </div>

              {/* Fake Map */}
              <div style={{ marginTop: '3rem', width: '100%', height: '250px', background: 'var(--color-background)', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #ddd', color: 'var(--color-text-light)' }}>
                [ Interactive Map Integration Here ]
              </div>
            </div>

            {/* Contact Form */}
            <div style={{ background: 'var(--color-background)', padding: 'var(--space-2xl)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Send a Message</h2>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Full Name</label>
                  <input type="text" placeholder="John Doe" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid #ccc', fontFamily: 'var(--font-body)' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Email Address</label>
                  <input type="email" placeholder="john@example.com" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid #ccc', fontFamily: 'var(--font-body)' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Subject</label>
                  <input type="text" placeholder="How can we help you?" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid #ccc', fontFamily: 'var(--font-body)' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Message</label>
                  <textarea rows="5" placeholder="Your message here..." style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid #ccc', fontFamily: 'var(--font-body)', resize: 'vertical' }}></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
                  Send Message <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
