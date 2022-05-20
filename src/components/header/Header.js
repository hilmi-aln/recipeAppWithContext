import "./Header.css";
import Form from "./Form";

const Header = ({questionHandle, handleSubmit, mealTime}) => {
  return (
    <header>
      <h2>Food App</h2>
      <Form questionHandle = {questionHandle} handleSubmit={handleSubmit} mealTime={mealTime}/>
    </header>
  );
};

export default Header;
