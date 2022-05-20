import axios from "axios";
import { useState } from "react";

import Header from "../../components/header/Header";
import "./Home.css";
import RecipeCardComp from "./RecipeCardComp";

const apiKey = process.env.REACT_APP_API_KEY;
const appId = process.env.REACT_APP_APP_ID;

const Home = () => {
  const [question, setQuestion] = useState("");
  const [mealType, setMealType] = useState("");
  const [cards, setCards] = useState([]);
  

  const questionHandle = (e) => {
    setQuestion(e.target.value);
    // console.log(question);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    recipeSearch();
  };

  const mealTime = (e) => {
    setMealType(e.target.value);
  };

  

  const recipeSearch = () => {
    axios
      .get(
        `https://api.edamam.com/search?q=${question}&app_id=${appId}&app_key=${apiKey}&mealType=${mealType}`
      )
      .then((res) => {
        
        // console.log(res.data.hits[0].recipe.label);
        setCards(res.data?.hits);
        // console.log(cards);
      });
  };

  return (
    <div>
      <Header
        questionHandle={questionHandle}
        handleSubmit={handleSubmit}
        mealTime={mealTime}
      />
      <div className="card-container">
        {
          cards.map((card, index) => {
            return (
              <RecipeCardComp
                key={index}
                card={card?.recipe}
              />
            )
          })
        }
      </div>
            
    </div>
  );
};

export default Home;
