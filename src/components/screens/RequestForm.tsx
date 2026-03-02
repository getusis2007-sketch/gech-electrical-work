import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Camera, Upload, Calendar as CalendarIcon, Clock, CheckCircle2 } from 'lucide-react';
import { Screen } from '../../App';
import { toast } from 'sonner';

interface RequestFormProps {
  onNavigate: (screen: Screen) => void;
}

export const RequestForm: React.FC<RequestFormProps> = ({ onNavigate }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Request submitted successfully!');
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh] p-8 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-24 h-24 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6"
        >
          <CheckCircle2 size={48} />
        </motion.div>
        <h2 className="text-2xl font-bold mb-2">Request Received!</h2>
        <p className="text-zinc-400 mb-8">We've received your electrical service request. One of our experts will contact you shortly.</p>
        <button 
          onClick={() => onNavigate('home')}
          className="bg-red-600 text-white px-8 py-3 rounded-xl font-bold"
        >
          Back to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <header className="flex items-center gap-4 mb-8 pt-4">
        <button 
          onClick={() => onNavigate('home')}
          className="p-2 bg-charcoal-light rounded-xl text-zinc-400"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-2xl font-bold">Service Request</h1>
      </header>

      <form onSubmit={handleSubmit} className="space-y-6 pb-24">
        <div className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-zinc-400">Full Name</label>
            <input 
              required
              type="text" 
              placeholder="e.g. Abebe Kebede"
              className="w-full bg-charcoal-light border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-zinc-400">Contact Number</label>
            <input 
              required
              type="tel" 
              placeholder="0918 393 264"
              className="w-full bg-charcoal-light border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-zinc-400">Service Address</label>
            <input 
              required
              type="text" 
              placeholder="e.g. Bole Road, Addis Ababa"
              className="w-full bg-charcoal-light border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-zinc-400">Describe Your Issue</label>
            <textarea 
              required
              rows={4}
              placeholder="Tell us what needs to be fixed..."
              className="w-full bg-charcoal-light border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors resize-none"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-zinc-400">Upload Photos</label>
            <div 
              onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
              onDragLeave={() => setDragActive(false)}
              className={`border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center gap-2 transition-colors ${dragActive ? 'border-red-600 bg-red-600/5' : 'border-zinc-800 bg-charcoal-light'}`}
            >
              <div className="w-12 h-12 bg-zinc-800 text-zinc-400 rounded-full flex items-center justify-center">
                <Camera size={24} />
              </div>
              <p className="text-sm text-zinc-400 font-medium">Drag and drop or <span className="text-red-600">browse</span></p>
              <p className="text-xs text-zinc-500">JPG, PNG, up to 10MB</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-zinc-400">Preferred Date</label>
              <div className="relative">
                <CalendarIcon size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
                <input 
                  required
                  type="date" 
                  className="w-full bg-charcoal-light border border-zinc-800 rounded-xl pl-11 pr-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-zinc-400">Preferred Time</label>
              <div className="relative">
                <Clock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
                <input 
                  required
                  type="time" 
                  className="w-full bg-charcoal-light border border-zinc-800 rounded-xl pl-11 pr-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors"
                />
              </div>
            </div>
          </div>
        </div>

        <button 
          type="submit"
          className="w-full bg-red-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-red-900/20 active:scale-95 transition-transform"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
};