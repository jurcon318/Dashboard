import { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './App.module.css'
import ProjectCard from './components/ProjectCard'

function App() {
  const [projects] = useState([
    { id: 1, name: "TRA Schedule", icon: "🚂", url: "https://cftang0827.github.io/tra-schedule/" },
    { id: 2, name: "Colour Block", icon: "🎨", url: "https://mhmchung.github.io/Colour-Block-Challenge/" },
    { id: 3, name: "GRE Prep", icon: "🎓", url: "https://mhmchung.github.io/GRE-Prep/" }
  ])

  return (
    <div className={styles.container}>
      {/* Header with scroll-driven parallax-like fade */}
      <motion.header
        className={styles.header}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>The Dashboard.</h1>
        <p>Simple tools for a better workflow.</p>
      </motion.header>

      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            icon={project.icon}
            name={project.name}
            url={project.url}
          />
        ))}
      </div>
    </div>
  )
}

export default App