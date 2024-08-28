import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer"
import Strengths from "../strengths/Strengths"


export default function Portfolio() {
    return (
        <div>
            <Navbar />

            <div style={{ backgroundColor: "#1C3A5F", color: "white", paddingTop: "20px", paddingBottom: "20px" }}>
                <div className="container-fluid">
                    <div className="row align-items-center justify-content-center">
                        <div className="profile-image col-12 col-md-4 text-center text-md-end me-md-5 mb-4">
                            <img src="/portfolio-img.jpg" className="img-fluid" id="mission-image" alt="laptop with code" />
                        </div>
                        <div className="profile-text col-12 col-md-6 text-center text-md-start" id="mission-statement">
                            <h2>
                                Senior undergraduate student at the University of South Florida pursuing a
                                Bachelor of Science in Computer Science. Interested in web development, tech, and cats.
                            </h2>
                        </div>
                    </div>
                </div>
            </div>


            <div style={{ backgroundColor: "#F7F9FB", paddingTop: "20px", paddingBottom: "20px", color: "#1C3A5F", fontFamily: "Times New Roman, serif", fontSize: "1.2rem" }}>
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="bio text-center w-75 mx-auto">
                            <p>
                                Hi! My name is Amber Nguyen and I was born and raised in St. Petersburg, Florida. I am currently pursuing a Bachelor of Science in Computer Science, graduating in May 2025. I attend the University of South Florida and live in Tampa. My skills are in JavaScript, Python, Java, and C++ and I am passionate about web development and technology. This portfolio was built using React, Next.js, and Bootstrap. I am currently open to full-time software developer positions post-graduation, or summer 2025 internship positions. In my free time, I am a huge foodie, love watching movies/tv shows, working out, or spending time with family, friends, and my cat, Cinnamon.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Strengths />

            <Footer />

        </div>

        
    );
}
