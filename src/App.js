import "./App.css";
import LoginContextProvider from "./context/LoginContext";
import Approuter from "./router/Approuter";

function App() {
  return (
    <div className="App">
      <LoginContextProvider>
        <Approuter />
      </LoginContextProvider>
    </div>
  );
}

export default App;
