
import React, { useState } from 'react';
import { MessageSquare, Send, X, Bot } from 'lucide-react';
import { GeminiAssistant } from '../services/geminiService';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    { role: 'bot', text: 'Olá! Sou o assistente da Willkommen. Como posso ajudar na sua internacionalização para a Alemanha hoje?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const assistant = new GeminiAssistant();
      const response = await assistant.askAboutInternationalization(userMsg);
      setMessages(prev => [...prev, { role: 'bot', text: response || 'Desculpe, não consegui processar.' }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'bot', text: 'Houve um erro na comunicação. Tente novamente.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="bg-[#2B2B28] border border-[#3F4C63] w-80 sm:w-96 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-[#3F4C63] p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Bot className="w-5 h-5 text-[#FFCF00]" />
              <span className="font-bold text-white text-sm">Willkommen Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="h-80 overflow-y-auto p-4 space-y-4 bg-[#2B2B28]">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-xl text-sm ${
                  m.role === 'user' 
                  ? 'bg-[#FFCF00] text-[#2B2B28] font-medium' 
                  : 'bg-[#3F4C63]/40 text-[#D2D3D5]'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-[#3F4C63]/40 p-3 rounded-xl text-xs text-[#D2D3D5] italic animate-pulse">
                  Pensando...
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-[#3F4C63] flex space-x-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Pergunte sobre tributos, leis..."
              className="flex-1 bg-[#2B2B28] border border-[#3F4C63] rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#FFCF00]"
            />
            <button 
              onClick={handleSend}
              className="bg-[#FFCF00] text-[#2B2B28] p-2 rounded hover:bg-white transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-[#FFCF00] text-[#2B2B28] p-4 rounded-full shadow-lg hover:scale-110 transition-transform active:scale-95 flex items-center justify-center"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default AIAssistant;
