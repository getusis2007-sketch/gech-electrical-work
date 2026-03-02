import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Briefcase, ArrowRight, Power, Construction, Wrench } from 'lucide-react';
import { Screen } from '../../App';

interface DashboardProps {
  onNavigate: (screen: Screen) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  return (
    <div className="p-6">
      <header className="flex justify-between items-center mb-8 pt-4">
        <div>
          <h2 className="text-zinc-400 text-sm font-medium">Welcome back, Gech</h2>
          <h1 className="text-2xl font-bold">Your Trusted <span className="text-[#FF0000]">Electrical Partner</span></h1>
        </div>
        <div className="w-10 h-10 bg-[#FF0000] rounded-full flex items-center justify-center border-2 border-white/20 shadow-lg">
          <Zap size={20} className="text-white fill-white" />
        </div>
      </header>

      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-[#FF0000] rounded-3xl p-6 mb-8 relative overflow-hidden shadow-xl shadow-red-900/40"
      >
        <div className="relative z-10">
          <h3 className="text-white text-xl font-bold mb-2">Need an Electrician?</h3>
          <p className="text-white/80 text-sm mb-6 max-w-[200px]">Professional solutions for residential and commercial projects.</p>
          <button 
            onClick={() => onNavigate('request')}
            className="bg-white text-[#FF0000] px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-zinc-100 transition-colors"
          >
            Request Service <ArrowRight size={18} />
          </button>
        </div>
        <Zap size={140} className="absolute -right-8 -bottom-8 text-white/10 rotate-12" />
      </motion.div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <button 
          onClick={() => onNavigate('request')}
          className="bg-[#1E1E1E] border border-zinc-800 p-6 rounded-2xl flex flex-col items-center gap-3 hover:border-[#FF0000] transition-all active:scale-95"
        >
          <div className="w-12 h-12 bg-[#FF0000]/10 text-[#FF0000] rounded-xl flex items-center justify-center">
            <Power size={24} />
          </div>
          <span className="font-semibold text-sm">Request Service</span>
        </button>

        <button 
          onClick={() => onNavigate('services')}
          className="bg-[#1E1E1E] border border-zinc-800 p-6 rounded-2xl flex flex-col items-center gap-3 hover:border-[#FF0000] transition-all active:scale-95"
        >
          <div className="w-12 h-12 bg-[#FF0000]/10 text-[#FF0000] rounded-xl flex items-center justify-center">
            <Construction size={24} />
          </div>
          <span className="font-semibold text-sm">Our Services</span>
        </button>
      </div>

      <section className="mb-24">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg">Featured Projects</h3>
          <button className="text-[#FF0000] text-xs font-semibold">See All</button>
        </div>
        <div className="space-y-4">
          <div className="bg-[#1E1E1E] border border-zinc-800 p-4 rounded-2xl flex gap-4 items-center">
             <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
               <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/4bb36d88-303a-4ee4-b03f-729daf710616/service-highlight-acaa05e8-1772448871595.webp" 
                alt="Project" 
                className="w-full h-full object-cover"
               />
             </div>
             <div>
               <h4 className="font-bold text-sm">DB Board Assembly</h4>
               <p className="text-zinc-400 text-xs">Modern office, Addis Ababa</p>
               <div className="flex items-center gap-2 mt-2">
                 <span className="bg-green-500/10 text-green-500 text-[10px] px-2 py-0.5 rounded-full font-bold">COMPLETED</span>
                 <span className="text-zinc-500 text-[10px]">Aug 24, 2024</span>
               </div>
             </div>
          </div>
          
          <div className="bg-[#1E1E1E] border border-zinc-800 p-4 rounded-2xl flex gap-4 items-center opacity-80">
             <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-zinc-800 flex items-center justify-center">
                <Wrench size={24} className="text-zinc-600" />
             </div>
             <div>
               <h4 className="font-bold text-sm">Industrial Wiring</h4>
               <p className="text-zinc-400 text-xs">Manufacturing Unit</p>
               <div className="flex items-center gap-2 mt-2">
                 <span className="bg-blue-500/10 text-blue-500 text-[10px] px-2 py-0.5 rounded-full font-bold">ONGOING</span>
               </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};