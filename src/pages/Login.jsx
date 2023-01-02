import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";

import "../CSS/Login.css";

const Forms = ({
  successfulSignIn,
  setSuccessfulSignIn,
  signInCredentials,
  setSignInCredentials,
  incorrectInputPopUp,
  setIncorrectInputPopUp,
}) => {
  const navigate = useNavigate();

  const handleSignInChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setSignInCredentials((prev) => {
      return { ...prev, [name]: value };
    });
    console.log(signInCredentials);
  };

  const fetchSignIn = async () => {
    const res = await fetch("http://127.0.0.1:5000/sign_in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([signInCredentials]),
    });
    const data = await res.json();
    console.log(data);

    if (data["message"] === "incorrect_details") {
      setSuccessfulSignIn(false);
      setIncorrectInputPopUp(true);
    } else {
      setSuccessfulSignIn(true);
      setIncorrectInputPopUp(false);
      console.log(signInCredentials);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };

  return (
    <MDBContainer fluid>
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12">
          <MDBCard
            className="bg-dark text-white my-5 mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "400px" }}
          >
            <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">
                Please enter your login and password!
              </p>

              <MDBInput
                onChange={handleSignInChange}
                wrapperClass="mb-4 mx-5 w-100"
                labelClass="text-white"
                label="Email address"
                id="formControlLg"
                type="email"
                size="lg"
                name="email"
              />
              <MDBInput
                onChange={handleSignInChange}
                wrapperClass="mb-4 mx-5 w-100"
                labelClass="text-white"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
                name="password"
              />

              <p className="small mb-3 pb-lg-2">
                <a class="text-white-50" href="#!">
                  Forgot password?
                </a>
              </p>
              <MDBBtn
                onClick={() => fetchSignIn()}
                outline
                className="mx-2 px-5"
                color="white"
                size="lg"
              >
                Login
              </MDBBtn>

              {incorrectInputPopUp && (
                <h3>Incorrect details, please try again..</h3>
              )}

              <div className="d-flex flex-row mt-3 mb-5">
                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-3"
                  style={{ color: "white" }}
                >
                  <MDBIcon fab icon="facebook-f" size="lg" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-3"
                  style={{ color: "white" }}
                >
                  <MDBIcon fab icon="twitter" size="lg" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-3"
                  style={{ color: "white" }}
                >
                  <MDBIcon fab icon="google" size="lg" />
                </MDBBtn>
              </div>

              <div>
                <p className="mb-0">
                  Don't have an account?{" "}
                  <a href="#!" class="text-white-50 fw-bold">
                    Sign Up
                  </a>
                </p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
export default Forms;
