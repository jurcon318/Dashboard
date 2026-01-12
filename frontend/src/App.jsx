import { useState } from 'react'
import styles from './App.module.css'
import ProjectCard from './components/ProjectCard' // 1. Import your component

function App() {
  const [projects] = useState([
    { id: 1, name: "TRA Schedule", icon: "🚂", url: "https://github.com/cftang0827/tra-schedule" },
    { id: 2, name: "Colour Block", icon: "🎨", url: "https://github.com/mhmchung/Colour-Block-Challenge" },
    { id: 3, name: "GRE Prep", icon: "🎓", url: "https://github.com/mhmchung/GRE-Prep" }
  ])

  return (
    <div className={styles.container}>
      <header>
        <h1>🚀 Project Dashboard</h1>
        <p>A collection of my mini-applications</p>
      </header>

      <div className={styles.grid}>
        {projects.map((project) => (
          /* 2. Use the component and pass the data (props) */
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