import logo from "./logo.svg";
import "./App.css";
import React from "react";
import CreateNavBar from "./Components/Navbar";
import MarsPage from "./pages/Mars";
import SpacePage from "./pages/Space";
import HomePage from "./pages/HomeP";
import { Route, Link } from "react-router-dom";
import { Routes, route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <CreateNavBar />
      <Routes>
        <Route path="Home" element={<HomePage />} />{" "}
      </Routes>
      <Routes>
        <Route path="Space" element={<SpacePage />} />{" "}
      </Routes>
      <Routes>
        <Route path="Mars" element={<MarsPage />} />{" "}
      </Routes>
    </div>
  );
}

export default App;
