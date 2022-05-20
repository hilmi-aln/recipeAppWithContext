import { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../../context/LoginContext";
import "./Navbar.css";

const Navbar = () => {
  const { login, navbarChange } = useContext(LoginContext);
  return (
    <div className="navbar">
      <Link to="/">{"<Hilmi/>Recipe"}</Link>
      <div className="navbar-right">
        <Link to="/about">About</Link>
        <Link to="/github">Github</Link>
        {/* <a href="">Logout</a> */}
        <Link to="/" onClick={navbarChange}>
          {login ? "Logout" : "Login"}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
