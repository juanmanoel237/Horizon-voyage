import React from "react";
import Dubai1 from "../assets/Dubai.jpg";
import Dubai2 from "../assets/Dubai2.jpg";
import grece1 from "../assets/grece1.jpg";
import grece2 from "../assets/grece2.jpg";
import "./DestinationStyles.css";
import DestinationData from "./DestinationData";

const Destinations = () => {
  return (
    <div className="destination">
      <h1>Destinations Populaires</h1>
      <p>
        Tours vous donne l'opportunité de découvrir plein de choses en un court
        laps de temps
      </p>

      <DestinationData
        className="first-des"
        heading="Ville de Dubai"
        text="Dubai, située aux Émirats arabes unis, est une métropole fascinante et extravagante qui incarne la modernité et le luxe. 
        Dominée par des gratte-ciels emblématiques tels que 
        la Burj Khalifa, la plus haute tour du monde, elle offre 
        un paysage urbain futuriste. Ses plages immaculées, 
        comme Jumeirah Beach, attirent les visiteurs en quête de détente. 
        Dubai Mall, un gigantesque centre commercial, est un paradis du shopping, 
        tandis que les souks traditionnels offrent une expérience contrastée. 
        La ville est un carrefour international, avec des restaurants raffinés, 
        des activités telles que le ski en intérieur, et une vision ambitieuse 
        pour l'avenir, notamment Expo 2020."
        img1={Dubai1}
        img2={Dubai2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="La Crète en Grèce"
        text="La Crète, la plus grande île de Grèce, offre une riche expérience méditerranéenne.
         Ses plages idylliques, baignées par les eaux cristallines de la mer Égée, attirent les visiteurs.
          L'histoire millénaire de la Crète se révèle à travers des sites archéologiques tels que le palais 
          de Knossos, berceau de la civilisation minoenne. Les montagnes majestueuses, 
          notamment les gorges de Samaria, sont un terrain de jeu pour les randonneurs. 
          La cuisine crétoise, célèbre pour son huile d'olive et ses produits locaux,
           régale les papilles. Les charmants villages côtiers et l'hospitalité chaleureuse des habitants 
           complètent cette destination enchanteresse pour les amoureux de la nature, 
           de l'histoire et de la culture."
        img1={grece1}
        img2={grece2}
      />
    </div>
  );
};

export default Destinations;
