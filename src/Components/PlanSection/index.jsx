import { useState } from 'react';
import styles from './style.module.css';
import { PLANOS } from '@/constants/servicos';
import PlanModal from '../PlanModal';

export default function PlanSection() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (plano) => {
    setSelectedPlan(plano);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
  };

  return (
    <section className={styles.section} id="planos">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Planos Alma Zen</h2>
          <p className={styles.subtitle}>
            Aproveite nossos pacotes exclusivos para cuidar da sua saúde e bem-estar.
          </p>
          <div className={styles.badge}>
            Pode ser compartilhado com até 2 pessoas (amigos ou familiares)
          </div>
        </div>

        <div className={styles.grid}>
          {PLANOS.map((plano, index) => (
            <div key={index} className={styles.planCard} onClick={() => handleOpenModal(plano)}>
              <div className={styles.sessoes}>
                <span className={styles.number}>{plano.sessoes}</span>
                <span className={styles.label}>Sessões</span>
              </div>
              <div className={styles.details}>
                <div className={styles.valorTotal}>{plano.valorPacote}</div>
                <div className={styles.valorPorSessao}>
                  A penas <strong>{plano.valorSessao}</strong> por sessão
                </div>
                <div className={styles.validade}>
                  Válido por <strong>{plano.validade}</strong>
                </div>
              </div>
              <button 
                className={styles.button}
                onClick={(e) => {
                  e.stopPropagation();
                  handleOpenModal(plano);
                }}
              >
                Garantir Plano
              </button>
            </div>
          ))}
        </div>
      </div>

      <PlanModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        plan={selectedPlan} 
      />
    </section>
  );
}
