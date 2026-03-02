import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

interface LandingProps {
  onLogin: () => void;
}

export const Landing: React.FC<LandingProps> = ({ onLogin }) => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-between p-8 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-40 grayscale"
        style={{ 
          backgroundImage: `url('https://storage.googleapis.com/dala-prod-public-storage/generated-images/4bb36d88-303a-4ee4-b03f-729daf710616/landing-background-9cfcf54f-1772448871637.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-transparent" />

      {/* Logo */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: 'spring' }}
        className="z-10 mt-12"
      >
        <img 
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/4bb36d88-303a-4ee4-b03f-729daf710616/getu-logo-98c9812e-1772448870682.webp" 
          alt="Getu Electrical Logo" 
          className="w-32 h-32 object-contain filter drop-shadow-[0_0_15px_rgba(255,0,0,0.5)]"
        />
      </motion.div>

      {/* Content */}
      <div className="z-10 text-center w-full mb-12">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl font-black mb-2 tracking-tight"
        >
          POWERING YOUR <span className="text-red-600">PROJECTS</span>
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-zinc-400 mb-8"
        >
          Professional Electrical Solutions in Addis Ababa
        </motion.p>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="space-y-4"
        >
          <button 
            onClick={onLogin}
            className="w-full bg-white text-black font-bold py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-zinc-200 transition-colors"
          >
            <Mail size={20} />
            Sign in with Email
          </button>
          
          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={onLogin}
              className="bg-zinc-800/80 backdrop-blur-md border border-zinc-700 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-zinc-700 transition-colors"
            >
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
              Google
            </button>
            <button 
              onClick={onLogin}
              className="bg-zinc-800/80 backdrop-blur-md border border-zinc-700 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-zinc-700 transition-colors"
            >
              <img src="https://www.svgrepo.com/show/303108/apple-black.svg" className="w-5 h-5 invert" alt="Apple" />
              Apple
            </button>
          </div>
        </motion.div>
      </div>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="z-10 text-xs text-zinc-500 mb-4"
      >
        By signing in, you agree to our Terms and Privacy Policy
      </motion.p>
    </div>
  );
};