import React, { useState, useEffect } from 'react';

const API_BASE_URL = import.meta.env.VITE_API_URL || `${API_BASE_URL}`;

const News = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/news`)
      .then(res => res.json())
      .then(data => {
        setNewsItems(data);
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
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 drop-shadow-md text-secondary">Church News</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">Stay informed with the latest updates and announcements.</p>
        </div>
      </div>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-[50vh]">
        {loading ? (
          <div className="text-center py-10 text-slate-500 font-medium animate-pulse">Loading news...</div>
        ) : newsItems.length === 0 ? (
          <div className="text-center py-10 text-slate-500 font-medium bg-white rounded-xl shadow-sm border border-slate-100 p-8">No news available at the moment.</div>
        ) : (
          <div className="space-y-8">
            {newsItems.map((item) => (
              <div key={item.id} className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-primary hover:shadow-lg transition-shadow">
                <div className="flex flex-wrap justify-between items-center mb-4 gap-4">
                  <span className="text-sm text-slate-500 font-semibold uppercase tracking-wider">{item.date}</span>
                  <span className="bg-secondary/20 text-primary-dark px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">{item.category}</span>
                </div>
                <h3 className="font-heading text-2xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed whitespace-pre-wrap">{item.excerpt}</p>
                <button className="inline-block px-5 py-2 border-2 border-slate-200 text-slate-600 font-semibold rounded-md hover:border-primary hover:text-primary transition-colors">
                  Read More
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default News;
