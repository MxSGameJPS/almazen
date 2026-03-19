import { useState, useEffect } from 'react';
import styles from './style.module.css';
import { SERVICOS_PLANO } from '@/constants/servicos';

export default function PlanModal({ isOpen, onClose, plan }) {
  const [selectedServices, setSelectedServices] = useState([]);

  useEffect(() => {
    if (!isOpen) {
      setSelectedServices([]);
    }
  }, [isOpen]);

  if (!isOpen || !plan) return null;

  const handleToggleService = (service) => {
    setSelectedServices(prev => {
      if (prev.includes(service)) {
        return prev.filter(s => s !== service);
      }
      if (prev.length < plan.sessoes) {
        return [...prev, service];
      }
      return prev; // Limit reached
    });
  };

  const handleWhatsApp = () => {
    const phone = '5511944015835';
    const servicesText = selectedServices.join(', ');
    const message = `Olá! Gostaria de garantir o Plano Alma Zen de ${plan.sessoes} sessões. Tenho interesse em incluir os serviços: ${servicesText}.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}>&times;</button>
        
        <header className={styles.header}>
          <h2>Plano Alma Zen - {plan.sessoes} Sessões</h2>
          <p className={styles.selectionInfo}>
            Você pode escolher até <strong>{plan.sessoes} serviços</strong> para compor seu plano:
            <span className={styles.counter}>({selectedServices.length}/{plan.sessoes} selecionados)</span>
          </p>
        </header>

        <div className={styles.serviceList}>
          {SERVICOS_PLANO.map((service, index) => (
            <label 
              key={index} 
              className={`${styles.serviceItem} ${selectedServices.includes(service) ? styles.active : ''} ${selectedServices.length >= plan.sessoes && !selectedServices.includes(service) ? styles.disabled : ''}`}
            >
              <input
                type="checkbox"
                checked={selectedServices.includes(service)}
                onChange={() => handleToggleService(service)}
                disabled={selectedServices.length >= plan.sessoes && !selectedServices.includes(service)}
                className={styles.checkbox}
              />
              <span className={styles.serviceName}>{service}</span>
            </label>
          ))}
        </div>

        <div className={styles.footer}>
          <button 
            className={styles.confirmButton} 
            disabled={selectedServices.length === 0}
            onClick={handleWhatsApp}
          >
            Garantir Plano via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
