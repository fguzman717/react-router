import { Routes, Route } from "react-router-dom";
import Red from "./Red.jsx";
import Blue from "./Blue.jsx";
import Home from "./Home.jsx";
import Orange from "./Orange.jsx";
import Cyan from "./Cyan.jsx";
import Green from "./Green.jsx";

export default function MainSection() {
  return (
    <div id="main-section">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blue" element={<Blue />}></Route>
        <Route path="/red" element={<Red />}></Route>
        <Route path="/green" element={<Green />}></Route>
        <Route path="/orange" element={<Orange />}></Route>
        <Route path="/cyan" element={<Cyan />}></Route>
      </Routes>
    </div>
  );
}
