import React from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <div className="bg-primary/90 pt-20 pb-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 mt-8">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 drop-shadow-md text-secondary">Contact Us</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">We'd love to hear from you. Get in touch with us!</p>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-[50vh]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">
          
          {/* Contact Info */}
          <div>
            <h2 className="font-heading text-3xl font-bold text-primary mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-secondary rounded-full inline-block"></span> Get In Touch
            </h2>
            <div className="space-y-8">
              <div className="flex gap-4 items-start group">
                <div className="bg-secondary/20 text-primary p-4 rounded-full group-hover:bg-secondary group-hover:text-primary-dark transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-1">Our Location</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">Dwangwa, T/A Simlemba,<br/>Kasungu, Malawi</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start group">
                <div className="bg-secondary/20 text-primary p-4 rounded-full group-hover:bg-secondary group-hover:text-primary-dark transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-1">Phone Number</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">+265 (0) 000 000 000</p>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="bg-secondary/20 text-primary p-4 rounded-full group-hover:bg-secondary group-hover:text-primary-dark transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-1">Email Address</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">info@dwangwaccap.org</p>
                </div>
              </div>
            </div>

            {/* Fake Map */}
            <div className="mt-12 w-full h-80 bg-slate-200 rounded-2xl flex items-center justify-center border border-slate-300 text-slate-500 font-medium overflow-hidden relative group">
              <div className="absolute inset-0 bg-primary/5 transition-colors group-hover:bg-primary/0"></div>
              [ Interactive Map Integration Here ]
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100">
            <h2 className="font-heading text-3xl font-bold text-primary mb-8">Send a Message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block mb-2 font-semibold text-slate-700">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-body bg-slate-50" 
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold text-slate-700">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-body bg-slate-50" 
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold text-slate-700">Subject</label>
                <input 
                  type="text" 
                  placeholder="How can we help you?" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-body bg-slate-50" 
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold text-slate-700">Message</label>
                <textarea 
                  rows="5" 
                  placeholder="Your message here..." 
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-body bg-slate-50 resize-y"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-4 mt-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-all flex justify-center items-center gap-2 shadow-md hover:shadow-lg"
              >
                Send Message <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
