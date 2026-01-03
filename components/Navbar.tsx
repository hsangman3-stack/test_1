
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <div className="bg-orange-500 p-2 rounded-xl text-white">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 5.172a2 2 0 0 0-1.414.586L3.586 10.758a2 2 0 0 0 0 2.828l5.414 5.414a2 2 0 0 0 2.828 0l5.414-5.414a2 2 0 0 0 0-2.828L15.414 5.758A2 2 0 0 0 14 5.172Z"/><path d="M7 11h.01"/><path d="M11 13h.01"/><path d="M15 11h.01"/><path d="M11 9h.01"/></svg>
            </div>
            <span className="text-xl font-bold text-orange-600">Happy Paws</span>
          </div>

          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-orange-500 font-medium transition">홈</a>
            <a href="#services" className="text-gray-600 hover:text-orange-500 font-medium transition">서비스</a>
            <a href="#gallery" className="text-gray-600 hover:text-orange-500 font-medium transition">갤러리</a>
            <a href="#consultant" className="text-gray-600 hover:text-orange-500 font-medium transition">AI 상담</a>
            <a href="#contact" className="text-gray-600 hover:text-orange-500 font-medium transition">찾아오시는 길</a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-500 focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white px-2 pt-2 pb-3 space-y-1 shadow-lg">
          <a href="#home" className="block px-3 py-2 text-gray-600 hover:bg-orange-50 rounded-md">홈</a>
          <a href="#services" className="block px-3 py-2 text-gray-600 hover:bg-orange-50 rounded-md">서비스</a>
          <a href="#gallery" className="block px-3 py-2 text-gray-600 hover:bg-orange-50 rounded-md">갤러리</a>
          <a href="#consultant" className="block px-3 py-2 text-gray-600 hover:bg-orange-50 rounded-md">AI 상담</a>
          <a href="#contact" className="block px-3 py-2 text-gray-600 hover:bg-orange-50 rounded-md">찾아오시는 길</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
