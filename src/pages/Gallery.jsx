import React from 'react';

const photos = [
  "https://images.unsplash.com/photo-1548625361-2495dc0d7b21?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1511649475669-e288648b2339?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1507692049790-de58290a4334?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1437604586419-f53eb778efef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
];

const Gallery = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <div className="bg-primary/90 pt-20 pb-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 mt-8">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 drop-shadow-md">Photo Gallery</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">Moments captured in our fellowship and community life.</p>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-[50vh]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {photos.map((url, idx) => (
            <div key={idx} className="rounded-xl overflow-hidden shadow-md aspect-square bg-slate-200 group relative">
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
              <img 
                src={url} 
                alt={`Gallery ${idx}`} 
                className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110" 
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
