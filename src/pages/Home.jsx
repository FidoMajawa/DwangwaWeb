import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, BookOpen, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary-dark text-white pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Image Setup */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1438283173091-5dbf5c5a3206?auto=format&fit=crop&q=80&w=2000" 
            alt="Church Hero" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary text-primary-dark text-xs font-bold tracking-wider uppercase mb-6 shadow-sm">Welcome Home</span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-md">
            Dwangwa CCAP <br className="hidden md:block"/> Mission Church
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Growing Together in Faith, Serving in Love, and Glorifying God in Everything We Do.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/about" className="px-8 py-3.5 rounded-md font-semibold bg-secondary text-primary-dark hover:bg-secondary-light transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-center">
              Our Story
            </Link>
            <Link to="/sermons" className="px-8 py-3.5 rounded-md font-semibold bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-center">
              Latest Sermons
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links / Features */}
      <section className="py-20 bg-slate-50 relative -mt-8 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 group">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                <Calendar size={32} />
              </div>
              <h3 className="font-heading text-2xl font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors">Upcoming Events</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">Join us for our weekly services and special community gatherings.</p>
              <Link to="/events" className="text-primary font-semibold flex items-center gap-2 hover:text-primary-dark group-hover:gap-3 transition-all">
                View Calendar <ArrowRight size={18} />
              </Link>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 group">
              <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-primary-dark transition-colors text-yellow-600">
                <Users size={32} />
              </div>
              <h3 className="font-heading text-2xl font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors">Our Ministries</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">Get involved in our diverse ministries from Youth to Women's Guild.</p>
              <Link to="/ministries" className="text-primary font-semibold flex items-center gap-2 hover:text-primary-dark group-hover:gap-3 transition-all">
                Connect Now <ArrowRight size={18} />
              </Link>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 group">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                <BookOpen size={32} />
              </div>
              <h3 className="font-heading text-2xl font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors">Sermons & Media</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">Catch up on recent messages and access our spiritual resources.</p>
              <Link to="/sermons" className="text-primary font-semibold flex items-center gap-2 hover:text-primary-dark group-hover:gap-3 transition-all">
                Watch & Listen <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Inspirational Scripture */}
      <section className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <BookOpen size={48} className="text-secondary mx-auto mb-8 opacity-50" />
          <blockquote className="font-heading text-3xl md:text-4xl leading-tight text-primary-dark mb-6 italic">
            "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope."
          </blockquote>
          <p className="text-lg text-slate-500 font-medium tracking-wide uppercase">— Jeremiah 29:11</p>
        </div>
      </section>

      {/* Welcome / Intro Text */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold text-primary mb-6 relative inline-block">
            A Place to Belong
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-secondary rounded-full"></span>
          </h2>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed mt-6">
            Whether you are a lifelong believer, new to the Christian faith, or simply searching for a community, 
            you are welcome here at Dwangwa CCAP Mission Church. Our doors are open to everyone seeking spiritual growth, 
            fellowship, and an opportunity to serve others.
          </p>
          <Link to="/contact" className="inline-block px-8 py-3 border-2 border-primary text-primary font-semibold rounded-md hover:bg-primary hover:text-white transition-colors">
            Plan a Visit
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
