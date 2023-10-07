import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/chinois.jpg";
import Footer from "../components/Footer";
function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="A Propos"
        btnClass="hide"
      />
      <Footer />
    </>
  );
}

export default About;
