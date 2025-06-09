import React from 'react';
import { Award, Heart, Leaf, Users } from 'lucide-react';

const BrandStory = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
      title: "Passion for Fashion",
      description: "Every piece is designed with love and attention to detail"
    },
    {
      icon: <Leaf className="w-8 h-8 text-green-600 dark:text-green-400" />,
      title: "Sustainable Practices",
      description: "Committed to ethical sourcing and eco-friendly materials"
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />,
      title: "Premium Quality",
      description: "Only the finest materials and craftsmanship make it to our collection"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      title: "Community First",
      description: "Supporting local artisans and giving back to our community"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Story Content */}
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Founded in 1998, LUXE began as a small boutique with a simple mission: to create 
              timeless fashion pieces that celebrate individuality and craftsmanship. What started 
              as a passion project has grown into a globally recognized brand.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Today, we continue to honor our heritage while embracing innovation. Each collection 
              tells a story of dedication, artistry, and the belief that fashion should be both 
              beautiful and meaningful.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-white dark:bg-gray-900 rounded-lg shadow-md">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Story Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our Story"
                className="w-full h-96 lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-8 -left-8 bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">25+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years of Excellence</div>
              </div>
            </div>
            
            <div className="absolute -top-8 -right-8 bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Countries Served</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;