import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Voiture from "../assets/hero.jpg";
import Destinations from "../components/Destinations";
import Trip from "../components/Trip";
function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={Voiture}
        title="Votre voyage, votre histoire."
        text="Choisissez votre destination favorite."
        buttonText="Plan de Voyage"
        url="/"
        btnClass="show"
      />
      <Destinations />
      <Trip />
    </>
  );
}

export default Home;
