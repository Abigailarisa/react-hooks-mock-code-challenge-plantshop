import React from "react";
import PlantCard from "./PlantCard";

// notes
//pass in plants as destructured prop
//need to have a plant card for every plant for every = map
//map takes callback, pass in one plant at a time,arrow notation style, function returns plant card so -> <PlantCard/>
//render PlantCards components in here -> pass in function just made its not higlighted
//Warning: Each child in a list should have a unique "key" prop
// make unique key prop for plant card db.json (id, name, image, price keys) -- each plant

function PlantList({plants}) {
  const renderPlants = plants.map((plant) =>
  <PlantCard
    key={plant.id}
    name={plant.name}
    image={plant.image}
    price={plant.price}
    />
  )



  return (
    <ul className="cards">{renderPlants}</ul> //niiice
  );
}

export default PlantList;
