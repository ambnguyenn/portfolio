import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

export default function ResumePage() {
  return (
    <div style={{ backgroundColor: "#1C3A5F" }}>
      <Navbar />
      <div className="container-fluid mt-5">
        <div className="col-12 pt-0 pb-3" style={{ textAlign: "center" }}>
          <h1 style={{ color: "white", fontSize: "4rem", fontWeight: "bold" }}>My Resume</h1>
        </div>
        <div className="col-12" style={{ textAlign: "center" }}>
          <iframe
            src="https://portfolio-images-1.s3.us-east-2.amazonaws.com/AmberNguyen_Resume.pdf"
            style={{
              width: '70%',
              height: '700px',
              border: '5px solid white', // Thin white border
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Subtle shadow
              borderRadius: '8px', // Rounded corners for a softer look
            }}
            title="Resume"
            className="resume-iframe"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
