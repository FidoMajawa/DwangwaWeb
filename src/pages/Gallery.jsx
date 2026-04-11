import React, { useState, useEffect } from 'react';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/gallery`)
      .then(res => res.json())
      .then(data => {
        setPhotos(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <div className="bg-primary/90 pt-20 pb-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 mt-8">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 drop-shadow-md text-secondary">Photo Gallery</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">Moments captured in our fellowship and community life.</p>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-[50vh]">
        {loading ? (
          <div className="text-center py-10 text-slate-500 font-medium animate-pulse">Loading gallery...</div>
        ) : photos.length === 0 ? (
          <div className="text-center py-10 text-slate-500 font-medium">No photos found.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {photos.map((item) => (
              <div key={item.id} className="rounded-xl overflow-hidden shadow-md aspect-square bg-slate-200 group relative">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
                <img 
                  src={item.imageUrl.startsWith('http') ? item.imageUrl : `${API_BASE_URL}${item.imageUrl}`}
                  alt={item.title} 
                  className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110" 
                />
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Gallery;
