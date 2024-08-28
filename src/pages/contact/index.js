import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import ContactForm from '../../components/contactForm/ContactForm';

export default function ContactPage() {
  return (
    <div style={{ backgroundColor: "#1C3A5F"}}>
      <Navbar />
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-12 col-md-6 p-5 ">
            <h1 className="ps-2"style={{ color: "white", fontSize: "5rem", fontWeight: "bold" }}>Contact Me!</h1>
            <h2 className="ps-2"style={{ color: "white", fontSize: "1.5rem", padding: "5px" }}>Please use this form to get in touch with me. Feel free to ask me any questions or reach out, and I'll get back to you soon!</h2>
            <img
              className="ps-2" 
              src="/contactCat.png" 
              alt="cat typing" 
              style={{ width: "60%", height:"60%"}}
            />
          </div>
          <div className="col-12 col-md-6 p-5">
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
