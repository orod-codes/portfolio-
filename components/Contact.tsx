
import React, { useState } from 'react';
import { getGeminiResponse } from '../services/geminiService';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [aiMessage, setAiMessage] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Transmission Received from ${formData.name}!`);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleAiAsk = async () => {
    if (!aiMessage.trim()) return;
    setIsAiLoading(true);
    const response = await getGeminiResponse(aiMessage);
    setAiResponse(response);
    setIsAiLoading(false);
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-20">
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter text-slate-900 dark:text-white leading-none">
              INITIATE <br/>LINK_UP <span className="text-slate-400 dark:text-gray-500 underline decoration-blue-500/20 underline-offset-8 italic">NOW</span>.
            </h2>
            
            <div className="space-y-6 md:space-y-8 mb-12">
              <div className="flex items-center space-x-4 md:space-x-6 group">
                <div className="w-12 h-12 md:w-16 md:h-16 glass rounded-xl md:rounded-2xl flex items-center justify-center text-lg md:text-xl group-hover:bg-slate-900 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <p className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-gray-500">Secure Transmission</p>
                  <a href="mailto:yeabsiramihret@proton.me" className="text-base md:text-xl font-bold hover:underline text-slate-900 dark:text-white truncate block max-w-[250px] md:max-w-none">yeabsiramihret@proton.me</a>
                </div>
              </div>

              <div className="flex items-center space-x-4 md:space-x-6 group">
                <div className="w-12 h-12 md:w-16 md:h-16 glass rounded-xl md:rounded-2xl flex items-center justify-center text-lg md:text-xl group-hover:bg-slate-900 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white">
                  <i className="fab fa-telegram"></i>
                </div>
                <div>
                  <p className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-gray-500">P2P Connect</p>
                  <a href="https://t.me/yeab_neh" target="_blank" className="text-base md:text-xl font-bold hover:underline text-slate-900 dark:text-white">@yeab_neh</a>
                </div>
              </div>
            </div>

            {/* AI Assistant Tool */}
            <div className="glass border border-slate-200 dark:border-white/10 p-6 md:p-8 rounded-3xl bg-slate-50 dark:bg-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-3 opacity-10">
                <i className="fas fa-microchip text-4xl"></i>
              </div>
              <h3 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] mb-4 flex items-center text-slate-900 dark:text-white">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse shadow-[0_0_8px_green]"></div>
                AI_SYNAPSE_ASSISTANT
              </h3>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={aiMessage}
                  onChange={(e) => setAiMessage(e.target.value)}
                  placeholder="Query my architecture..." 
                  className="flex-1 bg-white/60 dark:bg-white/5 border border-slate-200 dark:border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 transition-all outline-none text-slate-900 dark:text-white placeholder:opacity-50"
                  onKeyDown={(e) => e.key === 'Enter' && handleAiAsk()}
                />
                <button 
                  onClick={handleAiAsk}
                  disabled={isAiLoading}
                  className="bg-slate-900 dark:bg-white text-white dark:text-black px-5 md:px-6 py-3 rounded-xl font-black hover:opacity-80 transition-opacity disabled:opacity-50"
                >
                  {isAiLoading ? <i className="fas fa-spinner animate-spin"></i> : <i className="fas fa-paper-plane"></i>}
                </button>
              </div>
              {aiResponse && (
                <div className="mt-6 p-4 glass rounded-xl border-l-4 border-blue-600 dark:border-white animate-in slide-in-from-top duration-300">
                  <p className="text-[11px] md:text-sm italic leading-relaxed text-slate-600 dark:text-gray-300">{aiResponse}</p>
                </div>
              )}
            </div>
          </div>

          <div className="relative">
            {/* Background Decor for Form */}
            <div className="absolute -inset-4 bg-blue-600/5 dark:bg-white/5 blur-3xl rounded-full pointer-events-none"></div>
            
            <form onSubmit={handleSubmit} className="relative z-10 space-y-5 md:space-y-6 glass p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl bg-white/80 dark:bg-white/5 border border-slate-100 dark:border-white/10">
              <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                <div>
                  <label className="text-slate-900 dark:text-white font-black uppercase text-[8px] md:text-[9px] tracking-widest block mb-2 opacity-60">Source_ID</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white border-none rounded-xl px-4 py-3 md:py-4 focus:ring-1 focus:ring-blue-500 outline-none text-sm"
                    placeholder="Full Name"
                  />
                </div>
                <div>
                  <label className="text-slate-900 dark:text-white font-black uppercase text-[8px] md:text-[9px] tracking-widest block mb-2 opacity-60">Return_Address</label>
                  <input 
                    type="email" 
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white border-none rounded-xl px-4 py-3 md:py-4 focus:ring-1 focus:ring-blue-500 outline-none text-sm"
                    placeholder="email@host.com"
                  />
                </div>
              </div>
              <div>
                <label className="text-slate-900 dark:text-white font-black uppercase text-[8px] md:text-[9px] tracking-widest block mb-2 opacity-60">Payload</label>
                <textarea 
                  required 
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white border-none rounded-xl px-4 py-3 md:py-4 focus:ring-1 focus:ring-blue-500 outline-none resize-none text-sm"
                  placeholder="Brief your project objective..."
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-slate-900 dark:bg-white text-white dark:text-black py-4 md:py-5 rounded-xl font-black text-sm md:text-lg hover:scale-[1.01] active:scale-[0.99] transition-all tracking-[0.2em] shadow-xl"
              >
                EXECUTE_SEND <i className="fas fa-arrow-right ml-3"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
