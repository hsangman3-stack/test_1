
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiChat } from '../services/geminiService.ts';
import { ChatMessage } from '../types.ts';

const AIConsultant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: '안녕하세요! 해피 포즈 펫 컨설턴트입니다. 반려견에 대해 궁금한 점이 있으신가요?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef<any>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatRef.current = getGeminiChat();
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      if (!chatRef.current) {
        chatRef.current = getGeminiChat();
      }
      const response = await chatRef.current.sendMessage({ message: userMessage });
      const botText = response.text || "죄송합니다. 답변을 생성하는 데 문제가 발생했습니다.";
      setMessages(prev => [...prev, { role: 'model', text: botText }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: "네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="consultant" className="py-20 bg-orange-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">AI 펫 컨설턴트</h2>
          <p className="text-gray-600">반려견의 건강, 훈련, 궁금한 점을 언제든 물어보세요.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col h-[500px] border border-orange-100">
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-2xl ${
                  msg.role === 'user' 
                  ? 'bg-orange-500 text-white rounded-br-none' 
                  : 'bg-gray-100 text-gray-800 rounded-bl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 p-4 rounded-2xl rounded-bl-none animate-pulse text-gray-400">
                  생각 중입니다...
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-gray-100 bg-gray-50 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="질문을 입력하세요... (예: 사료를 안 먹어요)"
              className="flex-1 p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="bg-orange-500 text-white px-6 py-2 rounded-xl font-bold hover:bg-orange-600 transition disabled:opacity-50"
            >
              전송
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIConsultant;
