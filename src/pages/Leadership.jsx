import React, { useState, useEffect } from 'react';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const Leadership = () => {
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/leaders`)
      .then(res => res.json())
      .then(data => {
        setLeaders(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Page Header */}
      <div className="bg-primary pt-20 pb-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 mt-8">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 drop-shadow-md text-secondary">Church Leadership</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">Meet the team dedicated to serving God and our congregation.</p>
        </div>
      </div>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[50vh]">
        <h2 className="font-heading text-3xl font-bold text-center text-primary mb-16 relative">
          Pastors & Elders
          <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-secondary rounded-full"></span>
        </h2>
        
        {loading ? (
            <div className="text-center py-10 text-slate-500 font-medium animate-pulse">Loading leaders...</div>
        ) : leaders.length === 0 ? (
            <div className="text-center py-10 text-slate-500 font-medium">No leaders profiles found.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {leaders.map((leader) => (
              <div key={leader.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 group">
                <div className="aspect-w-3 aspect-h-3 sm:aspect-w-4 sm:aspect-h-3 relative overflow-hidden bg-slate-200 h-64">
                  <img 
                    src={leader.imageUrl || 'https://via.placeholder.com/400x400?text=Leader'} 
                    alt={leader.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="p-8 text-center relative">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-secondary text-primary-dark font-bold text-sm tracking-wide px-4 py-1 rounded-full shadow-md uppercase">
                    {leader.role}
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-primary mt-2 mb-3">{leader.name}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
      
      <section className="max-w-4xl mx-auto px-4 text-center pb-20">
        <h2 className="font-heading text-3xl font-bold text-primary mb-6">Church Governance</h2>
        <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-slate-100 italic">
          "In accordance with the Presbyterian system of church government, our congregation is led by a body of elders, 
          known as the Session. The Session is responsible for the spiritual oversight, discipline, and direction of the church."
        </p>
      </section>
    </div>
  );
};

export default Leadership;
