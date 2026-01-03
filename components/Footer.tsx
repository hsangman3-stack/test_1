
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-orange-500 p-2 rounded-xl">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 5.172a2 2 0 0 0-1.414.586L3.586 10.758a2 2 0 0 0 0 2.828l5.414 5.414a2 2 0 0 0 2.828 0l5.414-5.414a2 2 0 0 0 0-2.828L15.414 5.758A2 2 0 0 0 14 5.172Z"/><path d="M7 11h.01"/><path d="M11 13h.01"/><path d="M15 11h.01"/><path d="M11 9h.01"/></svg>
              </div>
              <span className="text-xl font-bold">Happy Paws</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              반려견의 또 다른 가족, 해피 포즈 애견센터입니다. <br/>
              최고의 시설과 사랑으로 아이들을 돌봅니다.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">연락처 및 운영시간</h4>
            <ul className="space-y-4 text-gray-400">
              <li>📍 서울특별시 강남구 테헤란로 123</li>
              <li>📞 02-123-4567</li>
              <li>⏰ 평일: 08:00 - 20:00</li>
              <li>⏰ 주말: 09:00 - 18:00</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">빠른 링크</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#home" className="hover:text-orange-500 transition">홈</a></li>
              <li><a href="#services" className="hover:text-orange-500 transition">서비스 안내</a></li>
              <li><a href="#gallery" className="hover:text-orange-500 transition">갤러리</a></li>
              <li><a href="#consultant" className="hover:text-orange-500 transition">AI 상담 예약</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          &copy; 2024 Happy Paws Pet Center. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
