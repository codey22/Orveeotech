'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Doodle from '@/components/Doodle';
import CoffeeStain from '@/components/CoffeeStain';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  // Bot Protection
  const [honeypot, setHoneypot] = useState(''); // Should remain empty
  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0 });
  const [userAnswer, setUserAnswer] = useState('');

  // Initialize Captcha on mount
  useEffect(() => {
    setCaptcha({
      num1: Math.floor(Math.random() * 10),
      num2: Math.floor(Math.random() * 10)
    });
  }, []);

  // Auto-hide success message
  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => {
        setStatus('idle');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    // 1. Honeypot Check
    if (honeypot) {
      // Silently fail or pretend to succeed to fool the bot
      setStatus('success');
      return;
    }

    // 2. Captcha Check
    if (parseInt(userAnswer) !== (captcha.num1 + captcha.num2)) {
      setStatus('error');
      setErrorMessage('Verification failed: Incorrect math answer.');
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setUserAnswer('');
      // Reset captcha
      setCaptcha({
        num1: Math.floor(Math.random() * 10),
        num2: Math.floor(Math.random() * 10)
      });
    } catch (error) {
      setStatus('error');
      setErrorMessage(error.message || 'Something went wrong');
    }
  };

  return (
    <main>
      <div className="container pt-48 px-8 pb-16 min-h-screen relative overflow-hidden max-md:pt-32 max-md:px-4 max-md:pb-16 mx-auto">
        {/* Decorative Background Elements */}
        <CoffeeStain style={{ top: '5%', right: '5%', opacity: 0.15 }} />
        <CoffeeStain style={{ bottom: '10%', left: '-5%', opacity: 0.1, transform: 'scale(1.5)' }} />
        <Doodle type="scribble" color="#000" style={{ position: 'absolute', top: '15%', left: '10%', width: '150px', opacity: 0.05, transform: 'rotate(45deg)' }} />

        <h1 className="text-center mb-20 font-retro text-[3.5rem] text-[#1a1a1a] relative inline-block left-1/2 -translate-x-1/2 z-[2] text-shadow-[2px_2px_0px_rgba(255,255,255,0.8)] max-md:text-[2.5rem] max-md:mb-12 max-md:w-full max-sm:text-[2.2rem]">
          Get In Touch
          <Doodle type="underline" color="#b91c1c" style={{ position: 'absolute', bottom: '-15px', left: '0', width: '100%', height: '20px' }} />
        </h1>

        <div className="flex flex-wrap justify-center gap-20 items-start relative z-[2] max-w-[1200px] mx-auto max-md:gap-12 max-sm:flex-col max-sm:items-center max-sm:gap-12">
          {/* Form Section */}
          <section className="flex-1 min-w-[320px] max-w-[550px] max-md:min-w-full max-md:max-w-full">
            <form onSubmit={handleSubmit} className="bg-[#fcfbf9] pt-16 px-12 pb-12 rounded-sm shadow-[0_1px_3px_rgba(0,0,0,0.1),0_10px_20px_-5px_rgba(0,0,0,0.2),5px_5px_15px_rgba(0,0,0,0.1)] relative w-full [background-image:repeating-linear-gradient(transparent,transparent_39px,#d1d5db_40px)] -rotate-[0.5deg] max-md:pt-12 max-md:px-6 max-md:pb-8 max-md:rotate-0 before:content-[''] before:absolute before:-top-5 before:left-1/2 before:-translate-x-1/2 before:w-[140px] before:h-[45px] before:bg-[#2d2d2d] before:rounded-[4px] before:shadow-[0_4px_6px_rgba(0,0,0,0.3)] before:z-[10] after:content-[''] after:absolute after:-top-[10px] after:left-1/2 after:-translate-x-1/2 after:w-[120px] after:h-[25px] after:bg-gradient-to-b after:from-[#777] after:to-[#555] after:rounded-[2px] after:z-[11] after:border after:border-[#444] max-md:before:w-[100px]">

              {/* Honeypot Field (Hidden) */}
              <div style={{ display: 'none', position: 'absolute', left: '-9999px' }} aria-hidden="true">
                <label htmlFor="website_url">Website</label>
                <input
                  type="text"
                  id="website_url"
                  name="website_url"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="mb-8 relative">
                <label htmlFor="name" className="block font-bold font-mono uppercase mb-2 text-sm text-[#4b5563] tracking-widest">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="FULL NAME"
                  className="w-full p-[0.8rem] border-2 border-[#1f2937] rounded-none font-mono text-[1.1rem] bg-[rgba(255,255,255,0.8)] transition-all shadow-[2px_2px_0_rgba(0,0,0,0.1)] focus:outline-none focus:bg-white focus:border-[#b91c1c] focus:shadow-[4px_4px_0_rgba(185,28,28,0.2)] focus:scale-[1.01]"
                />
              </div>

              <div className="mb-8 relative">
                <label htmlFor="email" className="block font-bold font-mono uppercase mb-2 text-sm text-[#4b5563] tracking-widest">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="EMAIL ADDRESS"
                  className="w-full p-[0.8rem] border-2 border-[#1f2937] rounded-none font-mono text-[1.1rem] bg-[rgba(255,255,255,0.8)] transition-all shadow-[2px_2px_0_rgba(0,0,0,0.1)] focus:outline-none focus:bg-white focus:border-[#b91c1c] focus:shadow-[4px_4px_0_rgba(185,28,28,0.2)] focus:scale-[1.01]"
                />
              </div>

              <div className="mb-8 relative">
                <label htmlFor="phone" className="block font-bold font-mono uppercase mb-2 text-sm text-[#4b5563] tracking-widest">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="CONTACT NUMBER"
                  className="w-full p-[0.8rem] border-2 border-[#1f2937] rounded-none font-mono text-[1.1rem] bg-[rgba(255,255,255,0.8)] transition-all shadow-[2px_2px_0_rgba(0,0,0,0.1)] focus:outline-none focus:bg-white focus:border-[#b91c1c] focus:shadow-[4px_4px_0_rgba(185,28,28,0.2)] focus:scale-[1.01]"
                />
              </div>

              <div className="mb-8 relative">
                <label htmlFor="message" className="block font-bold font-mono uppercase mb-2 text-sm text-[#4b5563] tracking-widest">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="TRANSMIT YOUR MESSAGE..."
                  className="w-full p-[0.8rem] border-2 border-[#1f2937] rounded-none font-mono text-[1.1rem] bg-[rgba(255,255,255,0.8)] transition-all shadow-[2px_2px_0_rgba(0,0,0,0.1)] focus:outline-none focus:bg-white focus:border-[#b91c1c] focus:shadow-[4px_4px_0_rgba(185,28,28,0.2)] focus:scale-[1.01]"
                />
                <Doodle type="star" color="#000" style={{ position: 'absolute', bottom: '10px', right: '10px', width: '30px', opacity: 0.2 }} />
              </div>

              {/* Retro Captcha Field */}
              <div className="flex items-center gap-4 mb-8 bg-[rgba(255,255,255,0.5)] p-4 border-2 border-dashed border-[#6b7280] rounded-[4px]">
                <div className="w-20 h-20 border-[3px] border-double border-[#b91c1c] flex items-center justify-center -rotate-6 bg-[rgba(185, 28, 28, 0.05)]">
                  <span className="font-retro text-[0.7rem] text-[#b91c1c] text-center leading-[1.2] font-bold uppercase">SECURITY<br />CHECK</span>
                </div>
                <div className="mb-8 relative" style={{ flex: 1, marginBottom: 0 }}>
                  <label htmlFor="captcha" className="block font-bold font-mono uppercase mb-2 text-sm text-[#4b5563] tracking-widest">Verify: {captcha.num1} + {captcha.num2} = ?</label>
                  <input
                    type="number"
                    id="captcha"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    required
                    placeholder="?"
                    className="w-full p-[0.8rem] border-2 border-[#1f2937] rounded-none font-mono text-[1.1rem] bg-[rgba(255,255,255,0.8)] transition-all shadow-[2px_2px_0_rgba(0,0,0,0.1)] focus:outline-none focus:bg-white focus:border-[#b91c1c] focus:shadow-[4px_4px_0_rgba(185,28,28,0.2)] focus:scale-[1.01] !w-20 !text-[1.2rem] text-center mt-2"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full text-[1.3rem] font-retro bg-[#1f2937] text-[#f3f4f6] border-[3px] border-black p-4 cursor-pointer shadow-[5px_5px_0_#000] transition-all uppercase tracking-widest mt-4 relative overflow-hidden hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[7px_7px_0_#000] hover:bg-black hover:text-white disabled:bg-[#6b7280] disabled:cursor-not-allowed disabled:transform-none disabled:shadow-[2px_2px_0_#000]"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Transmitting...' : 'Send Transmission'}
              </button>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 p-6 bg-[#ecfdf5] text-[#064e3b] border-2 border-dashed border-[#059669] text-center font-mono font-bold -rotate-1 shadow-[3px_3px_0_rgba(0,0,0,0.1)]"
                >
                  Transmitted
                </motion.div>
              )}

              {status === 'error' && (
                <div className="mt-8 p-6 bg-[#fef2f2] text-[#991b1b] border-2 border-dashed border-[#b91c1c] text-center font-mono font-bold rotate-1 shadow-[3px_3px_0_rgba(0,0,0,0.1)]">
                  {errorMessage}
                </div>
              )}
            </form>
          </section>

          {/* Contact Details Section */}
          <section className="flex-1 min-w-[300px] max-w-[450px] flex flex-col gap-12 pt-8 max-md:w-full max-md:max-w-full max-md:min-w-0">
            <div className="bg-white p-8 border border-[#d1d5db] shadow-[0_1px_2px_rgba(0,0,0,0.1),5px_5px_10px_rgba(0,0,0,0.1)] rotate-2 relative before:content-[''] before:absolute before:-top-[15px] before:left-1/2 before:-translate-x-1/2 before:-rotate-[3deg] before:w-[100px] before:h-[35px] before:bg-[rgba(255,255,255,0.6)] before:border-l before:border-r before:border-dashed before:border-[rgba(0,0,0,0.1)] before:shadow-[0_1px_3px_rgba(0,0,0,0.1)] before:opacity-80 before:z-[10] before:backdrop-blur-[1px]">
              <CoffeeStain style={{ bottom: '10px', right: '10px', opacity: 0.2, width: '100px', height: '100px' }} />
              <h3 className="font-retro text-[1.8rem] mb-6 text-center border-b-2 border-black pb-2 text-[#111827]">Contact Info</h3>

              <div className="mb-6 pb-6 border-b border-dashed border-[#9ca3af] last:mb-0 last:pb-0 last:border-none">
                <h4 className="font-mono text-[1.1rem] font-black mb-2 text-[#b91c1c] uppercase">Email</h4>
                <p className="font-mono text-[1rem] text-[#374151] mb-[0.2rem]">contact@orveeotech.com</p>
              </div>

              <div className="mb-6 pb-6 border-b border-dashed border-[#9ca3af] last:mb-0 last:pb-0 last:border-none">
                <h4 className="font-mono text-[1.1rem] font-black mb-2 text-[#b91c1c] uppercase">Call Us</h4>
                <p className="font-mono text-[1rem] text-[#374151] mb-[0.2rem]">+91 78900 06416</p>
                <p className="font-mono text-[1rem] text-[#374151] mb-[0.2rem]">+91 89617 79987</p>
                <p className="font-mono text-[1rem] text-[#374151] mb-[0.2rem]">+91 72780 36480</p>
              </div>

              <div className="flex gap-4 justify-center mt-4">
                <a href="#" className="w-10 h-10 border-2 border-black rounded-full flex items-center justify-center font-bold transition-all cursor-pointer hover:bg-black hover:text-white hover:scale-110" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="https://www.instagram.com/orveeotech/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border-2 border-black rounded-full flex items-center justify-center font-bold transition-all cursor-pointer hover:bg-black hover:text-white hover:scale-110" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#" className="w-10 h-10 border-2 border-black rounded-full flex items-center justify-center font-bold transition-all cursor-pointer hover:bg-black hover:text-white hover:scale-110" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              </div>
            </div>

            <div className="bg-white p-8 border border-[#d1d5db] shadow-[0_1px_2px_rgba(0,0,0,0.1),5px_5px_10px_rgba(0,0,0,0.1)] rotate-[-1deg] relative before:content-[''] before:absolute before:-top-[15px] before:left-1/2 before:-translate-x-1/2 before:-rotate-[3deg] before:w-[100px] before:h-[35px] before:bg-[rgba(255, 255, 255, 0.6)] before:border-l before:border-r before:border-dashed before:border-[rgba(0,0,0,0.1)] before:shadow-[0_1px_3px_rgba(0,0,0,0.1)] before:opacity-80 before:z-[10] before:backdrop-blur-[1px]">
              <h3 className="font-retro text-[1.8rem] mb-6 text-center border-b-2 border-black pb-2 text-[#111827]">Office Hours</h3>
              <div className="mb-6 pb-6 border-b border-dashed border-[#9ca3af] last:mb-0 last:pb-0 last:border-none">
                <h4 className="font-mono text-[1.1rem] font-black mb-2 text-[#b91c1c] uppercase">Monday - Saturday</h4>
                <p className="font-mono text-[1rem] text-[#374151] mb-[0.2rem]">10:00 AM - 07:00 PM</p>
              </div>
              <div className="mb-6 pb-6 border-b border-dashed border-[#9ca3af] last:mb-0 last:pb-0 last:border-none">
                <h4 className="font-mono text-[1.1rem] font-black mb-2 text-[#b91c1c] uppercase">Sunday</h4>
                <p className="font-mono text-[1rem] text-[#374151] mb-[0.2rem]">Closed</p>
              </div>
              <Doodle type="scribble" color="#b91c1c" style={{ position: 'absolute', bottom: '10px', left: '10px', width: '60px', opacity: 0.3 }} />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
