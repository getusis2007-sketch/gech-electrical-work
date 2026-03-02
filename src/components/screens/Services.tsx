import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Lightbulb, 
  Cable, 
  Settings, 
  Activity, 
  ShieldCheck, 
  HardHat, 
  ArrowLeft,
  ChevronRight
} from 'lucide-react';
import { Screen } from '../../App';

interface ServicesProps {
  onNavigate: (screen: Screen) => void;
}

const residentialServices = [
  { id: 1, name: 'Wiring & Rewiring', icon: Cable },
  { id: 2, name: 'Lighting Installation', icon: Lightbulb },
  { id: 3, name: 'Socket Installation', icon: Zap },
  { id: 4, name: 'EV Charger Installation', icon: Activity },
  { id: 5, name: 'Pump Installation', icon: Settings },
  { id: 6, name: 'Distribution Boards', icon: ShieldCheck },
];

const commercialServices = [
  { id: 1, name: 'Office Fit-outs', icon: HardHat },
  { id: 2, name: 'Data Cabling', icon: Cable },
  { id: 3, name: 'Emergency Lighting', icon: Lightbulb },
];

export const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  return (
    <div className="p-6">
      <header className="flex items-center gap-4 mb-8 pt-4">
        <button 
          onClick={() => onNavigate('home')}
          className="p-2 bg-charcoal-light rounded-xl text-zinc-400"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-2xl font-bold">Our Services</h1>
      </header>

      <div className="space-y-8 pb-24">
        <section>
          <h2 className="text-red-600 font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-8 h-[2px] bg-red-600"></span>
            Residential
          </h2>
          <div className="space-y-3">
            {residentialServices.map((service) => (
              <motion.div 
                whileTap={{ scale: 0.98 }}
                key={service.id}
                className="bg-charcoal-light border border-zinc-800 p-4 rounded-2xl flex items-center justify-between group"
                onClick={() => onNavigate('request')}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-zinc-800 text-red-600 rounded-xl flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <service.icon size={20} />
                  </div>
                  <span className="font-semibold text-zinc-200">{service.name}</span>
                </div>
                <ChevronRight size={18} className="text-zinc-600" />
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-red-600 font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-8 h-[2px] bg-red-600"></span>
            Commercial
          </h2>
          <div className="space-y-3">
            {commercialServices.map((service) => (
              <motion.div 
                whileTap={{ scale: 0.98 }}
                key={service.id}
                className="bg-charcoal-light border border-zinc-800 p-4 rounded-2xl flex items-center justify-between group"
                onClick={() => onNavigate('request')}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-zinc-800 text-red-600 rounded-xl flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <service.icon size={20} />
                  </div>
                  <span className="font-semibold text-zinc-200">{service.name}</span>
                </div>
                <ChevronRight size={18} className="text-zinc-600" />
              </motion.div>
            ))}
          </div>
        </section>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onNavigate('request')}
          className="w-full bg-red-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-red-900/20"
        >
          Request a Quote
        </motion.button>
      </div>
    </div>
  );
};