import Link from 'next/link';

export const metadata = {
  title: 'Thank You | Honor Tour & Travels',
  description: 'Thank you for choosing Honor Tour & Travels. We have received your inquiry.',
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 text-center border border-slate-100">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl animate-bounce">
          <i className="fas fa-check-circle"></i>
        </div>
        
        <h1 className="text-3xl font-bold text-slate-900 mb-4">
          Thank You!
        </h1>
        
        <p className="text-slate-600 mb-8 text-lg leading-relaxed">
          Your inquiry has been received. Our Kashmir travel expert will contact you within <span className="font-bold text-slate-900 underline decoration-blue-500">10 minutes</span> with customized package options.
        </p>

        <div className="space-y-4">
          <Link 
            href="/"
            className="block w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all shadow-lg hover:shadow-blue-200 active:scale-95"
          >
            Go Back Home
          </Link>
          
          <a 
            href="https://wa.me/919682300904" 
            className="block w-full py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-2xl transition-all shadow-lg hover:shadow-green-200 active:scale-95 flex items-center justify-center gap-2"
          >
            <i className="fab fa-whatsapp text-xl"></i>
            Chat on WhatsApp
          </a>
        </div>

        <p className="mt-8 text-slate-400 text-sm">
          Check your email/WhatsApp for the initial itinerary.
        </p>
      </div>
    </div>
  );
}
