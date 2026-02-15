
import React, { useState } from 'react';
import { generateFutureImage } from '../services/geminiService';

const AIDesignLab: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setIsLoading(true);
    const url = await generateFutureImage(prompt);
    setImageUrl(url);
    setIsLoading(false);
  };

  return (
    <section id="ai-lab" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-3 py-1 glass border border-slate-200 dark:border-white/5 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-gray-400 mb-6">
              Experimental Laboratory
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tighter text-slate-900 dark:text-white">
              AI-ASSISTED <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-500 to-slate-300 dark:from-white dark:via-gray-400 dark:to-gray-600">CREATIVITY.</span>
            </h2>
            <p className="text-slate-600 dark:text-gray-400 text-lg mb-10 leading-relaxed max-w-lg">
              Experience Dorsis Girma's design philosophy enhanced by Gemini. Describe a futuristic concept, and let's generate a visual prototype together.
            </p>
            
            <div className="glass p-6 rounded-3xl space-y-4">
              <input 
                type="text" 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Cyberpunk city with floating code..."
                className="w-full bg-slate-100 dark:bg-white/5 border-none rounded-2xl px-6 py-4 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-600 focus:ring-2 focus:ring-slate-400 dark:focus:ring-white outline-none transition-all"
                onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
              />
              <button 
                onClick={handleGenerate}
                disabled={isLoading}
                className="w-full bg-slate-900 dark:bg-white text-white dark:text-black py-4 rounded-2xl font-black flex items-center justify-center hover:scale-[1.02] transition-all disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <i className="fas fa-spinner animate-spin mr-3"></i> 
                    GENERATING VISUAL...
                  </>
                ) : (
                  <>
                    <i className="fas fa-magic mr-3"></i> 
                    GENERATE PROTOTYPE
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video glass rounded-[2.5rem] overflow-hidden relative flex items-center justify-center border-2 border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-black/50">
              {imageUrl ? (
                <img src={imageUrl} alt="AI Generation" className="w-full h-full object-cover animate-in fade-in duration-1000" />
              ) : (
                <div className="text-center p-12 opacity-30 dark:opacity-20 group">
                  <i className="fas fa-robot text-8xl mb-6 group-hover:scale-110 transition-transform text-slate-400 dark:text-white"></i>
                  <p className="font-mono text-sm tracking-widest text-slate-600 dark:text-white">AWAITING NEURAL INPUT...</p>
                </div>
              )}
              {isLoading && (
                <div className="absolute inset-0 bg-white/40 dark:bg-black/40 backdrop-blur-md flex items-center justify-center">
                   <div className="w-16 h-16 border-4 border-slate-900 dark:border-white border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
            </div>
            <div className="absolute -top-4 -right-4 glass px-4 py-2 rounded-xl text-[10px] font-mono border-slate-200 dark:border-white/20 text-slate-900 dark:text-white">
              MODALITY: IMAGE_V2
            </div>
            <div className="absolute -bottom-4 -left-4 glass px-4 py-2 rounded-xl text-[10px] font-mono border-slate-200 dark:border-white/20 text-slate-900 dark:text-white">
              ENGINE: GEMINI-2.5-FLASH-IMAGE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDesignLab;
