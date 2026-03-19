'use client';

import { useState } from "react";
import styles from "./page.module.css";
import Footer from "@/Components/Footer";
import FloatingButtons from "@/Components/FloatingButtons";
import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import ServiceCard from "@/Components/ServiceCard";
import Modal from "@/Components/Modal";
import PlanSection from "@/Components/PlanSection";
import YogaSection from "@/Components/YogaSection";
import { SERVICOS } from "@/constants/servicos";

export default function Home() {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    { name: "Massagens", desc: "Relaxamento profundo e equilíbrio." },
    { name: "Estética Corporal", desc: "Cuidados para o corpo e contornos." },
    { name: "Estética Facial", desc: "Beleza e saúde para o seu rosto." },
    { name: "Serviços Especiais", desc: "Terapias orientais e milenares." },
    { name: "Combos", desc: "Experiências completas Alma Zen." }
  ];
  const [activeCategory, setActiveCategory] = useState(null);

  const filteredServices = activeCategory 
    ? SERVICOS.filter(s => s.categoria === activeCategory)
    : [];

  const handleOpenModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <div className={styles.page}>
      <Header />
      
      <Hero />

      {/* Services Section */}
      <section id="servicos" className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Nossos Serviços</h2>
            {activeCategory ? (
              <div className={styles.breadcrumb}>
                <button className={styles.backBtn} onClick={() => setActiveCategory(null)}>
                  &larr; Voltar para Categorias
                </button>
                <span className={styles.currentCat}>{activeCategory}</span>
              </div>
            ) : (
              <p className={styles.sectionSubtitle}>Escolha uma categoria para explorar nossos tratamentos:</p>
            )}
          </div>

          {!activeCategory ? (
            <div className={styles.categoryGrid}>
              {categories.map((cat) => (
                <div 
                  key={cat.name} 
                  className={styles.categoryCard}
                  onClick={() => setActiveCategory(cat.name)}
                >
                  <div className={styles.catInfo}>
                    <h3>{cat.name}</h3>
                    <p>{cat.desc}</p>
                    <span className={styles.explore}>Explorar &rarr;</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.servicesGrid}>
              {filteredServices.map((service, index) => (
                <ServiceCard 
                  key={`${activeCategory}-${index}`} 
                  service={service} 
                  onClick={handleOpenModal}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Yoga Section */}
      <YogaSection />

      {/* Plans Section */}
      <PlanSection />

      {/* Modal for details */}
      <Modal 
        key={selectedService?.titulo}
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        service={selectedService} 
      />

      <Footer />

      <FloatingButtons />
    </div>
  );
}
