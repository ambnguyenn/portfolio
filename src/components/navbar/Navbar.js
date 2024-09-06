import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export default function Navbar() {
    return ( 
        <nav className="navbar navbar-light navbar-expand-lg pt-5 pe-md-5 ps-md-5 ps-4 pe-4" style={{ backgroundColor: "#1C3A5F" }}>
            <Link className="navbar-brand" href="/" style={{ color: "white" }}>
                Amber Nguyen
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                style={{ border: "none" }}
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" href="projects" style={{ color: "white", fontFamily: "Times New Roman, serif", fontSize: "1.2rem" }}>
                            Projects
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="experience" style={{ color: "white", fontFamily: "Times New Roman, serif", fontSize: "1.2rem" }}>
                            Experience
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="resume" style={{ color: "white", fontFamily: "Times New Roman, serif", fontSize: "1.2rem" }}>
                            Resume
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="contact" style={{ color: "white", fontFamily: "Times New Roman, serif", fontSize: "1.2rem" }}>
                            Contact
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="mailto:ambernguyen50@gmail.com" style={{ color: "white", fontFamily: "Times New Roman, serif", fontSize: "1.2rem" }}>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="https://www.linkedin.com/in/ambnguyenn" target="_blank" rel="noopener noreferrer" style={{ color: "white", fontFamily: "Times New Roman, serif", fontSize: "1.2rem" }}>
                            <FontAwesomeIcon icon={faLinkedin} />
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
    
}