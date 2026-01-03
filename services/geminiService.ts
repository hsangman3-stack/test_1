
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getGeminiChat = () => {
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  return ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: `당신은 '해피 포즈(Happy Paws) 애견센터'의 전문 펫 컨설턴트입니다. 
      친절하고 전문적인 말투로 강아지 건강, 훈련, 미용, 호텔 서비스에 대해 답변해주세요. 
      우리 센터는 미용, 호텔, 유치원 서비스를 제공합니다. 
      답변은 한국어로 정중하게 해주세요.`,
    },
  });
};
