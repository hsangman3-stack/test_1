
import React from 'react';
import { ServiceInfo } from '../types.ts';

const services: ServiceInfo[] = [
  {
    id: '1',
    title: '전문 미용 (Grooming)',
    description: '견종별 맞춤 스타일링과 저자극 천연 샴푸를 사용한 스파 서비스를 제공합니다.',
    price: '30,000원 ~',
    icon: '✂️'
  },
  {
    id: '2',
    title: '안심 호텔 (Hotel)',
    description: '24시간 전문가가 상주하며 냉난방 시스템과 개별 룸을 갖춘 안락한 숙박 서비스입니다.',
    price: '25,000원 / 박',
    icon: '🏠'
  },
  {
    id: '3',
    title: '애견 유치원 (Daycare)',
    description: '사회성 기르기 프로그램과 다양한 노즈워크 활동으로 스트레스를 해소해줍니다.',
    price: '20,000원 / 일',
    icon: '🎾'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">제공 서비스</h2>
          <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600">반려견의 건강과 행복을 위해 정성을 다합니다.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="group p-8 bg-orange-50 rounded-3xl border border-transparent hover:border-orange-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="text-orange-600 font-bold text-lg">
                {service.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
