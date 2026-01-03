
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
          <div className="relative w-full max-w-lg">
            {/* Background decorative elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-orange-200 rounded-full blur-3xl opacity-50 z-0"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-yellow-200 rounded-full blur-2xl opacity-50 z-0"></div>
            
            {/* Main Featured Image */}
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition duration-500 border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=800&h=1000" 
                alt="Happy Golden Retriever" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
