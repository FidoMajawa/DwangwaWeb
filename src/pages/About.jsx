import React from 'react';

const About = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-primary pt-20 pb-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 mt-8">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 drop-shadow-md text-secondary">About Us</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">Learn about our history, mission, and what we believe.</p>
        </div>
      </div>

      {/* History Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-secondary rounded-full inline-block"></span> Our History & Heritage
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed text-lg">
                Dwangwa CCAP Mission Church is a thriving congregation belonging to the Church of Central Africa Presbyterian (CCAP). 
                Located in the heart of Dwangwa, our church has served as a spiritual home for countless families over the decades.
              </p>
              <p className="text-slate-600 leading-relaxed text-lg">
                Built on the robust theological foundation of the Reformed tradition, we are dedicated to preaching the Gospel, 
                nurturing believers, and extending Christ's love to our local community through various outreach programs.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-secondary/20 rounded-2xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1548625361-2495dc0d7b21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Church Building" 
                className="relative rounded-2xl shadow-xl w-full object-cover h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Identity */}
      <section className="py-20 bg-primary-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold mb-12 relative inline-block">
            Our Core Identity
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-secondary rounded-full"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 text-primary-dark font-bold text-xl">V</div>
              <h3 className="font-heading text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-slate-300 leading-relaxed">
                To be a vibrant, Christ-centered family that transforms Dwangwa and the world through the power of the Gospel.
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 text-primary-dark font-bold text-xl">M</div>
              <h3 className="font-heading text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-slate-300 leading-relaxed">
                To glorify God by making disciples, nurturing spiritual growth, and serving our community with love and compassion.
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 text-primary-dark font-bold text-xl">C</div>
              <h3 className="font-heading text-2xl font-bold mb-4">Our Values</h3>
              <p className="text-slate-300 leading-relaxed">
                Biblical fidelity, prayerful dependence, loving fellowship, compassionate outreach, and joyful worship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Beliefs */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-primary mb-6 flex items-center gap-3">
             <span className="w-8 h-1 bg-secondary rounded-full inline-block"></span> What We Believe
          </h2>
          <p className="text-slate-600 mb-8 text-lg">
            We adhere to the historic Reformed confessions of faith. We believe that:
          </p>
          <ul className="space-y-4">
            {[
              "The Bible is the inspired, infallible, and authoritative Word of God.",
              "There is one God, eternally existent in three persons: Father, Son, and Holy Spirit.",
              "Salvation is by grace alone, through faith alone, in Christ alone.",
              "The Church is the body of Christ, called to proclaim the Gospel and administer the sacraments (Baptism and the Lord's Supper)."
            ].map((belief, i) => (
              <li key={i} className="flex gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100 hover:border-primary/20 transition-colors shadow-sm">
                <span className="text-secondary font-bold text-xl">•</span>
                <span className="text-slate-700 text-lg">{belief}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;
