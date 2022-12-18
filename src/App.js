import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";
import "./App.css";
import React from "react";
import CreateNavBar from "./Components/Navbar";
import MarsPage from "./pages/Mars";
import SpacePage from "./pages/Space";
import HomePage from "./pages/HomeP";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import "./CSS/Footer.css";
import Forms from "./pages/Login";

function App() {
  const apiKey = "mj0QncoUEOT1RHuPj2eyCXmEoXlYIgQbCbsDHS83";

  return (
    <div className="App">
      <div>
        <CreateNavBar />
        <Routes>
          <Route path="/" element={<HomePage apiKey={apiKey} />} />
        </Routes>
        <Routes>
          <Route path="Space" element={<SpacePage apiKey={apiKey} />} />
        </Routes>
        <Routes>
          <Route path="Mars" element={<MarsPage apiKey={apiKey} />} />
        </Routes>
        {/* <Routes>
          <Route path="Login" element={<Forms apiKey={apiKey} />} />
        </Routes> */}
      </div>
      <div class="footer"></div>
    </div>
  );
}

export default App;
