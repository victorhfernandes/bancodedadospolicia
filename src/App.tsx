import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Dentro from "./pages/Dentro/Dentro";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import Bettie from "./pages/Bettie/Bettie";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/arquivos" element={<Dentro />} />
        <Route path="/arquivos/bettie-boom-boom" element={<Bettie />} />
      </Routes>
    </>
  );
};

export default App;
