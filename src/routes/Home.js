import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1544451290-c7d5f103bce8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
        title="Votre voyage, votre histoire"
        text="Choisissez votre destination favorite"
        buttonText="Plan de Voyage"
        url="/"
        btnClass="show"
      />
    </>
  );
}

export default Home;
