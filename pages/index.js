import Head from 'next/head'; import { useEffect, useState } from 'react';

export default function Home() { const [daysLeft, setDaysLeft] = useState('');

useEffect(() => { const weddingDate = new Date('2025-08-24T00:00:00'); const interval = setInterval(() => { const now = new Date(); const diff = weddingDate - now; const days = Math.floor(diff / (1000 * 60 * 60 * 24)); setDaysLeft(days); }, 1000); return () => clearInterval(interval); }, []);

return ( <> <Head> <title>Ryan & Niaz | Wedding</title> <link rel="icon" href="/favicon.ico" /> </Head>

<main className="min-h-screen bg-cover bg-center bg-fixed text-white" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')" }}>
    <div className="bg-black bg-opacity-50 min-h-screen flex flex-col justify-center items-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">Ryan & Niaz</h1>
      <p className="text-xl md:text-2xl mb-2">Are getting married on</p>
      <p className="text-2xl md:text-3xl font-semibold mb-4">August 24, 2025</p>
      <p className="text-md md:text-lg italic mb-8">Only {daysLeft} days to go</p>
      <a
        href="#rsvp"
        className="bg-white text-black px-6 py-3 rounded-full font-medium shadow-lg hover:bg-gray-200 transition"
      >
        RSVP Now
      </a>
    </div>
  </main>
</>

); }

