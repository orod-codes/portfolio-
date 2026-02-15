import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the digital assistant of Dorsis Girma. 
Dorsis is a dedicated Software Engineer specializing in Full-Stack Web Development and System Development.
His technical core includes: C, Python, TypeScript, React, Node.js, and low-level system software.
He is currently a Software Engineer at INSA and a student at Adama Science & Technology University.
He focuses on building scalable web architectures and robust system-level applications.
Do not talk about graphic design, video editing, or posters unless it pertains specifically to UI development or front-end systems.
Answer questions professionally and concisely.
For hiring inquiries, direct them to dorsisgirma@proton.me or the contact form.
`;

/**
 * Handles general text-based queries using gemini-3-flash-preview.
 */
export const getGeminiResponse = async (userMessage: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text || "Connection to the neural network failed. Please retry.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Dorsis's digital twin is currently undergoing maintenance.";
  }
};

/**
 * Generates futuristic images using gemini-2.5-flash-image.
 * Fixed error: Added missing export generateFutureImage for AIDesignLab component.
 */
export const generateFutureImage = async (prompt: string): Promise<string | null> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: `Create a futuristic, high-tech visual prototype representing: ${prompt}. The style should be clean, professional, and engineering-focused, reflecting the aesthetic of a senior software architect's digital lab. Focus on system architecture and clean UI elements.`,
          },
        ],
      },
    });

    // Iterate through response parts to find the image part
    if (response.candidates && response.candidates[0].content.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          const base64EncodeString: string = part.inlineData.data;
          return `data:image/png;base64,${base64EncodeString}`;
        }
      }
    }
    return null;
  } catch (error) {
    console.error("Image Generation Error:", error);
    return null;
  }
};
