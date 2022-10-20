import React, { useState } from "react";

const baseUrl = "http://localhost:6001/plants"
//notes
//form time to make a form we need state and to listen for a event
//three inputs that we need to listen for so - controlled form
//need  to define plant state variable for inputs
// each key-val pair need to be in state create a func for this and pass in
//need the value of the new plant keys exp on input - used new plant now for setter ()
// can add event listener now onchange on inputs
//event listener needs a function to handle change ~where we target the value? eventually
//setter function for EL needs plant as of rn and new plant state non-destructive - arrow function
//each name is diff on inputs so if that changes- h update state + original e.target.value- physically look like [key]:value
//forms need on submit (<form onSubmit={handleSubmit}>) - on submit requires handler function(that'll be passed in later), fetch - post, prevent defualt,
//url needs to be in file!
//newPlant =initialStateNewPlant need to send this to data (((currentPlant) => ({...currentPlantState)
//set plant -> {setPlants} -><NPF/> * destructured prop
//don't forget to clear the form -> setNewPlant(initialStateNewPlant)

const initialStateNewPlant = {
  name: "",
  image: "",
  price: "",
}

function NewPlantForm({setPlants}) {
  const [newPlant, setNewPlant] = useState(initialStateNewPlant)
// console.log(newPlant)

function handleChange(e) {
  console.log(e.target)
  setNewPlant((currentNewPlantState) => ({...currentNewPlantState, [e.target.name]: e.target.value})) //callback
}

function handleSubmit(e) {
  e.preventDefault();
  fetch(baseUrl,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newPlant)
})
.then((res)=> res.json())
// .then(data => console.log)
.then(data => setPlants((currentPlants) => [...currentPlants, data]))

setNewPlant(initialStateNewPlant)

}


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={newPlant.name} onChange={handleChange}/>
        <input type="text" name="image" placeholder="Image URL" value={newPlant.image} onChange={handleChange}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={newPlant.price} onChange={handleChange}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
