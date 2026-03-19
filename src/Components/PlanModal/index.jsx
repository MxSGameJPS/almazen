import { useState } from 'react';
import styles from './style.module.css';
import { SERVICOS_PLANO } from '@/constants/servicos';

export default function PlanModal({ isOpen, onClose, plan }) {
  const [selectedService, setSelectedService] = useState('');

  if (!isOpen || !plan) return null;

  const handleWhatsApp = () => {
    const phone = '5511944015835';
    const message = `Olá! Gostaria de garantir o Plano de ${plan.sessoes} sessões para o serviço: ${selectedService}.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}>&times;</button>
        
        <header className={styles.header}>
          <h2>Plano Alma Zen - {plan.sessoes} Sessões</h2>
          <p>Escolha o serviço para o seu plano:</p>
        </header>

        <div className={styles.serviceList}>
          {SERVICOS_PLANO.map((service, index) => (
            <label key={index} className={`${styles.serviceItem} ${selectedService === service ? styles.active : ''}`}>
              <input
                type="radio"
                name="planService"
                value={service}
                checked={selectedService === service}
                onChange={(e) => setSelectedService(e.target.value)}
                className={styles.radio}
              />
              <span className={styles.serviceName}>{service}</span>
            </label>
          ))}
        </div>

        <div className={styles.footer}>
          <button 
            className={styles.confirmButton} 
            disabled={!selectedService}
            onClick={handleWhatsApp}
          >
            Garantir Plano via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
