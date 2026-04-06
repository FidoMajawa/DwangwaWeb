import React, { useState, useEffect } from 'react';
import { Users, Music, Heart, Sun, Bookmark } from 'lucide-react';

const iconsMap = {
  Users: <Users size={40} className="text-secondary" />,
  Music: <Music size={40} className="text-secondary" />,
  Heart: <Heart size={40} className="text-secondary" />,
  Sun: <Sun size={40} className="text-secondary" />,
  Bookmark: <Bookmark size={40} className="text-secondary" />
};

const Ministries = () => {
  const [ministries, setMinistries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/ministries')
      .then(res => res.json())
      .then(data => {
        setMinistries(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <div className="bg-primary-dark pt-20 pb-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 mt-8">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 drop-shadow-md text-secondary">Our Ministries</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">Find your place to serve, grow, and connect.</p>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-[50vh]">
        {loading ? (
          <div className="text-center py-10 text-slate-500 font-medium animate-pulse">Loading ministries...</div>
        ) : ministries.length === 0 ? (
          <div className="text-center py-10 text-slate-500 font-medium">No ministries found.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ministries.map((min) => (
              <div 
                key={min.id} 
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 group hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
                  {iconsMap[min.iconName] || iconsMap['Users']}
                </div>
                <h3 className="font-heading text-2xl font-bold text-primary mb-3 group-hover:text-primary-dark transition-colors">{min.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed relative z-10">{min.description}</p>
                <div className="inline-block px-4 py-2 bg-slate-50 rounded-md text-sm font-semibold text-primary border border-slate-100">
                  <span className="text-slate-500 font-medium mr-2">Meeting Time:</span>
                  {min.meeting}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Ministries;
