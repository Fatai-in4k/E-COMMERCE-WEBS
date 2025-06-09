import React, { useState } from 'react';
import { Mail, Gift } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 3000);
    setEmail('');
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-purple-600 to-pink-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <Gift className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Join Our Fashion Community
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Subscribe to our newsletter and get 15% off your first order plus exclusive access to new collections
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full pl-12 pr-4 py-4 rounded-full border-0 focus:ring-2 focus:ring-white/50 text-gray-900 placeholder-gray-500"
              />
            </div>
            <button
              type="submit"
              disabled={isSubscribed}
              className={`px-8 py-4 rounded-full font-semibold transition-all duration-200 ${
                isSubscribed
                  ? 'bg-green-500 text-white'
                  : 'bg-white text-purple-600 hover:bg-gray-100 transform hover:scale-105'
              }`}
            >
              {isSubscribed ? 'Subscribed!' : 'Subscribe'}
            </button>
          </div>
        </form>

        <p className="text-white/80 text-sm mt-6">
          By subscribing, you agree to our Privacy Policy and Terms of Service
        </p>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-white">
          <div>
            <div className="text-2xl font-bold mb-2">15% OFF</div>
            <div className="text-white/80">First Order Discount</div>
          </div>
          <div>
            <div className="text-2xl font-bold mb-2">EARLY ACCESS</div>
            <div className="text-white/80">New Collections</div>
          </div>
          <div>
            <div className="text-2xl font-bold mb-2">EXCLUSIVE</div>
            <div className="text-white/80">Member-Only Sales</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;