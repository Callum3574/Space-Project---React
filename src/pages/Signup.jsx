import React, { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useNavigate } from "react-router-dom";
import "../CSS/Signup.css";
import Button from "react-bootstrap/Button";

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
} from "mdb-react-ui-kit";

function Signup() {
  const [signUpCredentials, setSignUpCredentials] = useState({
    email: "",
    password: "",
  });

  const [successfulSignUp, setSuccessfulSignUp] = useState(false);
  const [userExists, setUserExists] = useState(false);
  const [invalidInput, setInvalidInput] = useState(false);

  const navigate = useNavigate();

  const handleSignUpChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setSignUpCredentials((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const fetchSignUp = async () => {
    const res = await fetch(
      "https://space-explorer-nasa.netlify.app/create_user",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([signUpCredentials]),
      }
    );
    const data = await res.json();

    if (data["message"] === "failed") {
      setSuccessfulSignUp(false);
      setUserExists(true);
    } else if (data["message"] === "empty-submit") {
      setSuccessfulSignUp(false);
      setInvalidInput(true);
    } else {
      setSuccessfulSignUp(true);
      setInvalidInput(false);
      setUserExists(false);

      setTimeout(() => {
        navigate("/Login");
      }, 2000);
    }
  };

  return (
    <MDBContainer
      fluid
      className="p-4 background-radial-gradient overflow-hidden"
    >
      <MDBRow>
        <MDBCol
          md="7"
          className="text-center text-md-start d-flex flex-column justify-content-center"
        >
          <h1
            className="my-5 display-2 fw-bold ls-tight px-5"
            style={{ color: "hsl(218, 81%, 95%)" }}
          >
            Space Explorer <br />
            <span style={{ color: "hsl(218, 81%, 75%)" }}>NASA API</span>
          </h1>

          <p className="px-1" style={{ color: "hsl(218, 81%, 85%)" }}></p>
        </MDBCol>

        <MDBCol md="4" className="position-relative">
          <div
            id="radius-shape-2"
            className="position-absolute rounded-circle shadow-5-strong"
          ></div>
          <div
            id="radius-shape-2"
            className="position-absolute shadow-5-strong"
          ></div>

          <MDBCard className="my-5 bg-glass">
            <MDBCardBody className="p-5">
              <MDBInput
                wrapperClass="mb-4"
                label="Email"
                id="form3"
                type="email"
                name="email"
                onChange={handleSignUpChange}
              />
              <MDBInput
                wrapperClass="mb-5"
                label="Password"
                id="form4"
                type="password"
                name="password"
                onChange={handleSignUpChange}
              />

              <div className="d-flex justify-content-center mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Subscribe to our newsletter"
                />
              </div>

              <Button onClick={fetchSignUp} size="lg">
                sign up
              </Button>
              {successfulSignUp && (
                <div>
                  <h3>Success.. Loading....</h3>
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </div>
              )}

              {invalidInput && (
                <h3>Please sign up with email address and a password</h3>
              )}

              {userExists && <h3>Email already registered</h3>}

              <div className="text-center">
                <p>or sign up with:</p>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="facebook-f" size="sm" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="twitter" size="sm" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="google" size="sm" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="github" size="sm" />
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Signup;
