import React, { useState } from 'react';
import VietNamIcon from '../../assets/img/VietnamIcon.png';
import loginIcon from '../../assets/img/login.png';

const Header = ({ userType = 'seller' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = {
    seller: [
      { label: 'Dropship', hasDropdown: true },
      { label: 'Inventors', hasDropdown: true },
      { label: 'Resources', hasDropdown: true },
      { label: 'Tool', hasDropdown: true },
      { label: 'Winning product', hasDropdown: false },
      { label: 'Pricing', hasDropdown: false }
    ],
    supplier: [
      { label: 'Products', hasDropdown: true },
      { label: 'Analytics', hasDropdown: true },
      { label: 'Orders', hasDropdown: true },
      { label: 'Tools', hasDropdown: true },
      { label: 'Pricing', hasDropdown: false },
      { label: 'Support', hasDropdown: false }
    ]
  };

  const ctaButton = {
    seller: 'Get Started',
    supplier: 'Become Supplier'
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 font-saira w-full backdrop-blur-sm bg-opacity-95 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl md:text-2xl font-bold text-[#22356F] font-saira">TEXUS</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigationItems[userType].map((item, index) => (
              <div key={index} className="relative group">
                <button className="flex items-center text-gray-700 hover:text-[#22356F] transition-colors font-saira hover:scale-105 duration-200 font-medium text-sm xl:text-base">
                  {item.label}
                  {item.hasDropdown && (
                    <svg className="w-3 h-3 xl:w-4 xl:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>
              </div>
            ))}
          </nav>

          {/* User Actions */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <button className="flex items-center text-gray-700 hover:text-[#22356F] transition-colors font-saira hover:scale-105 duration-200 font-medium text-sm xl:text-base">
              <span className="mr-2">
                <img src={VietNamIcon} alt="Vietnam" className="w-4 h-4 xl:w-5 xl:h-5 object-contain" />
              </span>
              <span className="hidden xl:inline">Vietnamese</span>
              <span className="xl:hidden">VN</span>
            </button>
            <a href="#" className="flex items-center text-gray-700 hover:text-[#22356F] transition-colors font-saira hover:scale-105 duration-200 font-medium text-sm xl:text-base">
              <span className="mr-2">
                <img src={loginIcon} alt="Login" className="w-4 h-4 xl:w-5 xl:h-5 object-contain" />
              </span>
              Login
            </a>
            <button className={`${
              userType === 'seller' 
                ? 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800' 
                : 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800'
              } text-white px-4 xl:px-6 py-2 xl:py-2.5 rounded-lg xl:rounded-xl transition-all duration-300 font-saira shadow-lg hover:shadow-xl transform hover:scale-105 font-medium text-sm xl:text-base`}>
              {ctaButton[userType]}
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-gray-700 hover:text-[#22356F] transition-colors p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 bg-white shadow-lg">
            <nav className="flex flex-col space-y-3">
              {navigationItems[userType].map((item, index) => (
                <a key={index} href="#" className="text-gray-700 hover:text-[#22356F] font-saira font-medium text-base py-2 px-4 rounded-lg hover:bg-gray-50 transition-all duration-200">
                  {item.label}
                </a>
              ))}
              <div className="border-t border-gray-200 pt-3 mt-3">
                <div className="flex items-center justify-between mb-3">
                  <button className="flex items-center text-gray-700 hover:text-[#22356F] transition-colors font-saira font-medium text-base">
                    <span className="mr-2">
                      <img src={VietNamIcon} alt="Vietnam" className="w-5 h-5 object-contain" />
                    </span>
                    Vietnamese
                  </button>
                  <a href="#" className="flex items-center text-gray-700 hover:text-[#22356F] transition-colors font-saira font-medium text-base">
                    <span className="mr-2">
                      <img src={loginIcon} alt="Login" className="w-5 h-5 object-contain" />
                    </span>
                    Login
                  </a>
                </div>
                <button className={`w-full ${
                  userType === 'seller' 
                    ? 'bg-gradient-to-r from-purple-600 to-purple-700' 
                    : 'bg-gradient-to-r from-green-600 to-green-700'
                  } text-white px-6 py-3 rounded-lg transition-all duration-300 font-saira font-medium text-base`}>
                  {ctaButton[userType]}
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 