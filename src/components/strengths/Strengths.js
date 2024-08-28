import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBugSlash, faGears, faBrain } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles

const Strengths = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of the animation in milliseconds
            offset: 100, // Offset to trigger animation sooner or later (in px)
            once: true, // Whether animation should happen only once
        });
    }, []);

    return (
        <div style={{ backgroundColor: "#1C3A5F", color: "white", paddingTop: "20px", paddingBottom: "20px" }}>
            <div className="container-fluid">
                <div className="col-12">
                    <h2 className="text-center mb-4 mt-2">Strengths</h2>
                </div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 skill-cards" style={{ fontFamily: "Times New Roman"}}>
                    <div className="col" data-aos="fade-up">
                        <div className="text-center">
                            <FontAwesomeIcon icon={faBugSlash} style={{ fontSize: '5rem', color: "#abdfff" }}/>
                            <div className="card-body mt-3">
                                <h5 className="card-title fs-4">Problem-solving</h5>
                                <p className="card-text mt-1">Analytical thinking, debugging, optimization.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col" data-aos="fade-up" data-aos-delay="200">
                        <div className="text-center">
                            <FontAwesomeIcon icon={faGears} style={{ fontSize: '5rem', color: "#abdfff" }}/>
                            <div className="card-body mt-3">
                                <h5 className="card-title fs-4">Hardworking & Determined</h5>
                                <p className="card-text mt-1">Consistently strive to achieve goals and complete projects on time, regardless of challenges.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col" data-aos="fade-up" data-aos-delay="400">
                        <div className="text-center">
                            <FontAwesomeIcon icon={faBrain} style={{ fontSize: '5rem', color: "#abdfff" }}/>
                            <div className="card-body mt-3">
                                <h5 className="card-title fs-4">Adaptability</h5>
                                <p className="card-text mt-1">Quick learner, ability to pick up new technologies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Strengths;
