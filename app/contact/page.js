'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import styles from './page.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setStatus('error');
      setErrorMessage(error.message);
    }
  };

  return (
    <main>
      <Navbar />
      <div className={`container ${styles.contactContainer}`}>
        <h1 className={styles.title}>Get In Touch</h1>
        
        <div className={styles.grid}>
          {/* Form Section */}
          <section className={styles.formSection}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="YOUR NAME"
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
                  placeholder="YOUR EMAIL"
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
                  placeholder="YOUR PHONE"
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
                  placeholder="WHAT'S ON YOUR MIND?"
                />
              </div>

              <button 
                type="submit" 
                className={`btn btn-primary ${styles.submitBtn}`}
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={styles.successMessage}
                >
                  Message sent successfully! We'll get back to you soon.
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
              <h3>Contact Info</h3>
              <div className={styles.infoItem}>
                <h4>Founder</h4>
                <p>Email: founder@orveeotech.com</p>
                <p>Phone: +1 (555) 000-0001</p>
              </div>
              <div className={styles.infoItem}>
                <h4>Partner 1</h4>
                <p>Email: partner1@orveeotech.com</p>
                <p>Phone: +1 (555) 000-0002</p>
              </div>
              <div className={styles.infoItem}>
                <h4>Partner 2</h4>
                <p>Email: partner2@orveeotech.com</p>
                <p>Phone: +1 (555) 000-0003</p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
