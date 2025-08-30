import React from 'react';
import Header from '../components/common/Header';
import Hero from '../components/sections/homepage/Hero';
import BreakthroughSection from '../components/sections/homepage/BreakthroughSection';
import SupplierSection from '../components/sections/homepage/SupplierSection';
import StorefrontSection from '../components/sections/homepage/StorefrontSection';
import PlatformIntegrationSection from '../components/sections/homepage/PlatformIntegrationSection';
import Testimonials from '../components/sections/homepage/Testimonials';
import Footer from '../components/common/Footer';

const Homepage = ({ userType = 'seller' }) => {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-saira w-full">
      <Header userType={userType} />
      <Hero userType={userType} />
      <BreakthroughSection userType={userType} />
      <SupplierSection userType={userType} />
      <StorefrontSection userType={userType} />
      <PlatformIntegrationSection />
      <Testimonials userType={userType} />
      <Footer userType={userType} />
    </div>
  );
};

export default Homepage; 