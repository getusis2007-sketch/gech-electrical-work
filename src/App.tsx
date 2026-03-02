import React, { useState } from 'react';
import { Toaster } from 'sonner';
import { Landing } from './components/screens/Landing';
import { Dashboard } from './components/screens/Dashboard';
import { Services } from './components/screens/Services';
import { RequestForm } from './components/screens/RequestForm';
import { Contact } from './components/screens/Contact';
import { BottomNav } from './components/layout/BottomNav';
import { AnimatePresence, motion } from 'framer-motion';

export type Screen = 'landing' | 'home' | 'services' | 'jobs' | 'profile' | 'contact' | 'request';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('landing');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentScreen('home');
  };

  const navigate = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'landing':
        return <Landing onLogin={handleLogin} />;
      case 'home':
        return <Dashboard onNavigate={navigate} />;
      case 'services':
        return <Services onNavigate={navigate} />;
      case 'request':
        return <RequestForm onNavigate={navigate} />;
      case 'contact':
        return <Contact />;
      case 'jobs':
        return (
          <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)] p-6 text-center">
            <h2 className="text-2xl font-bold mb-4">My Jobs</h2>
            <p className="text-zinc-400">You don't have any active jobs at the moment.</p>
          </div>
        );
      case 'profile':
        return (
          <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)] p-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Profile</h2>
            <div className="w-24 h-24 bg-zinc-800 rounded-full mb-4 flex items-center justify-center border-2 border-[#FF0000]">
               <span className="text-3xl font-bold">G</span>
            </div>
            <p className="text-white font-semibold">Gech Sisay</p>
            <p className="text-zinc-400 mb-6">gechsisay5@gmail.com</p>
            <button 
              onClick={() => { setIsAuthenticated(false); setCurrentScreen('landing'); }}
              className="bg-[#FF0000] text-white px-6 py-2 rounded-lg font-medium"
            >
              Sign Out
            </button>
          </div>
        );
      default:
        return <Dashboard onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans max-w-md mx-auto relative shadow-2xl overflow-hidden selection:bg-[#FF0000]/30">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScreen}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="min-h-screen"
        >
          {renderScreen()}
        </motion.div>
      </AnimatePresence>

      {isAuthenticated && currentScreen !== 'landing' && (
        <BottomNav currentScreen={currentScreen} navigate={navigate} />
      )}
      
      <Toaster position="top-center" theme="dark" richColors />
    </div>
  );
};

export default App;