import React from 'react';
import rocketImg from '../../../assets/img/flying.png';

const BreakthroughSection = ({ userType = 'seller' }) => {
  const content = {
    seller: {
      title: "BREAKTHROUGH"
    },
    supplier: {
      title: "GROWTH"
    }
  };

  const currentContent = content[userType];

  return (
    <section className="bg-gradient-to-br from-white via-gray-50 to-white py-12 md:py-20 relative overflow-hidden w-full">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse-glow animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/3 rounded-full blur-3xl animate-pulse-glow animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-10 flex flex-col items-center justify-center relative min-h-[280px] md:min-h-[420px]">
        <div className="relative w-full flex items-center justify-center min-h-[200px] md:min-h-[320px]">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-transparent bg-clip-text text-center tracking-tight select-none z-10 leading-tight animate-fade-in-up" 
              style={{
                letterSpacing:'0.02em',
                backgroundImage: 'linear-gradient(135deg, #22356F 0%, #4F46E5 50%, #7C3AED 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
            {currentContent.title}
          </h2>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/3 z-20 pointer-events-none animate-float">
            <img 
              src={rocketImg} 
              alt="Rocket" 
              className="w-60 lg:w-80 drop-shadow-2xl hover:scale-110 transition-transform duration-500"
              style={{maxWidth:'320px',height:'auto'}}
            />
            {/* Rocket Trail Effect */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-gradient-to-t from-orange-400 via-yellow-400 to-transparent rounded-full blur-sm animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreakthroughSection;
