'use client';

import { useState, useEffect } from 'react';
import styles from './style.module.css';
import { SERVICOS, PLANOS, YOGA_PLANS, SERVICOS_PLANO } from '@/constants/servicos';

export default function BookingModal({ isOpen, onClose }) {
  const [category, setCategory] = useState('');
  const [selectedItem, setSelectedItem] = useState('');
  const [selectedFreq, setSelectedFreq] = useState(''); // For Yoga
  const [selectedPlanServices, setSelectedPlanServices] = useState([]); // For Plan services
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    } else {
      setTimeout(() => setIsAnimating(false), 300);
      setCategory('');
      setSelectedItem('');
      setSelectedFreq('');
      setSelectedPlanServices([]);
    }
  }, [isOpen]);

  if (!isOpen && !isAnimating) return null;

  const handleAgendar = () => {
    const phoneNumber = '5511944015835';
    let message = 'Olá! Gostaria de agendar um horário.';

    if (category === 'Planos') {
      const servicesText = selectedPlanServices.length > 0 
        ? `. Tenho interesse em: ${selectedPlanServices.join(', ')}.` 
        : '.';
      message = `Olá! Gostaria de garantir o Plano Alma Zen de ${selectedItem}${servicesText}`;
    } else if (category === 'Yoga') {
      message = `Olá! Gostaria de agendar uma Aula de Yoga: ${selectedItem} (${selectedFreq}).`;
    } else if (selectedItem) {
      message = `Olá! Gostaria de agendar o serviço: ${selectedItem} (${category}).`;
    }

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    onClose();
  };

  const togglePlanService = (service) => {
    setSelectedPlanServices(prev => 
      prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
    );
  };

  const getSubItems = () => {
    if (category === 'Planos') return PLANOS.map(p => `${p.sessoes} sessões`);
    if (category === 'Yoga') return YOGA_PLANS.map(y => y.titulo);
    if (!category) return [];
    return SERVICOS.filter(s => s.categoria === category).map(s => s.titulo);
  };

  const hasFreq = category === 'Yoga';
  const yogaFreqs = selectedItem ? YOGA_PLANS.find(y => y.titulo === selectedItem)?.opcoes.map(o => o.frequencia) : [];

  return (
    <div className={`${styles.overlay} ${isOpen ? styles.overlayIn : ''}`} onClick={onClose}>
      <div className={`${styles.modal} ${isOpen ? styles.modalIn : ''}`} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>&times;</button>
        
        <h2 className={styles.title}>Agendar Sessão</h2>
        <p className={styles.subtitle}>Personalize seu momento Alma Zen:</p>

        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.field}>
            <label>O que você procura?</label>
            <select value={category} onChange={(e) => { setCategory(e.target.value); setSelectedItem(''); setSelectedPlanServices([]); }}>
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
              <label>{category === 'Planos' ? 'Escolha o Plano:' : 'Escolha a opção:'}</label>
              <select value={selectedItem} onChange={(e) => { setSelectedItem(e.target.value); setSelectedFreq(''); }}>
                <option value="">Selecione um item</option>
                {getSubItems().map(item => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </div>
          )}

          {category === 'Planos' && selectedItem && (
            <div className={styles.field}>
              <label>Selecione os serviços que deseja incluir:</label>
              <div className={styles.planServicesGrid}>
                {SERVICOS_PLANO.map(service => (
                  <label key={service} className={styles.checkboxLabel}>
                    <input 
                      type="checkbox" 
                      checked={selectedPlanServices.includes(service)}
                      onChange={() => togglePlanService(service)}
                    />
                    <span>{service}</span>
                  </label>
                ))}
              </div>
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
            disabled={!category || !selectedItem || (hasFreq && !selectedFreq) || (category === 'Planos' && selectedPlanServices.length === 0)}
            onClick={handleAgendar}
          >
            Agendar via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}
