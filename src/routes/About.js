import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/chinois.jpg";
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
    </>
  );
}

export default About;
