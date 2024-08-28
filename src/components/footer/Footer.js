import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div style={{ backgroundColor: "#5A8FBD", paddingTop: "20px", paddingBottom: "20px", color: "#1C3A5F", fontFamily: "Times New Roman, serif", fontSize: "1.2rem" }}>
            <div className="container-fluid">
                <div className="row justify-content-center text-center">
                    <a href="mailto:ambernguyen50@gmail.com" style={{ color: "white", fontSize: "1.2rem", textDecoration: "none" }}>
                        ambernguyen50@gmail.com
                    </a>
                </div>
                <div className="row justify-content-center mt-1">
                    <div className="d-flex justify-content-center">
                        <a href="mailto:ambernguyen50@gmail.com" className="mx-2" target="_blank" style={{ color: "white", fontSize: "1.5rem" }}>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                        <a href="https://www.linkedin.com/in/ambnguyenn" className="mx-2" target="_blank" style={{ color: "white", fontSize: "1.5rem" }}>
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="https://github.com/ambnguyenn" className="mx-2" target="_blank" style={{ color: "white", fontSize: "1.5rem" }}>
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                </div>

                <div className="row justify-content-center text-center mt-0">
                    <a href="/" style={{ color: "white", fontSize: "2.5rem", fontWeight: "bold", fontFamily: "Roboto, sans-serif", textDecoration: "none" }}>
                        Amber Nguyen
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
