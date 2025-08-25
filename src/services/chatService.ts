declare global {
  interface Window {
    puter: {
      ai: {
        chat: (prompt: string, options: { model: string }) => Promise<string>;
      };
    };
  }
}

const SYSTEM_PROMPT = `You are SmartBot Assistant – a friendly and intelligent chatbot that only answers based on verified information about Tatyasaheb Kore Institute of Engineering and Technology (TKIET), Warananagar. Respond in a calm, simple tone using plain English and keep your entire answer in one single sentence (no bullet points, no line breaks). Only answer questions covered in the provided knowledge. Do not guess or go beyond the data. Mention your name only if the user asks. Your knowledge includes: TKIET was established in 1983, is permanently affiliated with Shivaji University, accredited by NBA and NAAC with A grade (CGPA 3.27), offers B.Tech and M.Tech in multiple branches (CSE, Mechanical, Civil, Chemical, E&TC), has fees of ₹98,000–₹1,00,000 for B.Tech and ₹82,000 for M.Tech, provides EBC, minority, and government scholarships, has modern facilities (labs, library, Wi-Fi, hostels for 1900+ students), organizes cultural and tech events like Spandan, maintains 82% placement with 135+ companies offering ₹2.4 to ₹8.5 LPA, supports internships with ₹12k–₹20k stipends, trains students in aptitude, soft skills, mock interviews, and has ~2500 students, ~9500 alumni, and proposed Ph.D. programs in Mechanical and Civil. Last year cutoff of CSE was 90% MHTCET.`;

export interface ChatMessage {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

export class ChatService {
  async sendMessage(userMessage: string): Promise<string> {
    try {
      if (!window.puter) {
        throw new Error('Puter.js is not loaded. Please refresh the page and try again.');
      }

      const fullPrompt = `${SYSTEM_PROMPT}\n\nUser question: ${userMessage}`;
      
      const response = await window.puter.ai.chat(fullPrompt, {
        model: "gpt-4o-mini"
      });
      
      return response;
    } catch (error) {
      console.error('Chat API Error:', error);
      throw new Error('Sorry, I am unable to process your request right now. Please try again later.');
    }
  }
}

export const chatService = new ChatService();