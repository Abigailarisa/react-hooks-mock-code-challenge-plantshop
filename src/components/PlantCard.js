import React, {useState} from "react";

//notes
// did some work in plant list <plantcard/> that needs to reflect
//first passing in the props destructuring style and i see that theyre props in the <li> those will be replaced to make things dynamic - perf now i know the props are name,image, price fs
//nice now thats showing up -- need to move on | I can add a new plant to the page by submitting the form.|
//submitting a form adds  a new plant to the page, cp need to make sure new plant we create gets submitted to

//| I can mark a plant as "sold out". |
//listen for a click on button to change the (updated)ternary
//listen for click in button to change t/f
//import useState, define state stock w/initial val of true, TTer-> inStock
//handle click on first button - so create handle click function that updates state (setter->F)
//listen for click on second button ->T


function PlantCard({ name, image, price}) {
  const [inStock, setInStock] = useState(true)


function handleClick(newValue) {
  setInStock(newValue)
}


  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary" onClick={() =>handleClick(false)}>In Stock</button>
      ) : (
        <button onClick={() => handleClick(true)}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
