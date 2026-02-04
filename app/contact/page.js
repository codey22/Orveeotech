'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './page.module.css';
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
      console.log('Bot detected: Honeypot filled');
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
      <div className={`container ${styles.contactContainer}`}>
        {/* Decorative Background Elements */}
        <CoffeeStain style={{ top: '5%', right: '5%', opacity: 0.15 }} />
        <CoffeeStain style={{ bottom: '10%', left: '-5%', opacity: 0.1, transform: 'scale(1.5)' }} />
        <Doodle type="scribble" color="#000" style={{ position: 'absolute', top: '15%', left: '10%', width: '150px', opacity: 0.05, transform: 'rotate(45deg)' }} />

        <h1 className={styles.title}>
          Get In Touch
          <Doodle type="underline" color="#b91c1c" style={{ position: 'absolute', bottom: '-15px', left: '0', width: '100%', height: '20px' }} />
        </h1>
        
        <div className={styles.grid}>
          {/* Form Section */}
          <section className={styles.formSection}>
            <form onSubmit={handleSubmit} className={styles.form}>
              
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

              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="FULL NAME"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="EMAIL ADDRESS"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="CONTACT NUMBER"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="TRANSMIT YOUR MESSAGE..."
                />
                <Doodle type="star" color="#000" style={{ position: 'absolute', bottom: '10px', right: '10px', width: '30px', opacity: 0.2 }} />
              </div>

              {/* Retro Captcha Field */}
              <div className={styles.captchaContainer}>
                <div className={styles.captchaBox}>
                   <span className={styles.stampText}>SECURITY<br/>CHECK</span>
                </div>
                <div className={styles.formGroup} style={{ flex: 1, marginBottom: 0 }}>
                  <label htmlFor="captcha">Verify: {captcha.num1} + {captcha.num2} = ?</label>
                  <input 
                      type="number" 
                      id="captcha" 
                      value={userAnswer} 
                      onChange={(e) => setUserAnswer(e.target.value)}
                      required
                      placeholder="?"
                      className={styles.captchaInput}
                  />
                </div>
              </div>

              <button 
                type="submit" 
                className={`btn btn-primary ${styles.submitBtn}`}
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Transmitting...' : 'Send Transmission'}
              </button>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={styles.successMessage}
                >
                  Transmitted
                </motion.div>
              )}

              {status === 'error' && (
                <div className={styles.errorMessage}>
                  {errorMessage}
                </div>
              )}
            </form>
          </section>

          {/* Contact Details Section */}
          <section className={styles.infoSection}>
            <div className={styles.infoCard}>
              <CoffeeStain style={{ bottom: '10px', right: '10px', opacity: 0.2, width: '100px', height: '100px' }} />
              <h3>Contact Info</h3>
              
              <div className={styles.infoItem}>
                <h4>Email</h4>
                <p>contact@orveeotech.com</p>
              </div>
              
              <div className={styles.infoItem}>
                <h4>Call Us</h4>
                <p>+91 78900 06416</p>
                <p>+91 89617 79987</p>
                <p>+91 72780 36480</p>
              </div>

              <div className={styles.socialLinks}>
                <a href="#" className={styles.socialIcon} aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#" className={styles.socialIcon} aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              </div>
            </div>

            <div className={styles.infoCard} style={{ transform: 'rotate(-1deg)' }}>
               <h3>Office Hours</h3>
               <div className={styles.infoItem}>
                  <h4>Monday - Saturday</h4>
                  <p>10:00 AM - 07:00 PM</p>
               </div>
               <div className={styles.infoItem}>
                  <h4>Sunday</h4>
                  <p>Closed</p>
               </div>
               <Doodle type="scribble" color="#b91c1c" style={{ position: 'absolute', bottom: '10px', left: '10px', width: '60px', opacity: 0.3 }} />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
