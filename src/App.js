import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState, usePrevious } from "react";
import CreateNavBar from "./Components/Navbar";
import MarsPage from "./pages/Mars";
import SpacePage from "./pages/Space";
import HomePage from "./pages/HomeP";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import "./CSS/Footer.css";
import CreateFooter from "./Components/Footer";
import Forms from "./pages/Login";
import Signup from "./pages/Signup";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";

function App() {
  const apiKey = "mj0QncoUEOT1RHuPj2eyCXmEoXlYIgQbCbsDHS83";

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [successfulSignIn, setSuccessfulSignIn] = useState(false);
  const [incorrectInputPopUp, setIncorrectInputPopUp] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [signInCredentials, setSignInCredentials] = useState({
    email: "",
    password: "",
  });

  const handleUserName = (e) => {
    const username = e.target.value;
    setUserName(username);
  };

  const handlePassword = (e) => {
    const currentPassword = e.target.value;
    setPassword(currentPassword);
  };

  const fetchData = async () => {
    const res = await fetch(
      "https://space-project-backend-production.up.railway.app/get_user"
    );

    const data = await res.json();
    console.log(data);
  };

  return (
    <div className="App">
      <div>
        <CreateNavBar
          successfulSignIn={successfulSignIn}
          signInCredentials={signInCredentials}
        />

        {!successfulSignIn && (
          <>
            <Button
              className="button-question"
              variant="primary"
              onClick={handleShow}
            >
              What extras do registered users get?
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  Benefits of making an account?
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                1. You can download the images! <br /> 2. You can sign up to
                receive daily pictures by email!
              </Offcanvas.Body>
            </Offcanvas>
          </>
        )}
        <Routes>
          <Route
            path="/"
            element={
              <HomePage apiKey={apiKey} signInCredentials={signInCredentials} />
            }
          />

          <Route path="/Space" element={<SpacePage apiKey={apiKey} />} />

          <Route path="/Mars" element={<MarsPage apiKey={apiKey} />} />

          <Route
            path="/Login"
            element={
              <Forms
                apiKey={apiKey}
                handlePassword={handlePassword}
                handleUserName={handleUserName}
                fetchData={fetchData}
                setSuccessfulSignIn={setSuccessfulSignIn}
                successfulSignIn={successfulSignIn}
                signInCredentials={signInCredentials}
                setSignInCredentials={setSignInCredentials}
                setIncorrectInputPopUp={setIncorrectInputPopUp}
                incorrectInputPopUp={incorrectInputPopUp}
              />
            }
          />

          <Route path="/Signup" element={<Signup apiKey={apiKey} />} />
        </Routes>
      </div>
      <div class="footer">
        <CreateFooter />
      </div>
    </div>
  );
}

export default App;
