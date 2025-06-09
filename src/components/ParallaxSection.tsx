import React, { useEffect, useState } from 'react';

const ParallaxSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Crafted for Excellence
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Every piece in our collection is meticulously designed and crafted using the finest materials
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-lg opacity-80">Premium Materials</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-80">Expert Artisans</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">25</div>
              <div className="text-lg opacity-80">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxSection;