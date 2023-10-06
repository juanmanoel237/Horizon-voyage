import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServiceImg from "../assets/maldives.jpg";
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
    </>
  );
}

export default Service;
