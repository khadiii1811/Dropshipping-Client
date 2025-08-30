import React from 'react';
import cupIcon from '../../../assets/img/Cup.png';
import financeImg from '../../../assets/img/Finance.png';

const Hero = ({ userType = 'seller' }) => {
  const heroContent = {
    seller: {
      title: (
        <>
          <span
            className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text mb-2 animate-fade-in-up"
            style={{
              backgroundImage: 'linear-gradient(135deg, #FFFFFF 0%, #F5A7F9 50%, #A855F7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            THE FUTURE OF COMMERCE
          </span>
          <span
            className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text mb-2 animate-fade-in-up animation-delay-200"
            style={{
              backgroundImage: 'linear-gradient(135deg, #FFFFFF 0%, #F5A7F9 50%, #A855F7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            IN VIETNAM
          </span>
        </>
      ),
      subtitle: "The leading dropshipping platform in the Vietnamese commerce sector.",
      cta: "Start Dropshipping",
      stats: [
        { value: "20M+", label: "Winning Products Catalog", icon: "box", color: "purple" },
        { value: "500K+", label: "Entrepreneurs Love TEXUS", icon: "heart", color: "red" },
        { value: "$128+", label: "Earned By Our Entrepreneurs", icon: "cup", color: "green" }
      ]
    },
    supplier: {
      title: "SUPPLY THE FUTURE OF COMMERCE",
      subtitle: "Join thousands of suppliers powering the Vietnamese dropshipping revolution. Reach millions of entrepreneurs worldwide.",
      cta: "Start Supplying",
      stats: [
        { value: "50K+", label: "Active Suppliers", icon: "box", color: "green" },
        { value: "$2M+", label: "Monthly Revenue", icon: "chart", color: "blue" },
        { value: "100K+", label: "Global Reach", icon: "users", color: "purple" }
      ]
    }
  };

  const content = heroContent[userType];
  const primaryColor = userType === 'seller' ? 'purple' : 'green';

  const getIcon = (iconType) => {
    const icons = {
      box: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      heart: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      ),
      cup: (
        <img src={cupIcon} alt="Cup Icon" className="w-6 h-6 object-contain" />
      ),
      chart: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      users: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    };
    return icons[iconType];
  };

  const getColorClasses = (color) => {
    const colors = {
      purple: 'bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700',
      red: 'bg-gradient-to-br from-red-500 via-red-600 to-red-700',
      green: 'bg-gradient-to-br from-green-500 via-green-600 to-green-700',
      blue: 'bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700'
    };
    return colors[color];
  };

  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 md:py-20 font-saira w-full relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-10 relative z-10">
        <div className="grid grid-cols-2 gap-4 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <div className="animate-fade-in-up">{content.title}</div>
            <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 font-saira leading-relaxed animate-fade-in-up animation-delay-300">
              {content.subtitle}
            </p>
            <button
              className="group relative px-6 md:px-8 py-3 md:py-4 rounded-xl text-base md:text-lg font-semibold font-saira shadow-2xl hover:shadow-3xl transform hover:scale-105 border-2 overflow-hidden transition-all duration-500 animate-fade-in-up animation-delay-500"
              style={{
                background: 'linear-gradient(135deg, #FFFFFF 0%, #F5A7F9 50%, #A855F7 100%)',
                color: '#22356F',
                borderColor: '#F5A7F9',
              }}
            >
              <span className="relative z-10">{content.cta}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
          </div>
          <div className="relative animate-fade-in-up animation-delay-700">
            <div className={`bg-gradient-to-br from-${primaryColor}-600 via-${primaryColor}-700 to-blue-400 rounded-xl md:rounded-2xl p-4 md:p-8 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-500 relative overflow-hidden`}>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 animate-shimmer"></div>
              <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-xl overflow-hidden relative">
                <img 
                  src={financeImg} 
                  alt="Finance" 
                  className="w-4/5 h-auto object-contain rounded-lg mx-auto scale-90 hover:scale-95 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
          {content.stats.map((stat, index) => (
            <div key={index} className="text-center group animate-fade-in-up" style={{animationDelay: `${800 + index * 200}ms`}}>
              <div className="bg-gradient-to-br from-slate-800/80 via-slate-900/80 to-slate-800/80 backdrop-blur-xl rounded-xl md:rounded-2xl p-6 md:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 border border-slate-700/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
                <div className={`w-12 h-12 md:w-16 md:h-16 ${getColorClasses(stat.color)} rounded-xl md:rounded-2xl mx-auto mb-4 md:mb-6 flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-700"></div>
                  <div className="relative z-10">{getIcon(stat.icon)}</div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-3 font-saira bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">{stat.value}</h3>
                <p className="text-gray-400 font-saira text-xs md:text-sm leading-relaxed">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero; 