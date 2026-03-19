'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './style.module.css';
import BookingModal from '../BookingModal';

export default function Header() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Image 
              src="/logo/logo.png" 
              alt="Alma Zen Logo" 
              width={120} 
              height={120} 
              priority
            />
          </div>
          <nav className={styles.nav}>
            <a href="#home">Home</a>
            <a href="#servicos">Serviços</a>
            <a href="#yoga">Yoga</a>
            <a href="#planos">Planos</a>
            <a 
              href="https://www.instagram.com/almazen.massagem/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.socialLink}
              title="Siga-nos no Instagram"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.socialIcon}>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <button 
              className={styles.cta}
              onClick={() => setIsBookingOpen(true)}
            >
              Agendar
            </button>
          </nav>
        </div>
      </header>
      
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </>
  );
}
