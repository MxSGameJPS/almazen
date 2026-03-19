'use client';

import { useState } from "react";
import styles from "./page.module.css";
import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import ServiceCard from "@/Components/ServiceCard";
import Modal from "@/Components/Modal";
import PlanSection from "@/Components/PlanSection";
import { SERVICOS } from "@/constants/servicos";

export default function Home() {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            <p className={styles.sectionSubtitle}>Oferecemos uma variedade de técnicas focadas no seu relaxamento e saúde.</p>
          </div>
          
          <div className={styles.servicesGrid}>
            {SERVICOS.map((service, index) => (
              <ServiceCard 
                key={index} 
                service={service} 
                onClick={handleOpenModal}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <PlanSection />

      {/* Modal for details */}
      <Modal 
        key={selectedService?.titulo}
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        service={selectedService} 
      />

      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>&copy; 2026 Alma Zen Spa. Todos os direitos reservados.</p>
          <p>Rua Barata Ribeiro, 380 salas 11 – 1º andar | Jardim Bela Vista – São Paulo</p>
        </div>
      </footer>
    </div>
  );
}
