import { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Image from 'next/image'; // Assuming you're using Next.js Image component

export default function ResumePage() {
  const [isMobile, setIsMobile] = useState(false);

  // Function to detect screen width and set whether the device is mobile
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768); // Set breakpoint at 768px
  };

  useEffect(() => {
    // Check on initial load
    handleResize();

    // Add event listener to detect window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ backgroundColor: "#1C3A5F" }}>
      <Navbar />
      <div className="container-fluid mt-5">
        <div className="col-12 pt-0 pb-3" style={{ textAlign: "center" }}>
          <h1 style={{ color: "white", fontSize: "4rem", fontWeight: "bold" }}>My Resume</h1>
        </div>
        <div className="col-12" style={{ textAlign: "center" }}>
          {/* Download Link */}
          <p style={{ fontFamily: "Times New Roman", color: "white", fontSize: "1.5rem" }}>
            Download my resume{" "}
            <a 
              href="https://portfolio-images-1.s3.us-east-2.amazonaws.com/AmberNguyen_Resume.pdf" 
              style={{ textDecoration: "underline", color: "#5A8FBD" }} 
              target="_blank"
              download
            >
              here
            </a>
            !
          </p>
          <Image 
            src="https://portfolio-images-1.s3.us-east-2.amazonaws.com/AmberNguyen_resume.png"
            className="img-fluid"
            width={700} // Adjust width for the image
            height={1000} // Maintain aspect ratio
            id="resume-image"
            alt="Resume"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
