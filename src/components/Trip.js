import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/maldives.jpg";
import Trip2 from "../assets/egypt.jpg";
import Trip3 from "../assets/paris.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Récents Voyages</h1>
      <p>
        Vous pouvez découvrir de nouvelles destinations en utilisant Google Maps
      </p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Voyage aux Maldives"
          text="Les Maldives, archipel de l'océan Indien, évoquent des plages de sable blanc, des eaux turquoise, et des récifs coralliens spectaculaires.
           C'est un paradis pour les amoureux de la plage et de la plongée. Les bungalows sur pilotis, la biodiversité marine riche, 
        et l'hospitalité maldivienne font de cet endroit une destination de rêve pour les voyageurs."
        />
        <TripData
          image={Trip2}
          heading="L'Égypte"
          text="L'Égypte, pays d'Afrique du Nord-Est, est célèbre pour ses pyramides emblématiques
          , notamment les pyramides de Gizeh. Elle a une histoire millénaire,
           une riche culture et une civilisation ancienne. Le Nil, son fleuve,
            est vital pour l'agriculture. Le Caire, sa capitale, 
            est une métropole animée. 
            L'Égypte attire les visiteurs avec son patrimoine historique, 
            ses plages de la mer Rouge et son désert."
        />
        <TripData
          image={Trip3}
          heading="Paris"
          text="Paris, capitale de la France, est une ville emblématique. 
          Célèbre pour sa tour Eiffel emblématique, ses musées de renommée mondiale comme le Louvre, 
          son histoire riche et ses avenues bordées de cafés. La Seine la traverse, ajoutant à son charme. 
          Paris est un carrefour culturel et artistique qui attire des visiteurs du monde entier."
        />
      </div>
    </div>
  );
}

export default Trip;
