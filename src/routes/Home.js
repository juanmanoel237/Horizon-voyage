import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1502307941198-c79259da770a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        title="Votre voyage, votre histoire"
        text="Choisissez votre destination favorite"
      />
    </>
  );
}

export default Home;
