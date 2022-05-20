import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginContext = createContext();

const LoginContextProvider = ({ children }) => {
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
    setLogin(true);
  };

  return (
    <LoginContext.Provider value={{ login, handleClick }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
