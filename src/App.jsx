import { useState } from "react"
import Search from "./components/Search.jsx"
import FoodList from "./components/foodList.jsx";
import Nav from "./components/Nav.jsx";
import Container from "./components/container.jsx";
import "./css/App.module.css";
import InnerContainer from "./components/innerContainer.jsx";
import FoodDetails from "./components/FoodDetails.jsx";

function App() {
  const [foodData, setFoodData]= useState([]);
  const [foodId, setFoodId] = useState("715415");
  return (
  <div className="App">
    <Nav/>
    <Search foodData={foodData} setFoodData={setFoodData} />
    <Container>
    <InnerContainer>
    <FoodList setFoodId={setFoodId} foodData={foodData}/>
    </InnerContainer>
    <InnerContainer>
    <FoodDetails foodId={foodId}/>
    </InnerContainer>
    </Container>
  </div>
  )
}

export default App
