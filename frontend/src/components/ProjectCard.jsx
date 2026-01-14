import { motion } from 'framer-motion';
import styles from '../App.module.css';

function ProjectCard({ icon, name, url }) {
  return (
    <motion.div 
      className={styles.card}
      // Apple-style entrance: Fade in and slide up slightly
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      // Subtle hover effect
      whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
    >
      <span className={styles.icon}>{icon}</span>
      <h3 style={{ fontSize: '1.5rem', margin: '10px 0' }}>{name}</h3>
      <a href={url} className={styles.link} target="_blank" rel="noreferrer">
        Learn more <span className={styles.chevron}></span>
      </a>
    </motion.div>
  );
}

export default ProjectCard;