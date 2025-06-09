import React from 'react';
import { Play, ArrowRight } from 'lucide-react';

const BrandShowcase = () => {
  const showcaseItems = [
    {
      id: 1,
      type: 'video',
      title: 'Behind the Scenes',
      description: 'See how our premium pieces are crafted',
      thumbnail: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '2:30'
    },
    {
      id: 2,
      type: 'lookbook',
      title: 'Spring Collection Lookbook',
      description: 'Discover the latest trends and styling tips',
      thumbnail: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800',
      items: '24 Looks'
    },
    {
      id: 3,
      type: 'campaign',
      title: 'Urban Elegance Campaign',
      description: 'City life meets sophisticated style',
      thumbnail: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800',
      items: '12 Images'
    }
  ];

  const brandImages = [
    {
      image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Elegant Evening Wear',
      category: 'Formal'
    },
    {
      image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Casual Chic',
      category: 'Everyday'
    },
    {
      image: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Professional Style',
      category: 'Business'
    },
    {
      image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Weekend Comfort',
      category: 'Leisure'
    },
    {
      image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Statement Pieces',
      category: 'Bold'
    },
    {
      image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Timeless Classics',
      category: 'Heritage'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Brand Showcase
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Immerse yourself in our world of fashion through exclusive content and behind-the-scenes moments
          </p>
        </div>

        {/* Featured Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {showcaseItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="relative aspect-[4/3]">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="mb-2">
                    <span className="text-sm font-medium opacity-80 uppercase tracking-wider">
                      {item.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm opacity-90 mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">
                      {item.duration || item.items}
                    </span>
                    <button className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/30 transition-colors">
                      {item.type === 'video' ? <Play size={16} /> : <ArrowRight size={16} />}
                      <span className="text-sm font-medium">
                        {item.type === 'video' ? 'Watch' : 'View'}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Image Grid */}
        <div className="mb-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Style Categories
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {brandImages.map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl aspect-[3/4]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-xs font-medium opacity-80 uppercase tracking-wider mb-1">
                    {item.category}
                  </div>
                  <div className="text-sm font-semibold">{item.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mosaic Gallery */}
        <div className="mb-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Fashion Moments
          </h3>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
            {/* Large featured image */}
            <div className="col-span-4 row-span-2 relative overflow-hidden rounded-xl">
              <img
                src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Featured fashion moment"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Smaller images */}
            {[
              'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400'
            ].map((img, index) => (
              <div key={index} className="col-span-2 aspect-square relative overflow-hidden rounded-lg">
                <img
                  src={img}
                  alt={`Fashion moment ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
            Explore Full Gallery
          </button>
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;