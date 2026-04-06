import React from 'react';
import { Heart, Landmark, Smartphone, CreditCard } from 'lucide-react';

const Give = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <div className="bg-primary/90 pt-20 pb-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 mt-8">
          <div className="inline-flex items-center justify-center p-4 bg-secondary/20 rounded-full mb-6">
            <Heart size={48} className="text-secondary" />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 drop-shadow-md text-secondary">Give & Partner With Us</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." <br/>— 2 Corinthians 9:7
          </p>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl font-bold text-primary mb-6">Ways to Give</h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Your generous tithes and offerings help us to continue our mission, maintain our facilities, and support community outreach programs in Dwangwa and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          {/* Bank Transfer */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
            <div className="bg-primary/10 text-primary w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Landmark size={32} />
            </div>
            <h3 className="font-heading text-2xl font-bold text-slate-800 mb-4">Bank Transfer</h3>
            <div className="space-y-4 text-slate-600">
              <div>
                <p className="text-sm uppercase tracking-wider font-bold mb-1 text-slate-400">Bank Name</p>
                <p className="font-medium text-lg text-primary">National Bank of Malawi</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-wider font-bold mb-1 text-slate-400">Account Name</p>
                <p className="font-medium">Dwangwa CCAP Mission</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-wider font-bold mb-1 text-slate-400">Account Number</p>
                <p className="font-medium font-mono text-lg tracking-widest text-slate-800">100XXXXXXX</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-wider font-bold mb-1 text-slate-400">Branch</p>
                <p className="font-medium">Kasungu Branch</p>
              </div>
            </div>
          </div>

          {/* Mobile Money */}
          <div className="bg-primary text-white p-8 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-32 h-32 bg-secondary/20 rounded-bl-full"></div>
            <div className="bg-white/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 relative z-10">
              <Smartphone size={32} className="text-secondary" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-secondary mb-4 relative z-10">Mobile Money</h3>
            
            <div className="space-y-6 relative z-10">
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <p className="font-bold text-lg mb-1 flex items-center justify-between">
                  Airtel Money <span className="text-xs bg-red-500 px-2 py-1 rounded text-white">AIRTEL</span>
                </p>
                <p className="font-mono text-xl tracking-wider text-secondary">099 XXXXXXX</p>
                <p className="text-sm text-white/70 mt-1">Name: Dwangwa CCAP</p>
              </div>
              
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <p className="font-bold text-lg mb-1 flex items-center justify-between">
                  TNM Mpamba <span className="text-xs bg-green-500 px-2 py-1 rounded text-white">TNM</span>
                </p>
                <p className="font-mono text-xl tracking-wider text-secondary">088 XXXXXXX</p>
                <p className="text-sm text-white/70 mt-1">Name: Dwangwa CCAP</p>
              </div>
            </div>
          </div>

          {/* In Person */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
            <div className="bg-secondary/20 text-primary-dark w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <CreditCard size={32} />
            </div>
            <h3 className="font-heading text-2xl font-bold text-slate-800 mb-4">In Person</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              You can deliver your tithes and offerings physically during our Sunday services or drop them at the church administration office during working hours.
            </p>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
              <p className="font-semibold text-primary mb-2">Office Hours:</p>
              <p className="text-slate-600 text-sm">Mon - Fri: 08:00 AM - 04:00 PM</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Give;
