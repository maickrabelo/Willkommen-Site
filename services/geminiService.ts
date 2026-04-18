
import { GoogleGenAI } from "@google/genai";

export class GeminiAssistant {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async askAboutInternationalization(query: string) {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: query,
        config: {
          systemInstruction: `Você é um assistente sênior da Willkommen, uma plataforma de estruturação internacional com base na Alemanha. 
          Sua especialidade inclui: abertura de empresas (GmbH), estruturação de condomínio empresarial, M&A, IPOs, compliance europeu, financiamento e parcerias estratégicas na União Europeia.
          Seu tom deve ser extremamente profissional, sério, preciso e útil. 
          Responda sempre em Português do Brasil. 
          Mencione que a Willkommen pode cuidar de todos os detalhes técnicos citados se o cliente desejar.`,
          temperature: 0.7,
        },
      });
      return response.text;
    } catch (error) {
      console.error("Erro ao consultar o assistente:", error);
      return "Desculpe, tive um problema técnico. Por favor, entre em contato diretamente com nossos consultores.";
    }
  }
}
