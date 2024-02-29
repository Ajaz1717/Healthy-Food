import "./App.css";
import AddFood from "./components/AddFood";
import FoodList from "./components/FoodList";
import Header from "./components/Header";

function App() {
  return (
    <div className="Appdiv">
      <Header/>
      <AddFood/>
      <FoodList/>
    </div>
  );
}

export default App;
