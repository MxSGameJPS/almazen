import styles from './style.module.css';
import { SERVICOS_PLANO } from '@/constants/servicos';

export default function PlanModal({ isOpen, onClose, plan }) {
  if (!isOpen || !plan) return null;

  const handleWhatsApp = () => {
    const phone = '5511944015835';
    const message = `Olá! Gostaria de garantir o Plano Alma Zen de ${plan.sessoes} sessões.`;
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
          <p className={styles.infoText}>
            Com este plano, você pode escolher <strong>qualquer um</strong> dos serviços abaixo em cada uma das suas {plan.sessoes} sessões:
          </p>
        </header>

        <div className={styles.serviceList}>
          {SERVICOS_PLANO.map((service, index) => (
            <div key={index} className={styles.serviceItemStatic}>
              <span className={styles.bullet}>✦</span>
              <span className={styles.serviceName}>{service}</span>
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <div className={styles.planSummary}>
            <div className={styles.totalPrice}>{plan.valorPacote}</div>
            <div className={styles.perSession}>Apenas {plan.valorSessao} por sessão</div>
          </div>
          <button 
            className={styles.confirmButton} 
            onClick={handleWhatsApp}
          >
            Garantir Plano Agora
          </button>
        </div>
      </div>
    </div>
  );
}
