
import React from 'react';
import { GalleryItem } from '../types';

const items: GalleryItem[] = [
  { id: 1, url: 'https://picsum.photos/seed/dog1/400/400', title: '행복한 산책시간' },
  { id: 2, url: 'https://picsum.photos/seed/dog2/400/400', title: '낮잠 자는 루이' },
  { id: 3, url: 'https://picsum.photos/seed/dog3/400/400', title: '그루밍 완료!' },
  { id: 4, url: 'https://picsum.photos/seed/dog4/400/400', title: '새 친구를 만났어요' },
  { id: 5, url: 'https://picsum.photos/seed/dog5/400/400', title: '간식 먹방' },
  { id: 6, url: 'https://picsum.photos/seed/dog6/400/400', title: '유치원 졸업사진' },
];

const PetGallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">갤러리</h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <div key={item.id} className="relative group overflow-hidden rounded-2xl aspect-square">
              <img 
                src={item.url} 
                alt={item.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <span className="text-white font-medium">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PetGallery;
