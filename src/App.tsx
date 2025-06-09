import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import FeaturedProducts from './components/FeaturedProducts';
import ParallaxSection from './components/ParallaxSection';
import Collections from './components/Collections';
import ProductGallery from './components/ProductGallery';
import BrandShowcase from './components/BrandShowcase';
import CustomerReviews from './components/CustomerReviews';
import BrandStory from './components/BrandStory';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <HeroSlider />
        <FeaturedProducts />
        <ParallaxSection />
        <Collections />
        <ProductGallery />
        <BrandShowcase />
        <CustomerReviews />
        <BrandStory />
        <Newsletter />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;