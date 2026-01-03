
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 z-10 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            소중한 반려견의 <br/>
            <span className="text-orange-500">행복한 놀이터</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
            Happy Paws는 전문적인 미용 기술과 안락한 호텔 서비스, 
            그리고 즐거운 유치원 프로그램을 통해 반려견에게 최고의 하루를 선사합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#consultant" className="bg-orange-500 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-orange-600 transition transform hover:-translate-y-1">
              AI 펫 상담 시작하기
            </a>
            <a href="#services" className="bg-white text-orange-500 border-2 border-orange-500 px-8 py-4 rounded-full font-bold hover:bg-orange-50 transition transform hover:-translate-y-1">
              서비스 보기
            </a>
          </div>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0 relative flex justify-center">
          {/* Replaced image with a decorative geometric composition */}
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-orange-100 rounded-3xl rotate-6 border-2 border-orange-200"></div>
            <div className="absolute inset-0 bg-white rounded-3xl -rotate-3 shadow-xl flex items-center justify-center border border-gray-100">
               <div className="text-center p-8">
                  <div className="text-orange-500 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mx-auto opacity-20"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                  </div>
                  <p className="text-gray-400 font-medium">Happy Paws Center</p>
                  <p className="text-gray-300 text-sm">Professional Care Space</p>
               </div>
            </div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-orange-500 rounded-full opacity-10 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
