import styles from './style.module.css';

export default function ServiceCard({ service, onClick }) {
  return (
    <div className={styles.card} onClick={() => onClick(service)}>
      <div className={styles.category}>{service.categoria}</div>
      <h3 className={styles.title}>{service.titulo}</h3>
      <p className={styles.description}>
        {service.descricao.length > 120 
          ? `${service.descricao.substring(0, 120)}...` 
          : service.descricao}
      </p>
      <div className={styles.footer}>
        <span className={styles.duration}>
          A partir de {service.duracoes[0].tempo}
        </span>
        <button className={styles.button}>Ver detalhes</button>
      </div>
    </div>
  );
}
