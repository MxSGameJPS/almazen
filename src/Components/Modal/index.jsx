import { useEffect, useState } from 'react';
import styles from './style.module.css';
import { generateWhatsAppLink } from '@/utils/whatsapp';

export default function Modal({ isOpen, onClose, service }) {
  const [selectedDuration, setSelectedDuration] = useState(service?.duracoes[0] || null);

  if (!isOpen || !service) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}>
          &times;
        </button>
        
        <div className={styles.content}>
          <span className={styles.category}>{service.categoria}</span>
          <h2 className={styles.title}>{service.titulo}</h2>
          <div className={styles.description}>
            <p>{service.descricao}</p>
          </div>

          <div className={styles.durations}>
            <h4>Escolha a duração:</h4>
            <div className={styles.durationList}>
              {service.duracoes.map((dur, index) => (
                <button
                  key={index}
                  className={`${styles.durationItem} ${selectedDuration?.tempo === dur.tempo ? styles.active : ''}`}
                  onClick={() => setSelectedDuration(dur)}
                >
                  <span className={styles.time}>{dur.tempo}</span>
                  <span className={styles.price}>{dur.valor}</span>
                </button>
              ))}
            </div>
          </div>

          <a
            href={generateWhatsAppLink(service.titulo, selectedDuration?.tempo)}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.bookButton}
          >
            Agendar Agora via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
