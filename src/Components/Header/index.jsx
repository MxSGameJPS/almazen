import Image from 'next/image';
import styles from './style.module.css';

export default function Header() {
  return (
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
          <a href="#planos">Planos</a>
          <a href="https://wa.me/5511944015835" target="_blank" rel="noopener noreferrer" className={styles.cta}>
            Agendar
          </a>
        </nav>
      </div>
    </header>
  );
}
