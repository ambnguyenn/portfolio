import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import { useState, useEffect } from 'react';

export default function ProjectsPage() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    //Fetch projects from the API when the component mounts
    fetch('/api/projects')
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div>
      <Navbar />
      <h1>My Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link}>View Project</a>
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
  }
  