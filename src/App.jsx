import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import MainSection from "./components/MainSection.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <div id="container">
        <Navbar />
        <MainSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
