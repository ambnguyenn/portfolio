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
    <div style={{ backgroundColor: "#1C3A5F" }}>
      <Navbar />
      <div className="container-fluid mt-5">
        <div className="col-12 pt-0 pb-3" style={{ textAlign: "center" }}>
          <h1 style={{ color: "white", fontSize: "4rem", fontWeight: "bold" }}>
            My Projects
          </h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-8">
            <ul className="list-unstyled">
              {projects.map((project) => (
                <li
                  key={project.id}
                  className="mb-5"
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: "10px",
                    padding: "20px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <h2 style={{ color: "#1C3A5F", fontWeight: "bold" }}>{project.title}</h2>
                  <p style={{ fontStyle: "italic", fontFamily: "Times New Roman" }}>
                    {project.skills}
                  </p>
                  <p style={{ color: "#555", fontFamily: "Times New Roman" }}>
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    style={{
                      color: "#1C3A5F",
                      fontWeight: "bold",
                      textDecoration: "underline",
                    }}
                  >
                    View Project
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
  
  }
  