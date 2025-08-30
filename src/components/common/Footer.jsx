import React from 'react';

const Footer = ({ userType = 'seller' }) => {
  const footerContent = {
    seller: {
      description: "TEXUS helps dropshippers around the world discover and dropship VIET NAM, ASIAN & EU and Global based products.",
      contactTitle: "Write down your email in here to contact us",
      categories: [
        { title: "Categories", items: ["Trending", "Women's clothing", "Men's clothing", "Toys", "Footwear"] },
        { title: "Resources", items: ["Blog", "Help center", "Community", "Web stories", "Pricing", "Winning products"] },
        { title: "Tool", items: ["QR Code Generator", "Business Name Generator", "Invoice generator"] },
        { title: "Integration", items: ["Shopee", "Lazada", "Tiktok"] },
        { title: "Company", items: ["Careers", "Press", "Sitemap"] }
      ]
    },
    supplier: {
      description: "TEXUS helps suppliers around the world reach millions of dropshippers and expand their business globally through our integrated platform.",
      contactTitle: "Ready to become a supplier? Contact us today!",
      categories: [
        { title: "Product Categories", items: ["Electronics", "Fashion", "Home & Garden", "Sports", "Beauty"] },
        { title: "Supplier Resources", items: ["Getting Started", "Product Guidelines", "Shipping Standards", "Quality Control", "Pricing Guide", "Success Stories"] },
        { title: "Tools", items: ["Product Upload", "Analytics Dashboard", "Order Management"] },
        { title: "Integration", items: ["API Documentation", "Webhook Setup", "ERP Integration"] },
        { title: "Support", items: ["Help Center", "Contact Support", "Training Videos"] }
      ]
    }
  };

  const content = footerContent[userType];
  const primaryColor = userType === 'seller' ? 'purple' : 'green';

  return (
    <footer className="bg-slate-900 border-t border-slate-700 font-saira w-full">
      {/* Contact Section */}
      <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-12 md:py-20 w-full relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse-glow animation-delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-10 relative z-10">
          <div className="grid grid-cols-2 gap-4 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6 animate-fade-in-up">
              <h3 className="text-2xl md:text-3xl font-bold text-[#22356F] font-saira leading-tight">
                {content.contactTitle}
              </h3>
              <div className="flex shadow-2xl rounded-lg md:rounded-xl overflow-hidden group hover:shadow-3xl transition-all duration-500">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 md:px-6 py-3 md:py-4 border-0 focus:outline-none focus:ring-2 focus:ring-[#22356F] font-saira transition-all duration-300 text-gray-700 text-sm md:text-base bg-white"
                />
                <button className="bg-gradient-to-r from-white to-[#22356F] hover:from-gray-100 hover:to-[#1a2a5e] text-[#22356F] hover:text-[#1a2a5e] px-6 md:px-8 py-3 md:py-4 transition-all duration-300 font-saira shadow-lg hover:shadow-xl transform hover:scale-105 font-medium border-l border-[#22356F] font-bold text-sm md:text-base relative overflow-hidden group-hover:scale-105">
                  <span className="relative z-10">SEND</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </button>
              </div>
            </div>
            <div className="text-right space-y-2 md:space-y-4 animate-fade-in-up animation-delay-200">
              <h3 className="text-2xl md:text-4xl font-bold text-[#22356F] font-saira leading-tight">
                GOT QUESTION?
              </h3>
              <h3 className="text-2xl md:text-4xl font-bold text-[#22356F] font-saira leading-tight">
                CONTACT TO US !!
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="bg-slate-900 py-12 md:py-20 w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-10 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-8">
            <div>
              <h4
                className="text-white font-semibold mb-4 font-saira"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #FFFFFF 0%, #F5A7F9 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block',
                }}
              >
                {userType === 'seller' ? 'TEXUS' : 'TEXUS SUPPLIER'}
              </h4>
              <p className="text-gray-400 text-xs md:text-sm font-saira leading-relaxed">
                {content.description}
              </p>
            </div>
            {content.categories.map((category, index) => (
              <div key={index}>
                <h4
                  className="text-white font-semibold mb-4 font-saira"
                  style={{
                    backgroundImage: 'linear-gradient(90deg, #FFFFFF 0%, #F5A7F9 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'inline-block',
                  }}
                >
                  {category.title}
                </h4>
                <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors font-saira hover:scale-105 duration-200">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-slate-900 border-t border-slate-700 py-12 md:py-20 w-full">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm font-saira">
              © 2025 TEXUS All rights reserved. By TobeyNguyen
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <div className="flex space-x-3">
                <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-all duration-300 transform hover:scale-110">
                  <span className="text-white text-xs">IG</span>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-all duration-300 transform hover:scale-110">
                  <span className="text-white text-xs">X</span>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-all duration-300 transform hover:scale-110">
                  <span className="text-white text-xs">P</span>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-all duration-300 transform hover:scale-110">
                  <span className="text-white text-xs">FB</span>
                </a>
              </div>
              <div className="flex space-x-4 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors font-saira hover:scale-105 duration-200">Terms of service</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors font-saira hover:scale-105 duration-200">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors font-saira hover:scale-105 duration-200">Sale and refund</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 