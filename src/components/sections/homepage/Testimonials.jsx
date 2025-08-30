import React from 'react';

const Testimonials = ({ userType = 'seller' }) => {
  const testimonials = {
    seller: {
      title: "Many Dropshippers Love TEXUS",
      cta: "Start Dropshipping",
      items: [
        {
          text: "Texus has been a game-changer for my eCommerce store! The seamless integration with Shopify and the quality of products from US suppliers have significantly boosted my sales.",
          author: "TobeyNguyen",
          color: "purple"
        }
      ]
    },
    supplier: {
      title: "Trusted by Leading Suppliers",
      cta: "Start Supplying",
      items: [
        {
          text: "TEXUS has transformed our business! The automated order processing and real-time analytics have increased our efficiency by 300%. We've expanded to 15 new markets in just 6 months.",
          author: "GlobalSupply Co.",
          color: "green"
        }
      ]
    }
  };

  const content = testimonials[userType];
  const primaryColor = userType === 'seller' ? 'purple' : 'green';

  return (
    <section className="bg-slate-900 py-20 font-saira w-full relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="max-w-7xl mx-auto px-10 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-saira"   
        style={{
            backgroundImage: 'linear-gradient(90deg, #FFFFFF 0%, #F5A7F9 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
          {content.title}
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-slate-700">
              <div className="flex text-yellow-400 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-4 font-saira leading-relaxed">
                {content.items[0].text}
              </p>
              <div className="flex items-center">
                <div className={`w-8 h-8 bg-${primaryColor}-600 rounded-full flex items-center justify-center mr-3 shadow-lg`}>
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white font-medium font-saira">{content.items[0].author}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className={`bg-${primaryColor}-600 hover:bg-${primaryColor}-700  px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 font-saira shadow-lg hover:shadow-xl transform hover:scale-105`}    style={{
                background: 'linear-gradient(90deg, #FFFFFF 0%, #F5A7F9 100%)',
                color: '#22356F',
                borderColor: '#F5A7F9',
              }}>
            {content.cta}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 