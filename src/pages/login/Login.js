import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";
import "./Login.css";

const Login = () => {
  const { handleClick } = useContext(LoginContext);

  return (
    <div className="container">
      <div className="form-container">
        <form className="login-form">
          <h2>{"<Recipe App/>"}</h2>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <button onClick={handleClick}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
