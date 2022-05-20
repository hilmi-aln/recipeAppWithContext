import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginContext = createContext();

const LoginContextProvider = ({ children }) => {
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
    setLogin(true);
    // console.log(login);
  };
  const navbarChange = () => {
    setLogin(false);
    // console.log(login);
  }

  return (
    <LoginContext.Provider value={{ login, handleClick,navbarChange }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
