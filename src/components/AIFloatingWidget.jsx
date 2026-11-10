'use client';
import { useState, useEffect } from 'react';

export default function AIFloatingWidget() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const [showBubble, setShowBubble] = useState(false);

  // Sound notification helper
  const playNotification = () => {
    try {
      const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2354/2354-preview.mp3');
      audio.volume = 0.4;
      audio.play();
    } catch (e) {
      console.log('Audio autoplay blocked or failed');
    }
  };

  useEffect(() => {
    // Icon appears after 3s
    const iconTimer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    // Bubble appears after 16s
    const bubbleTimer = setTimeout(() => {
      setShowBubble(true);
      playNotification();
    }, 16000);

    return () => {
      clearTimeout(iconTimer);
      clearTimeout(bubbleTimer);
    };
  }, []);

  useEffect(() => {
    if (isDismissed) {
      const reappearTimer = setTimeout(() => {
        setIsDismissed(false);
        setIsVisible(true);
        setShowBubble(true);
        playNotification();
      }, 10000); 

      return () => clearTimeout(reappearTimer);
    }
  }, [isDismissed]);

  useEffect(() => {
    if (isVisible && !showBubble && !isDismissed) {
      const reappearBubbleTimer = setTimeout(() => {
        setShowBubble(true);
        playNotification();
      }, 20000); // Reappear bubble after 20s if closed specifically

      return () => clearTimeout(reappearBubbleTimer);
    }
  }, [isVisible, showBubble, isDismissed]);

  const handleClose = (e) => {
    e.stopPropagation();
    setIsVisible(false);
    setIsDismissed(true);
  };

  const closeBubble = (e) => {
    e.stopPropagation();
    setShowBubble(false);
  };

  const handleClick = () => {
    window.dispatchEvent(new CustomEvent('openAIModal'));
  };

  if (!isVisible && !isDismissed) return null;

  return (
    <div 
      className={`fixed bottom-[92px] right-5 z-[9998] transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-90 pointer-events-none'
      }`}
    >
      <div className="relative group">
        {/* Tooltip/Chat Bubble */}
        {showBubble && (
          <div 
            onClick={handleClick}
            className="absolute bottom-full right-0 mb-3 w-40 bg-white rounded-2xl p-2.5 shadow-2xl border border-blue-100 cursor-pointer animate-bounce-slow"
          >
            <button 
              onClick={closeBubble}
              className="absolute -top-2 -right-2 w-5 h-5 bg-white border border-blue-100 text-blue-500 rounded-full flex items-center justify-center hover:bg-blue-50 transition-colors shadow-sm"
            >
              <i className="fas fa-times text-[8px]" />
            </button>
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                <i className="fas fa-robot text-[9px] text-white" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-800 leading-tight">
                  Hi! Need help planning your trip?
                </p>
                <p className="text-[8px] text-blue-600 font-black uppercase tracking-widest mt-1">
                  AI Planner Ready
                </p>
              </div>
            </div>
            {/* Arrow */}
            <div className="absolute top-full right-6 w-2.5 h-2.5 bg-white border-r border-b border-blue-100 rotate-45 -mt-1" />
          </div>
        )}

        {/* Main AI Pulse Icon */}
        <button
          onClick={handleClick}
          className="relative w-11 h-11 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.4)] group-hover:scale-110 transition-transform overflow-hidden"
        >
          {/* Pulsing Ring */}
          <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-20" />
          
          <i className="fas fa-wand-magic-sparkles text-xl text-white relative z-10" />
          
          {/* Close Button */}
          <div 
            onClick={handleClose}
            className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gray-900 border border-white/20 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors z-20"
          >
            <i className="fas fa-times text-[7px]" />
          </div>
        </button>
      </div>
    </div>
  );
}
