import styles from '../App.module.css'; // We use the same CSS

// We use "props" (properties) to pass data into this component
function ProjectCard({ icon, name, url }) {
  return (
    <div className={styles.card}>
      <span className={styles.icon}>{icon}</span>
      <h3>{name}</h3>
      <a 
        href={url} 
        className={styles.link} 
        target="_blank" 
        rel="noreferrer"
      >
        View Project
      </a>
    </div>
  );
}

export default ProjectCard;