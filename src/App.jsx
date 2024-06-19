import { useState } from "react"
import Search from "./components/Search.jsx"
import FoodList from "./components/foodList.jsx";
import Nav from "./components/Nav.jsx";
import Container from "./components/container.jsx";
import "./css/App.module.css";
import InnerContainer from "./components/innerContainer.jsx";

function App() {
  const [foodData, setFoodData]= useState([]);
  return (
  <div className="App">
    <Nav/>
    <Search foodData={foodData} setFoodData={setFoodData}/>
    <Container>
    <InnerContainer>
    <FoodList foodData={foodData}/>
    </InnerContainer>
    </Container>
  </div>
  )
}

export default App
