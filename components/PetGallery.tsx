
import React from 'react';
import { GalleryItem } from '../types.ts';

const items: GalleryItem[] = [
  { id: 1, url: '', title: '행복한 산책시간' },
  { id: 2, url: '', title: '낮잠 자는 루이' },
  { id: 3, url: '', title: '그루밍 완료!' },
  { id: 4, url: '', title: '새 친구를 만났어요' },
  { id: 5, url: '', title: '간식 먹방' },
  { id: 6, url: '', title: '유치원 졸업사진' },
];

const PetGallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">센터 갤러리</h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-500">(이미지 없이 텍스트로 안내드립니다)</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.id} className="relative group overflow-hidden rounded-2xl aspect-square bg-orange-50 border border-orange-100 flex items-center justify-center p-6 text-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-orange-200 mb-4 flex items-center justify-center opacity-50">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
                </div>
                <span className="text-gray-700 font-bold text-lg">{item.title}</span>
                <p className="text-gray-400 text-xs mt-2 uppercase tracking-widest">Moment</p>
              </div>
              
              <div className="absolute inset-0 bg-orange-500/5 opacity-0 group-hover:opacity-100 transition duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PetGallery;
