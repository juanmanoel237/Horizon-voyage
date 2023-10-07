import React from "react";
import Dubai1 from "../assets/Dubai.jpg";
import Dubai2 from "../assets/Dubai2.jpg";
import "./DestinationStyles.css";

const Destinations = () => {
  return (
    <div className="destination">
      <h1>Destinations Populaires</h1>
      <p>
        Tours vous donne l'opportunité de découvrir plein de choses en un court
        laps de temps
      </p>

      <div className="first-des">
        <div className="des-text">
          <h2>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
            deserunt illo accusantium.
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
            consectetur reiciendis dolorem blanditiis officia? Doloribus
            incidunt recusandae accusantium magni asperiores error rerum! A iure
            saepe molestias aperiam, fugit itaque at. Perferendis consequatur
            autem mollitia similique!
          </p>
        </div>

        <div className="image">
          <img src={Dubai1} alt="" />
          <img src={Dubai2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Destinations;
