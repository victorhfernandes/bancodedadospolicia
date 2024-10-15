import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Dentro from "./pages/Dentro/Dentro";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pesquisa" element={<Dentro />} />
      </Routes>
    </>
  );
};

export default App;
