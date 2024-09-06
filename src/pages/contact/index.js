import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import ContactForm from '../../components/contactForm/ContactForm';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <div style={{ backgroundColor: "#1C3A5F"}}>
      <Navbar />
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-12 col-md-6 p-5 ">
            <h1 className="ps-2"style={{ color: "white", fontSize: "5rem", fontWeight: "bold" }}>Contact Me!</h1>
            <h2 className="ps-2"style={{ color: "white", fontSize: "1.5rem", padding: "5px" }}>Please use this form to get in touch with me. Feel free to ask me any questions or reach out, and I&apos;ll get back to you soon!</h2>
            <div style={{ width: "60%" }}>
              <Image
                className="ps-2"
                src="https://portfolio-images-1.s3.us-east-2.amazonaws.com/contactCat.png"
                alt="cat typing"
                layout="responsive"
                width={600}  // Natural width of the image
                height={400}  // Natural height of the image
              />
            </div>
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
