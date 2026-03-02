import React from 'react';
import { Home, ClipboardList, User, Phone } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Screen } from '../../App';
import { motion } from 'framer-motion';

interface BottomNavProps {
  currentScreen: Screen;
  navigate: (screen: Screen) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentScreen, navigate }) => {
  const items = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'jobs', icon: ClipboardList, label: 'My Jobs' },
    { id: 'profile', icon: User, label: 'Profile' },
    { id: 'contact', icon: Phone, label: 'Contact' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pb-6 px-4 pointer-events-none">
      <div className="bg-[#1E1E1E]/95 backdrop-blur-md border border-zinc-800 w-full max-w-md h-16 rounded-2xl flex items-center justify-around shadow-2xl pointer-events-auto">
        {items.map((item) => {
          const isActive = currentScreen === item.id;
          const Icon = item.icon;
          
          return (
            <button
              key={item.id}
              onClick={() => navigate(item.id as Screen)}
              className={cn(
                "flex flex-col items-center justify-center w-full h-full transition-all duration-300 relative",
                isActive ? "text-[#FF0000]" : "text-zinc-500 hover:text-zinc-300"
              )}
            >
              <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] mt-1 font-medium">{item.label}</span>
              {isActive && (
                <motion.div 
                  layoutId="nav-indicator"
                  className="absolute -bottom-1 w-1 h-1 bg-[#FF0000] rounded-full"
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};