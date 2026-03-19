import styles from './style.module.css';
import { YOGA_PLANS } from '@/constants/servicos';

export default function YogaSection() {
  const handleWhatsApp = (plan, type, freq, price) => {
    const phone = '5511944015835';
    const message = `Olá! Gostaria de agendar o plano de Yoga: ${plan} (${type}) - ${freq} por ${price}.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className={styles.section} id="yoga">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Aula de Hatha Yoga</h2>
          <p className={styles.subtitle}>Práticas que unem corpo, mente e respiração.</p>
          <div className={styles.infoGroup}>
            <span>Aula em Grupo (Trios)</span>
          </div>
        </div>

        <div className={styles.grid}>
          {YOGA_PLANS.map((plan, idx) => (
            <div key={idx} className={styles.card}>
              <h3 className={styles.cardTitle}>{plan.titulo}</h3>
              <div className={styles.options}>
                {plan.opcoes.map((opt, oIdx) => (
                  <div key={oIdx} className={styles.optionRow}>
                    <div className={styles.freq}>{opt.frequencia}</div>
                    <div className={styles.prices}>
                      <button 
                        className={styles.priceBtn}
                        onClick={() => handleWhatsApp(plan.titulo, 'Aula em Trio', opt.frequencia, opt.trio)}
                      >
                        <span className={styles.label}>Trio</span>
                        <span className={styles.value}>{opt.trio}</span>
                      </button>
                      <button 
                        className={styles.priceBtn}
                        onClick={() => handleWhatsApp(plan.titulo, 'Personal', opt.frequencia, opt.personal)}
                      >
                        <span className={styles.label}>Personal</span>
                        <span className={styles.value}>{opt.personal}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              {plan.obs && <p className={styles.obs}>{plan.obs}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
