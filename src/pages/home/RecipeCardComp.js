import {  useNavigate } from "react-router-dom";
import "./Home.css";

const RecipeCardComp = ({card}) => {
  const navigate = useNavigate();
 

  const detailClick = (e) => {
    navigate("/details", { state: { card } });
  }
  return (
    <div className="card">
      <h3>{card.title}</h3>
      <img src={card.image} alt="" />
      <button onClick={detailClick}>View More</button>
    </div>
  );
};

export default RecipeCardComp;
