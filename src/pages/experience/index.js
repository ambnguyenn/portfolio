import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import { useState, useEffect } from 'react';

export default function ExperiencePage() {

  const [experience, setExperience] = useState([]);

  useEffect(() => {
    // Use an environment variable to define the base URL for the API
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || '';
  
    // Fetch experience from the API when the component mounts
    fetch(`${apiUrl}/api/experience`)
      .then((res) => res.json())
      .then((data) => setExperience(data))
      .catch((error) => console.error('Error fetching experience:', error));
  }, []);

  return (
    <div style={{ backgroundColor: "#1C3A5F" }}>
      <Navbar />
      <div className="container-fluid mt-5">
        <div className="col-12 pt-0 pb-3" style={{ textAlign: "center" }}>
          <h1 style={{ color: "white", fontSize: "4rem", fontWeight: "bold" }}>
            My Experience
          </h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-8">
            <ul className="list-unstyled">
              {experience.map((exp) => (
                <li
                  key={exp.id}
                  className="mb-5"
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: "10px",
                    padding: "20px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <h2 style={{ color: "#1C3A5F", fontWeight: "bold" }}>{exp.title}</h2>
                  <h4 style={{ color: "#555" }}>{exp.company}</h4>
                  <p style={{ fontStyle: "italic", fontFamily: "Times New Roman" }}>
                    {exp.start_date} - {exp.end_date}
                  </p>
                  <p style={{ color: "#333", fontFamily: "Times New Roman" }}>{exp.description}</p>
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
  