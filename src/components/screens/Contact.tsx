import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';

export const Contact: React.FC = () => {
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully!');
  };

  return (
    <div className="p-6">
      <header className="mb-8 pt-4">
        <h1 className="text-2xl font-bold">Contact Us</h1>
        <p className="text-zinc-400 text-sm">Get in touch with Getu Electrical Work</p>
      </header>

      <div className="space-y-4 mb-8">
        <a 
          href="tel:0918393264" 
          className="flex items-center gap-4 bg-charcoal-light border border-zinc-800 p-4 rounded-2xl group active:scale-95 transition-transform"
        >
          <div className="w-12 h-12 bg-red-600/10 text-red-600 rounded-xl flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors">
            <Phone size={24} />
          </div>
          <div>
            <p className="text-xs text-zinc-500 font-medium">Call Us</p>
            <p className="font-bold text-white">0918393264</p>
          </div>
          <ExternalLink size={16} className="ml-auto text-zinc-600" />
        </a>

        <a 
          href="mailto:gechsisay5@gmail.com" 
          className="flex items-center gap-4 bg-charcoal-light border border-zinc-800 p-4 rounded-2xl group active:scale-95 transition-transform"
        >
          <div className="w-12 h-12 bg-red-600/10 text-red-600 rounded-xl flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors">
            <Mail size={24} />
          </div>
          <div>
            <p className="text-xs text-zinc-500 font-medium">Email Us</p>
            <p className="font-bold text-white">gechsisay5@gmail.com</p>
          </div>
          <ExternalLink size={16} className="ml-auto text-zinc-600" />
        </a>

        <div className="flex items-center gap-4 bg-charcoal-light border border-zinc-800 p-4 rounded-2xl">
          <div className="w-12 h-12 bg-red-600/10 text-red-600 rounded-xl flex items-center justify-center">
            <MapPin size={24} />
          </div>
          <div>
            <p className="text-xs text-zinc-500 font-medium">Location</p>
            <p className="font-bold text-white">Addis Ababa, Ethiopia</p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="h-48 w-full bg-zinc-800 rounded-2xl overflow-hidden relative border border-zinc-700">
           {/* Mock Map View */}
           <div className="absolute inset-0 bg-[#242424] flex items-center justify-center overflow-hidden">
             <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
             <div className="w-32 h-32 bg-red-600/20 rounded-full animate-pulse flex items-center justify-center">
                <div className="w-4 h-4 bg-red-600 rounded-full shadow-[0_0_15px_rgba(255,0,0,0.8)]" />
             </div>
             <div className="absolute bottom-4 left-4 bg-charcoal-light/80 backdrop-blur-md px-3 py-1 rounded-lg border border-zinc-700 text-[10px] font-bold">
               ADDIS ABABA, ET
             </div>
           </div>
        </div>
      </div>

      <section className="pb-24">
        <h3 className="font-bold text-lg mb-4">Send a Message</h3>
        <form onSubmit={handleSendMessage} className="space-y-4">
          <input 
            required
            type="text" 
            placeholder="Your Question"
            className="w-full bg-charcoal-light border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors"
          />
          <button 
            type="submit"
            className="w-full bg-red-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-red-900/20 active:scale-95 transition-transform"
          >
            Send Message <Send size={18} />
          </button>
        </form>
      </section>
    </div>
  );
};