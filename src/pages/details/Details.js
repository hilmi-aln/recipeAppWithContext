import { useLocation } from "react-router-dom";
import "./Details.css";

const Details = () => {
  const location = useLocation();
  const card = location.state.card;
  console.log(location);
  return (
    <div className="detail-container">
      <div className="header-container">
        <h1>{card.label}</h1>
      </div>
      <div className="detail-part">
        <div className="otherpart">
          <>Nutrients</>
          <p>
            {card.totalNutrients.CA.label} :
            {Math.round(card.totalNutrients.CA.quantity)}
            {card.totalNutrients.CA.unit}
          </p>
          <p>
            {card.totalNutrients.CHOCDF.label} :
            {Math.round(card.totalNutrients.CHOCDF.quantity)}
            {card.totalNutrients.CHOCDF.unit}
          </p>
          <p>
            {card.totalNutrients.CHOLE.label} :{" "}
            {Math.round(card.totalNutrients.CHOLE.quantity)}
            {card.totalNutrients.CHOLE.unit}
          </p>
          <p>
            {card.totalNutrients.ENERC_KCAL.label} :{" "}
            {Math.round(card.totalNutrients.ENERC_KCAL.quantity)}
            {card.totalNutrients.ENERC_KCAL.unit}
          </p>
          <p>{card.totalWeight}</p>
          <p>Calories: {Math.round(card.calories)}</p>
          {card.digest.slice(0, 4).map((item, index) => (
            <p key={index}>
              {item.label} : {Math.round(item.total)}
            </p>
          ))}
        </div>
      </div>
      <div className="image-container">
        <img src={card.image} alt="" />
      </div>
      <div className="ingredContainer">
      {card.ingredientLines.map((malzeme, index) => (
            <div key={index}>
              <p>
                {index + 1} * {malzeme}
                {/* ingredientLines içinde bir sürü obje var tek tek yazdır, başına no ekle 1*{malzeme} gibi */}
              </p>
            </div>
          ))}
      </div>
      
    </div>
  );
};

export default Details;
