import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './style.module.css';

const images = [
  '/hero.png',
  '/hero1.png',
  '/hero2.png',
  '/hero3.png'
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.hero} id="home">
      <div className={styles.carousel}>
        {images.map((img, index) => (
          <div
            key={index}
            className={`${styles.slide} ${index === current ? styles.active : ''}`}
          >
            <Image
              src={img}
              alt={`Massagem Alma Zen ${index + 1}`}
              fill
              className={styles.image}
              priority={index === 0}
              sizes="100vw"
            />
            <div className={styles.overlay} />
          </div>
        ))}
      </div>
      <div className={styles.content}>
        <div className={styles.container}>
          <h1 className={styles.title}>Alma Zen SPA</h1>
          <p className={styles.subtitle}>Sinta o toque do equilíbrio e bem-estar total.</p>
          <a href="#servicos" className={styles.cta}>Conheça nossos serviços</a>
        </div>
      </div>
      <div className={styles.dots}>
        {images.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === current ? styles.activeDot : ''}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </section>
  );
}
