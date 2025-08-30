import React from 'react';
import shippingImg from '../../../assets/img/shipping.png';

const SupplierSection = ({ userType = 'seller' }) => {
  const content = {
    seller: {
      title: "BEST DROPSHIPING SUPPLIER",
      subtitle: "ASIAN & EU SUPPLIER",
      description: "With nearly 35% of the global dropshipping market based in Vietnam, Asia, and Europe, you can rely on fast, dependable, and efficient shipping for your customers. Connect with top suppliers across these regions."
    },
    supplier: {
      title: "GLOBAL SUPPLY NETWORK",
      subtitle: "VIETNAM, ASIA & EUROPE",
      description: "Connect with dropshippers worldwide through our extensive network. Our platform provides seamless integration with major e-commerce platforms and automated order processing."
    }
  };

  const currentContent = content[userType];
  const primaryColor = userType === 'seller' ? 'purple' : 'green';

  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 md:py-20 w-full relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl animate-pulse-glow animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-10 relative z-10">
        <div className="grid grid-cols-2 gap-4 md:gap-12 items-center">
          <div className="space-y-4 md:space-y-6">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-left mb-2 md:mb-4 font-saira animate-fade-in-up"
              style={{
                backgroundImage: 'linear-gradient(135deg, #FFFFFF 0%, #F5A7F9 50%, #A855F7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
              }}
            >
              {currentContent.title}
            </h2>
            <h3
              className={`text-lg sm:text-xl md:text-2xl font-semibold mb-4 md:mb-6 font-saira text-left animate-fade-in-up animation-delay-200`}
              style={{
                backgroundImage: 'linear-gradient(135deg, #FFFFFF 0%, #F5A7F9 50%, #A855F7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
              }}
            >
              {currentContent.subtitle}
            </h3>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed font-saira text-left animate-fade-in-up animation-delay-300">
              {currentContent.description}
            </p>
          </div>
          <div className="relative animate-fade-in-up animation-delay-500">
            <div className={`bg-gradient-to-br from-${primaryColor === 'purple' ? 'blue' : 'green'}-600 via-${primaryColor === 'purple' ? 'blue' : 'green'}-700 to-${primaryColor === 'purple' ? 'purple' : 'emerald'}-600 rounded-xl md:rounded-2xl p-4 md:p-8 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-500 relative overflow-hidden group`}>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-50/50 to-transparent transform -skew-x-12 animate-shimmer"></div>
                <img 
                  src={shippingImg} 
                  alt="shipping" 
                  className="w-4/5 h-auto object-contain rounded-lg mx-auto scale-90 hover:scale-95 transition-transform duration-300 relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupplierSection;
