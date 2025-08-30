import React from 'react';

const PlatformIntegrationSection = () => {
  const platforms = [
    { name: "TikTok", bgColor: "bg-gradient-to-br from-[#22356F] via-[#1e3a8a] to-[#1e40af]" },
    { name: "Shopee", bgColor: "bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700" },
    { name: "Lazada", bgColor: "bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800" },
    { name: "Lazada", bgColor: "bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800" }
  ];

  return (
    <section className="bg-gradient-to-br from-white via-gray-50 to-white py-12 md:py-20 w-full relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse-glow animation-delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-10 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#22356F] text-center mb-8 md:mb-12 font-saira animate-fade-in-up">
            Integrate With Your Store In The Future
          </h2>
          
          <div className="relative animate-fade-in-up animation-delay-200">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {platforms.map((platform, index) => (
                <div 
                  key={index}
                  className={`${platform.bgColor} rounded-xl md:rounded-2xl p-6 md:p-8 flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 relative overflow-hidden group`}
                  style={{animationDelay: `${400 + index * 100}ms`}}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="text-white text-lg md:text-2xl font-bold font-saira relative z-10 group-hover:scale-110 transition-transform duration-300">
                    {platform.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformIntegrationSection;
