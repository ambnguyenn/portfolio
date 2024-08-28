import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Navbar() {
    return ( 
        <nav className="navbar navbar-expand-lg pt-5 pe-5 ps-5" style={{ backgroundColor: "#1C3A5F" }}>
            <a className="navbar-brand ms-3 ms-md-5" href="/" style={{ color: "white" }}>
                Amber Nguyen
            </a>
            <button
                className="navbar-toggler me-3 me-md-5"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end me-5" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="projects" style={{ color: "white", fontFamily: "Times New Roman, serif", fontSize: "1.2rem" }}>
                            Projects
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="experience" style={{ color: "white", fontFamily: "Times New Roman, serif", fontSize: "1.2rem" }}>
                            Experience
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="resume" style={{ color: "white", fontFamily: "Times New Roman, serif", fontSize: "1.2rem" }}>
                            Resume
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="contact" style={{ color: "white", fontFamily: "Times New Roman, serif", fontSize: "1.2rem" }}>
                            Contact
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="mailto:ambernguyen50@gmail.com" style={{ color: "white", fontFamily: "Times New Roman, serif", fontSize: "1.2rem" }}>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.linkedin.com/in/ambnguyenn" target="_blank" rel="noopener noreferrer" style={{ color: "white", fontFamily: "Times New Roman, serif", fontSize: "1.2rem" }}>
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
    
}