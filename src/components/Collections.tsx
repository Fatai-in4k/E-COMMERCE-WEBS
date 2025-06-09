import React from 'react';
import { ArrowRight } from 'lucide-react';

const Collections = () => {
  const collections = [
    {
      id: 1,
      title: "Women's Collection",
      description: "Elegant and sophisticated pieces for the modern woman",
      image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
      itemCount: "120+ Items",
      gallery: [
        "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400"
      ]
    },
    {
      id: 2,
      title: "Men's Collection",
      description: "Contemporary styles that blend comfort with sophistication",
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800",
      itemCount: "85+ Items",
      gallery: [
        "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400"
      ]
    },
    {
      id: 3,
      title: "Accessories",
      description: "Complete your look with our premium accessories",
      image: "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=800",
      itemCount: "200+ Items",
      gallery: [
        "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400"
      ]
    }
  ];

  return (
    <section id="collections" className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Our Collections
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our carefully curated collections designed for every occasion and style preference
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {collections.map((collection, index) => (
            <div
              key={collection.id}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              {/* Background Image */}
              <div className={`relative overflow-hidden ${index === 0 ? 'h-96 lg:h-full' : 'h-96'}`}>
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 text-white">
                <div className="mb-2">
                  <span className="text-sm font-medium opacity-80">{collection.itemCount}</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-3">
                  {collection.title}
                </h3>
                <p className="text-lg opacity-90 mb-6">
                  {collection.description}
                </p>
                <button className="inline-flex items-center space-x-2 bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200">
                  <span>Explore Collection</span>
                  <ArrowRight size={18} />
                </button>
              </div>

              {/* Gallery Preview on Hover */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="grid grid-cols-2 gap-2">
                  {collection.gallery.slice(0, 4).map((img, imgIndex) => (
                    <div key={imgIndex} className="w-16 h-16 rounded-lg overflow-hidden border-2 border-white/50">
                      <img src={img} alt={`${collection.title} preview ${imgIndex + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lifestyle Gallery Section */}
        <div className="mb-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Lifestyle Gallery
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400",
              "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400",
              "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=400",
              "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400",
              "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400",
              "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400",
              "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400",
              "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=400"
            ].map((img, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl aspect-square">
                <img 
                  src={img} 
                  alt={`Lifestyle ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative overflow-hidden rounded-2xl">
            <img 
              src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Brand Showcase 1"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-pink-600/80 flex items-center justify-center">
              <div className="text-center text-white">
                <h4 className="text-2xl font-bold mb-2">Premium Quality</h4>
                <p className="text-lg">Crafted with the finest materials</p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl">
            <img 
              src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Brand Showcase 2"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80 flex items-center justify-center">
              <div className="text-center text-white">
                <h4 className="text-2xl font-bold mb-2">Sustainable Fashion</h4>
                <p className="text-lg">Eco-friendly and ethically made</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;