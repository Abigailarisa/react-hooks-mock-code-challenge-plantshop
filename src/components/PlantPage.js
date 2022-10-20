import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

const baseUrl = "http://localhost:6001/plants"
//notes
// fetch needs two args cb and array
// need to pass down to plant list w/prop need to create state - useState & define state
// setter function - pass into fetch
//pass plants to plant list as prop and pass it into plant is comp()
//update plant state by passing setPlants to <NewPlantForm/>
// | I can search for plants by their name and see a filtered list of plants. |
//<input> should change what's being passed in plant list -> filter, "lift state" from searn to plantpage, define state, pass as necessary
//want the plants that meet search critera to filter
//pass filterdplants to <plantList/> instead of plants

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState('')

useEffect(() => {
  fetch(baseUrl)
    .then((res) => res.json())
    .then((data)=> setPlants(data))
  }, [] )

  const filteredPlants = plants.filter((plant) => plant.name.includes(search))

  return (
    <main>
      <NewPlantForm setPlants={setPlants}/>
      <Search search={search} setSearch={setSearch}/>
      <PlantList plants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
