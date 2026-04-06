import React, { useState, useEffect } from 'react';
import { Clock, MapPin, Calendar as CalendarIcon } from 'lucide-react';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/events')
      .then(res => res.json())
      .then(data => {
        setEvents(data);
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
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 drop-shadow-md">Upcoming Events</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">Stay connected with what is happening in our church family.</p>
        </div>
      </div>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-[50vh]">
        <div className="bg-primary text-white p-8 md:p-12 rounded-2xl mb-20 shadow-xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary/20 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          
          <h2 className="font-heading text-3xl font-bold text-center mb-10 relative z-10 flex justify-center items-center gap-3">
            <CalendarIcon className="text-secondary" /> Weekly Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative z-10">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <h3 className="text-secondary font-bold text-xl mb-4 uppercase tracking-wider">Sunday</h3>
              <p className="mb-2 font-medium">English Service: 08:00 AM</p>
              <p className="font-medium">Chichewa Service: 10:00 AM</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <h3 className="text-secondary font-bold text-xl mb-4 uppercase tracking-wider">Wednesday</h3>
              <p className="font-medium">Bible Study: 05:00 PM</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <h3 className="text-secondary font-bold text-xl mb-4 uppercase tracking-wider">Friday</h3>
              <p className="font-medium">Prayer Meeting: 05:00 PM</p>
            </div>
          </div>
        </div>

        <h2 className="font-heading text-3xl font-bold text-primary mb-10 flex items-center gap-3">
          <span className="w-8 h-1 bg-secondary rounded-full inline-block"></span> Special Events
        </h2>
        
        {loading ? (
          <div className="text-center py-10 text-slate-500 font-medium animate-pulse">Loading events...</div>
        ) : events.length === 0 ? (
          <div className="text-center py-10 text-slate-500 font-medium bg-white rounded-xl shadow-sm border border-slate-100 p-8">No upcoming special events right now. Check back soon!</div>
        ) : (
          <div className="space-y-6">
            {events.map((evt) => (
              <div key={evt.id} className="flex flex-row bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-slate-100 group">
                <div className="bg-secondary/20 group-hover:bg-secondary text-primary-dark p-6 flex flex-col justify-center items-center min-w-[120px] transition-colors border-r border-slate-100">
                  <span className="font-heading text-4xl font-bold leading-none mb-1">{evt.day}</span>
                  <span className="text-sm font-bold uppercase tracking-widest">{evt.month}</span>
                </div>
                <div className="p-6 md:p-8 flex-1">
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-slate-800 mb-4 group-hover:text-primary transition-colors">{evt.title}</h3>
                  <div className="flex flex-col sm:flex-row gap-4 text-sm text-slate-600">
                    <span className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-md border border-slate-100"><Clock size={16} className="text-primary" /> {evt.time}</span>
                    <span className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-md border border-slate-100"><MapPin size={16} className="text-primary" /> {evt.location}</span>
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

export default Events;
