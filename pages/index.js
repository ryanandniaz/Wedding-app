// pages/index.js

export default function Home() { return ( <div className="relative w-full h-screen overflow-hidden text-white font-sans"> {/* Background image */} <div className="absolute inset-0 z-0"> <img
src="/bg.jpg"
alt="Ryan and Niaz Proposal"
className="w-full h-full object-cover opacity-70"
/> <div className="absolute inset-0 bg-black bg-opacity-50" /> </div>

{/* Foreground content */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
    <h1 className="text-5xl md:text-7xl font-bold drop-shadow-xl mb-4 animate-fadeIn">
      Ryan & Niaz
    </h1>
    <p className="text-xl md:text-2xl mb-2 animate-fadeIn delay-150">
      Are getting married on
    </p>
    <p className="text-3xl font-medium mb-6 animate-fadeIn delay-300">
      August 24, 2025
    </p>
    <p className="text-lg md:text-xl mb-8 animate-fadeIn delay-500">
      Our wedding website is coming soon.
    </p>
    <a
      href="#rsvp"
      className="bg-white text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-opacity-90 transition animate-fadeIn delay-700"
    >
      RSVP Now
    </a>
  </div>

  <style jsx>{`
    .animate-fadeIn {
      animation: fadeIn 1s ease forwards;
      opacity: 0;
    }
    .delay-150 {
      animation-delay: 0.15s;
    }
    .delay-300 {
      animation-delay: 0.3s;
    }
    .delay-500 {
      animation-delay: 0.5s;
    }
    .delay-700 {
      animation-delay: 0.7s;
    }
    @keyframes fadeIn {
      to {
        opacity: 1;
      }
    }
  `}</style>
</div>

); }

