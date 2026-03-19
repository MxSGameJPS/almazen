'use client';

import { useState, useEffect } from 'react';
import styles from './style.module.css';
import { SERVICOS, PLANOS, YOGA_PLANS } from '@/constants/servicos';

export default function BookingModal({ isOpen, onClose }) {
  const [category, setCategory] = useState('');
  const [selectedItem, setSelectedItem] = useState('');
  const [selectedFreq, setSelectedFreq] = useState(''); // For Yoga
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    } else {
      setTimeout(() => setIsAnimating(false), 300);
      setCategory('');
      setSelectedItem('');
      setSelectedFreq('');
    }
  }, [isOpen]);

  if (!isOpen && !isAnimating) return null;

  const handleAgendar = () => {
    const phoneNumber = '5511944015835';
    let message = 'Olá! Gostaria de agendar um horário.';

    if (category === 'Planos') {
      message = `Olá! Gostaria de garantir o Plano Alma Zen de ${selectedItem} sessões.`;
    } else if (category === 'Yoga') {
      message = `Olá! Gostaria de agendar uma Aula de Yoga: ${selectedItem} (${selectedFreq}).`;
    } else if (selectedItem) {
      message = `Olá! Gostaria de agendar o serviço: ${selectedItem} (${category}).`;
    }

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    onClose();
  };

  const getSubItems = () => {
    if (category === 'Planos') return PLANOS.map(p => `${p.sessoes} Sessões`);
    if (category === 'Yoga') return YOGA_PLANS.map(y => y.titulo);
    if (!category) return [];
    
    // For services, combos etc
    return SERVICOS.filter(s => s.categoria === category).map(s => s.titulo);
  };

  const hasFreq = category === 'Yoga';
  const yogaFreqs = selectedItem ? YOGA_PLANS.find(y => y.titulo === selectedItem)?.opcoes.map(o => o.frequencia) : [];

  return (
    <div className={`${styles.overlay} ${isOpen ? styles.overlayIn : ''}`} onClick={onClose}>
      <div className={`${styles.modal} ${isOpen ? styles.modalIn : ''}`} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>&times;</button>
        
        <h2 className={styles.title}>Agendar Sessão</h2>
        <p className={styles.subtitle}>Escolha o que você gostaria de agendar hoje:</p>

        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.field}>
            <label>O que você procura?</label>
            <select value={category} onChange={(e) => { setCategory(e.target.value); setSelectedItem(''); }}>
              <option value="">Selecione uma categoria</option>
              <option value="Massagens">Massagens</option>
              <option value="Estética Corporal">Estética Corporal</option>
              <option value="Estética Facial">Estética Facial</option>
              <option value="Combos">Combos & Especiais</option>
              <option value="Planos">Planos Alma Zen</option>
              <option value="Yoga">Aula de Yoga</option>
            </select>
          </div>

          {category && (
            <div className={styles.field}>
              <label>Escolha a opção:</label>
              <select value={selectedItem} onChange={(e) => { setSelectedItem(e.target.value); setSelectedFreq(''); }}>
                <option value="">Selecione um item</option>
                {getSubItems().map(item => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </div>
          )}

          {hasFreq && selectedItem && (
            <div className={styles.field}>
              <label>Frequência:</label>
              <select value={selectedFreq} onChange={(e) => setSelectedFreq(e.target.value)}>
                <option value="">Selecione a frequência</option>
                {yogaFreqs?.map(f => (
                  <option key={f} value={f}>{f}</option>
                ))}
              </select>
            </div>
          )}

          <button 
            type="button" 
            className={styles.submitBtn} 
            disabled={!category || !selectedItem || (hasFreq && !selectedFreq)}
            onClick={handleAgendar}
          >
            Agendar Agora via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}
