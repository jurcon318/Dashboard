import { motion } from 'framer-motion';
import styles from '../App.module.css';

function ProjectCard({ icon, name, url }) {
    return (
        <div className={styles.card}>
            <span className={styles.icon}>{icon}</span>
            <h3>{name}</h3>
            {/* Use target="_blank" to open in a new tab, which prevents 404 loops */}
            <a
                href={url}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn more &gt;
            </a>
        </div>
    );
}

export default ProjectCard;