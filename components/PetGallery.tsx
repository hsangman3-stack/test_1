
import React from 'react';
import { GalleryItem } from '../types.ts';

const items: GalleryItem[] = [
  { id: 1, url: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=400&h=400', title: '행복한 산책시간' },
  { id: 2, url: 'https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?auto=format&fit=crop&q=80&w=400&h=400', title: '낮잠 자는 루이' },
  { id: 3, url: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=400&h=400', title: '그루밍 완료!' },
  { id: 4, url: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=400&h=400', title: '새 친구를 만났어요' },
  { id: 5, url: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&q=80&w=400&h=400', title: '간식 먹방' },
  { id: 6, url: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=400&h=400', title: '센터의 마스코트' },
  { id: 7, url: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=400&h=400', title: '유치원 놀이시간' },
  { id: 8, url: 'https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?auto=format&fit=crop&q=80&w=400&h=400', title: '친구와 함께' },
];

const PetGallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">센터 갤러리</h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600">행복한 해피 포즈 아이들의 일상을 만나보세요.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.id} className="relative group overflow-hidden rounded-2xl aspect-square bg-orange-50 border border-orange-100 shadow-sm transition-all duration-500 hover:shadow-xl">
              <img 
                src={item.url} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <span className="font-bold text-lg">{item.title}</span>
                  <p className="text-xs text-orange-200 mt-1 uppercase tracking-widest">Happy Paws Moment</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PetGallery;
