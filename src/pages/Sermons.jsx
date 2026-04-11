import React, { useState, useEffect } from 'react';
import { PlayCircle, Download, FileText, Calendar as CalendarIcon, User, BookOpen } from 'lucide-react';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const Sermons = () => {
  const [sermons, setSermons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/sermons`)
      .then(res => res.json())
      .then(data => {
        setSermons(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <div className="bg-primary pt-20 pb-16 text-white text-center bg-[url('https://images.unsplash.com/photo-1544281781-64536cd35e4d?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center bg-blend-overlay">
        <div className="max-w-4xl mx-auto px-4 mt-8 relative z-10">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 drop-shadow-md text-secondary">Sermons & Resources</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">Listen to past messages and access study materials.</p>
        </div>
      </div>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-[50vh]">
        <h2 className="font-heading text-3xl font-bold text-primary mb-10 flex items-center gap-3">
          <span className="w-8 h-1 bg-secondary rounded-full inline-block"></span> Latest Messages
        </h2>
        
        {loading ? (
          <div className="text-center py-10 text-slate-500 font-medium animate-pulse">Loading sermons...</div>
        ) : sermons.length === 0 ? (
          <div className="text-center py-10 text-slate-500 font-medium">No sermons available.</div>
        ) : (
          <div className="space-y-6">
            {sermons.map((sermon) => (
              <div 
                key={sermon.id} 
                className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-slate-100 group"
              >
                {/* Date/Series badge area - Desktop */}
                <div className="hidden md:flex flex-col items-center justify-center bg-primary text-white p-6 min-w-[140px]">
                  <span className="text-xs font-bold uppercase tracking-wider mb-1 text-secondary">{sermon.series || 'Sermon'}</span>
                  {sermon.date && (() => {
                    const dateObj = new Date(sermon.date);
                    if (!isNaN(dateObj)) {
                      return (
                        <>
                          <span className="font-heading text-3xl font-bold">{dateObj.getDate()}</span>
                          <span className="text-sm font-medium uppercase">{dateObj.toLocaleString('default', { month: 'short' })}</span>
                        </>
                      );
                    }
                    return <span className="font-heading text-xl font-bold text-center mt-2">{sermon.date}</span>;
                  })()}
                </div>

                {/* Main Content Info */}
                <div className="p-6 md:p-8 flex-1">
                  {/* Mobile Date/Series */}
                  <div className="md:hidden flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-3 text-primary">
                    <CalendarIcon size={14} className="text-secondary" />
                    {sermon.date} {sermon.series ? `• ${sermon.series}` : ''}
                  </div>
                  
                  <h3 className="font-heading text-2xl font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors">{sermon.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-4">
                    <span className="flex items-center gap-1.5"><User size={16} className="text-secondary" /> <strong>{sermon.preacher}</strong></span>
                    <span className="flex items-center gap-1.5 text-primary-dark font-semibold px-2.5 py-0.5 bg-secondary/20 rounded-md">
                      <BookOpen size={16} /> {sermon.scripture}
                    </span>
                  </div>
                  
                  <div className="flex flex-col gap-4 mt-6 pt-6 border-t border-slate-100">
                    
                    {/* Render Audio Player if available */}
                    {sermon.audioUrl ? (
                      <div className="w-full bg-slate-50 p-3 rounded-lg border border-slate-200 shadow-sm">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block ml-1"><PlayCircle size={14} className="inline mr-1 pb-[2px]"/> Listen Now</span>
                        <audio 
                          controls 
                          src={sermon.audioUrl.startsWith('http') ? sermon.audioUrl : `${API_BASE_URL}${sermon.audioUrl}`} 
                          className="w-full h-10"
                        />
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-sm text-slate-400 italic">
                        <PlayCircle size={16} /> Audio currently unavailable
                      </div>
                    )}
                    
                    {/* Action Buttons */}
                    <div className="flex items-center gap-3 flex-wrap">
                      {sermon.audioUrl && (
                        <a 
                          href={sermon.audioUrl.startsWith('http') ? sermon.audioUrl : `${API_BASE_URL}${sermon.audioUrl}`}
                          download
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-md font-medium hover:bg-primary-dark transition-colors shadow-sm hover:shadow"
                        >
                          <Download size={18} /> Download MP3
                        </a>
                      )}
                      {sermon.notesUrl && (
                        <button className="flex flex-1 md:flex-none items-center justify-center gap-2 px-4 py-2.5 text-slate-600 hover:text-primary hover:bg-primary/5 rounded-md transition-colors border border-slate-200" title="Sermon Notes">
                          <FileText size={18} /> Notes
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Sermons;
