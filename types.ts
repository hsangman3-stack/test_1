
export interface ServiceInfo {
  id: string;
  title: string;
  description: string;
  price: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface GalleryItem {
  id: number;
  url: string;
  title: string;
}
