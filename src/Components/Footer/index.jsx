import styles from './style.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.info}>
            <h3 className={styles.brand}>Alma Zen</h3>
            <p>Sinta o toque do equilíbrio e bem-estar total.</p>
          </div>
          <div className={styles.social}>
            <a 
              href="https://www.instagram.com/almazen.massagem/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.socialLink}
              title="Siga-nos no Instagram"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span>@almazen.massagem</span>
            </a>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Alma Zen Spa. Todos os direitos reservados.</p>
          <p>Rua Barata Ribeiro, 380 salas 11 – 1º andar | Jardim Bela Vista – São Paulo</p>
        </div>
      </div>
    </footer>
  );
}
