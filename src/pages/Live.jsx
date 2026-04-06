import React from 'react';
import { PlayCircle, Calendar, Users, Radio } from 'lucide-react';

const Live = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <div className="bg-primary-dark pt-20 pb-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 mt-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 text-red-100 font-semibold mb-6 border border-red-500/30">
            <Radio size={18} className="animate-pulse text-red-500" />
            <span className="uppercase tracking-wider text-sm">Live Broadcast</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 drop-shadow-md text-secondary">Join Us Live</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">Worship with us from anywhere in the world.</p>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Video Player Placeholder */}
        <div className="bg-black rounded-2xl overflow-hidden shadow-2xl aspect-video relative max-w-5xl mx-auto border-4 border-slate-800 group">
          <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 bg-slate-900/90 group-hover:bg-slate-900/80 transition-colors">
            <PlayCircle size={64} className="mb-6 text-slate-500 group-hover:text-red-500 transition-colors duration-500" />
            <h2 className="text-2xl font-heading text-white mb-2">Livestream Offline</h2>
            <p className="text-sm">Embed your YouTube or Facebook Live Stream URL here</p>
          </div>
        </div>

        {/* Schedule */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-primary">
            <div className="flex items-center gap-4 mb-6 text-primary">
              <Calendar size={32} />
              <h3 className="font-heading text-2xl font-bold">Broadcast Schedule</h3>
            </div>
            <ul className="space-y-4 text-slate-600 text-lg">
              <li className="flex justify-between items-center border-b border-slate-100 pb-3">
                <span className="font-semibold text-slate-800">Sunday English Service</span>
                <span className="bg-slate-100 px-3 py-1 rounded-md text-sm font-bold text-primary">08:00 AM</span>
              </li>
              <li className="flex justify-between items-center border-b border-slate-100 pb-3">
                <span className="font-semibold text-slate-800">Sunday Chichewa Service</span>
                <span className="bg-slate-100 px-3 py-1 rounded-md text-sm font-bold text-primary">10:00 AM</span>
              </li>
              <li className="flex justify-between items-center pb-2">
                <span className="font-semibold text-slate-800">Wednesday Bible Study</span>
                <span className="bg-slate-100 px-3 py-1 rounded-md text-sm font-bold text-primary">05:00 PM</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-primary text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
            <div className="absolute -right-6 -bottom-10 text-white/10 transform rotate-12">
              <Users size={220} />
            </div>
            <h3 className="font-heading text-2xl font-bold mb-4 relative z-10 text-secondary">Join The Community</h3>
            <p className="text-white/80 leading-relaxed mb-8 relative z-10 text-lg">
              Even when we are physically apart, we are united in spirit. Engage in the chat, submit prayer requests, and worship together as one family.
            </p>
            <a href="/contact" className="block text-center bg-secondary text-primary-dark font-bold px-6 py-4 rounded-xl hover:bg-white transition-colors relative z-10 w-full shadow-lg">
              Submit a Prayer Request
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Live;
