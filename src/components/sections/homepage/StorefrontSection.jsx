import React from 'react';
import productManagementImg from '../../../assets/img/management.png';

const StorefrontSection = ({ userType = 'seller' }) => {
  const content = {
    seller: {
      title: "Build your personal storefront in minutes.",
      tabs: ["Product Sourcing And Management", "Inventory Management", "Order Tracking", "Analytics"],
      activeTab: "Product Sourcing And Management",
      content: {
        title: "Product sourcing and management",
        description: "Easily manage product sourcing, inventory, and order tracking. Streamline product imports and simplify order management in one efficient platform."
      }
    },
    supplier: {
      title: "Manage your products and orders efficiently.",
      tabs: ["Product Management", "Order Processing", "Analytics Dashboard", "Inventory Control"],
      activeTab: "Product Management",
      content: {
        title: "Product Management & Analytics",
        description: "Upload, manage, and track your products with real-time analytics. Monitor performance, manage inventory, and optimize your product listings for maximum visibility and sales."
      }
    }
  };

  const currentContent = content[userType];
  const platformBgColor = userType === 'seller' ? 'pink' : 'green';

  return (
    <section className="bg-gradient-to-br from-white via-gray-50 to-white py-12 md:py-20 w-full relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse-glow animation-delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-10 relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#22356F] text-center mb-8 md:mb-12 font-saira animate-fade-in-up">
          {currentContent.title}
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 rounded-lg md:rounded-xl p-2 mb-6 md:mb-8 shadow-xl border border-gray-200/50 animate-fade-in-up animation-delay-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-2">
              {currentContent.tabs.map((tab, index) => (
                <button 
                  key={index}
                  className={`py-3 md:py-4 px-2 md:px-4 rounded-md md:rounded-lg text-xs md:text-sm font-medium transition-all duration-300 font-saira hover:scale-105 ${
                    tab === currentContent.activeTab
                      ? 'bg-white text-[#22356F] shadow-lg border border-gray-200'
                      : 'text-gray-600 hover:bg-white hover:text-[#22356F] hover:shadow-md hover:border hover:border-gray-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className={`bg-gradient-to-br from-${platformBgColor}-50 via-white to-${platformBgColor}-50 rounded-xl md:rounded-2xl p-6 md:p-8 shadow-2xl border border-gray-100/50 relative overflow-hidden animate-fade-in-up animation-delay-400`}>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-shimmer"></div>
            <div className="grid grid-cols-2 gap-4 md:gap-8 items-center relative z-10">
              <div className="space-y-4 md:space-y-6">
                <h3 className="text-xl md:text-2xl font-bold text-[#22356F] mb-3 md:mb-4 font-saira">
                  {currentContent.content.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed font-saira">
                  {currentContent.content.description}
                </p>
              </div>
              <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-xl border border-gray-100 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-50/50 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
                <div className="space-y-4 relative z-10">
                  <img 
                    src={productManagementImg} 
                    alt="Product Management" 
                    className="w-4/5 h-auto object-contain rounded-lg mx-auto scale-90 hover:scale-95 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorefrontSection;
