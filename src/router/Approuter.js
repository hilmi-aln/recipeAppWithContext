import { Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import About from "../pages/about/About";
import Details from "../pages/details/Details";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import PrivateRoute from "./PrivateRoute";

const Approuter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/home" element={<PrivateRoute />}>
          <Route path="" element={<Home />} />
        </Route>
        <Route path="/about" element={<About />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/details" element={<Details />} />
      </Routes>
    </>
  );
};

export default Approuter;
