import { useState } from "react"
import Search from "./components/Search.jsx"
import FoodList from "./components/foodList.jsx";
import Nav from "./components/Nav.jsx";
import styles from "./css/App.module.css"

function App() {
  const [foodData, setFoodData]= useState([]);
  return (
  <div className="App">
    <Nav/>
    <Search foodData={foodData} setFoodData={setFoodData}/>
    <FoodList foodData={foodData}/>
  </div>
  )
}

export default App
