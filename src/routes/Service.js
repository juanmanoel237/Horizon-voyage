import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServiceImg from "../assets/maldives.jpg";
import Footer from "../components/Footer";
function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={ServiceImg}
        title="Services"
        btnClass="hide"
      />
      <Footer />
    </>
  );
}

export default Service;
