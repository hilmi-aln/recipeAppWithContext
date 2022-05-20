import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import "./Home.css";
import RecipeCardComp from "./RecipeCardComp";
import loadingGif from "../../asset/loading.gif";

const apiKey = process.env.REACT_APP_API_KEY;
const appId = process.env.REACT_APP_APP_ID;

const Home = () => {
  const [question, setQuestion] = useState("a");
  const [mealType, setMealType] = useState("dinner");
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState();

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

  const recipeSearch = async () => {
    setLoading(true);
    await axios
      .get(
        `https://api.edamam.com/search?q=${question}&app_id=${appId}&app_key=${apiKey}&mealType=${mealType}`
      )
      .then((res) => {
        setCards(res.data?.hits);
        // console.log(cards);
      })
      .catch((err) => {
        setCards(err.name);
      });
    setLoading(false);
  };
  useEffect(() => {
    recipeSearch();
  }, []);

  return (
    <div>
      <Header
        questionHandle={questionHandle}
        handleSubmit={handleSubmit}
        mealTime={mealTime}
      />
      {loading ? (
        <img src={loadingGif} alt="loading" />
      ) : (
        <div className="card-container">
          {cards.length === 0 ? (
            <p>Please enter a meal</p>
          ) : cards === "AxiosError" ? (
            <h2>Your request is not found in this category</h2>
          ) : (
            cards.map((card, index) => {
              return <RecipeCardComp key={index} card={card?.recipe} />;
            })
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
