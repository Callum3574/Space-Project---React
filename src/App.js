import logo from "./logo.svg";
import "./App.css";
import React from "react";
import CreateNavBar from "./Components/Navbar";
import MarsPage from "./pages/Mars";
import SpacePage from "./pages/Space";
import HomePage from "./pages/HomeP";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <CreateNavBar />
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
      <Routes>
        <Route path="/Space" element={<SpacePage />} />
      </Routes>
      <Routes>
        <Route path="/Mars" element={<MarsPage />} />
      </Routes>
    </div>
  );
}

export default App;
