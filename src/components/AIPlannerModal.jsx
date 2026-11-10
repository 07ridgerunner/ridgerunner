'use client';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { trackEnhancedConversion } from '@/utils/enhancedConversions';
import { getTrackingParams } from '@/utils/travdx';

const PHONE = '+919682300904';

export default function AIPlannerModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    month: '',
    people: '',
    tourType: '',
  });
  const [showResult, setShowResult] = useState(false);
  const router = useRouter();
  const scrollRef = useRef(null);

  useEffect(() => {
    // Global listener to open from floating widget or hero
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('openAIModal', handleOpen);

    return () => window.removeEventListener('openAIModal', handleOpen);
  }, []);

  const onClose = () => setIsOpen(false);

  const steps = [
    {
      id: 'name',
      question: "Hello! I'm your AI Trip Planner. What's your name, traveler?",
      placeholder: 'Enter your name...',
      type: 'text',
    },
    {
      id: 'month',
      question: "Nice to meet you, {name}! Which month are you planning to visit the paradise of Kashmir?",
      type: 'select',
      options: ['April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March'],
    },
    {
      id: 'people',
      question: "Great choice! Who will be accompanying you on this magical journey?",
      type: 'select',
      options: ['Solo Traveller', 'Couple (Honeymoon)', 'Family (3-4 members)', 'Group (5-8 members)', 'Large Group (9+)'],
    },
    {
      id: 'tourType',
      question: "Almost there! What kind of experience are you looking for in Kashmir?",
      type: 'select',
      options: ['Luxury & Boutique Houseboats', 'Budget-Friendly Adventure', 'Classic Sightseeing', 'Offbeat & Hidden Gems'],
    },
    {
      id: 'phone',
      question: "Final step! Please provide your WhatsApp number so I can send your generated AI itinerary and quotation.",
      placeholder: '10-digit mobile number...',
      type: 'tel',
    }
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setStep(0);
      setShowResult(false);
      setIsTyping(true);
      setTimeout(() => setIsTyping(false), 1200);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleNext = (val) => {
    const updatedForm = { ...form, [steps[step].id]: val };
    setForm(updatedForm);
    
    if (step < steps.length - 1) {
      setIsTyping(true);
      setTimeout(() => {
        setStep((prev) => prev + 1);
        setIsTyping(false);
      }, 1000);
    } else {
      handleFinalSubmit(updatedForm);
    }
  };

  const handleFinalSubmit = async (finalData) => {
    // 1. Fire to PHP in background — PHP se email + TravDX CRM dono jaate hain
    fetch('/send-mail.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...finalData,
        ...getTrackingParams(),
        leadSource: 'AI Planner',
        formId: 'kashmir-ai-planner',
      }),
      keepalive: true
    }).catch(err => console.error(err));

    // 2. Fire Google Ads Enhanced Conversion tracking
    await trackEnhancedConversion({ name: finalData.name, phone: finalData.phone });

    // 3. Redirect after a tiny safety delay to ensure fetch is dispatched
    setTimeout(() => {
      window.location.href = '/thank-you.html';
    }, 400);
  };

  if (!isOpen) return null;

  const currentStep = steps[step];
  const questionText = currentStep.question.replace('{name}', form.name || 'there');

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#020617]/95 backdrop-blur-md animate-fadeIn" onClick={onClose} />
      
      {/* AI Terminal Content */}
      <div className="relative w-full max-w-lg bg-gray-950 border border-blue-500/30 rounded-xl shadow-[0_0_50px_rgba(37,99,235,0.2)] overflow-hidden animate-slideUp">
        
        {/* Glowing Head */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        
        <div className="p-6 md:p-8 flex flex-col min-h-[460px]">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center border border-blue-500/50 shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                <i className="fas fa-robot text-blue-400 animate-pulse" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">Honor AI Trip Planner</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] text-blue-200/50 uppercase tracking-widest font-black">Online & Ready</span>
                </div>
              </div>
            </div>
            <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors">
              <i className="fas fa-times text-xl" />
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <div className="space-y-8">
              {/* AI Question */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-600/10 flex items-center justify-center mt-1 border border-blue-500/20">
                    <i className="fas fa-comment-dots text-blue-500 text-xs" />
                  </div>
                  <div className="flex-1">
                    {isTyping ? (
                      <div className="flex gap-1 items-center h-8">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce" />
                      </div>
                    ) : (
                      <p className="text-blue-50 font-medium text-lg leading-relaxed animate-fadeIn">
                        {questionText}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Interaction Section */}
              <div className={`transition-all duration-500 ${isTyping ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                {currentStep.type === 'text' || currentStep.type === 'tel' ? (
                  <div className="relative group flex flex-col md:flex-row items-center gap-4">
                    <div className="relative flex-1 w-full">
                      <input
                        autoFocus
                        type={currentStep.type}
                        placeholder={currentStep.placeholder}
                        className="w-full bg-blue-950/20 border-b-2 border-blue-500/30 text-white text-xl py-4 pr-12 focus:outline-none focus:border-blue-500 transition-all font-light"
                        onKeyDown={(e) => e.key === 'Enter' && e.target.value.trim() !== '' && handleNext(e.target.value)}
                        onChange={(e) => {
                          const btn = e.target.nextSibling;
                          if (e.target.value.trim() !== '') {
                            btn.style.opacity = '1';
                            btn.style.transform = 'translateX(0)';
                          } else {
                            btn.style.opacity = '0';
                            btn.style.transform = 'translateX(1rem)';
                          }
                        }}
                      />
                      <button 
                        onClick={(e) => {
                          const val = e.currentTarget.previousSibling.value;
                          if (val.trim() !== '') handleNext(val);
                        }}
                        className="absolute right-0 bottom-3 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center opacity-0 translate-x-4 transition-all duration-300 hover:bg-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.5)]"
                      >
                        <i className="fas fa-arrow-right" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-4">
                    {currentStep.options.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleNext(opt)}
                        className="bg-blue-950/20 hover:bg-blue-600 border border-blue-500/20 text-blue-100 hover:text-white px-5 py-3.5 rounded-2xl text-left text-sm font-medium transition-all hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_0_15px_rgba(37,99,235,0.2)]"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-blue-500/10 flex items-center justify-between text-[9px] text-blue-200/30 uppercase tracking-[0.2em] font-black">
             <span>Level: 01 Expert AI</span>
             <span className="flex items-center gap-1.5">
               <i className="fas fa-shield-halved" /> 100% Encrypted
             </span>
          </div>
        </div>
      </div>
    </div>
  );
}
