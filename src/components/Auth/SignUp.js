import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { firebase } from "../firebase/firebase";
const SignUp = () => {
  const SignInWithFirebase = () => {
    var google_provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(google_provider)
      .then((re) => {
        console.log(re);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div
        className="auth"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Button
          style={{
            marginTop: "200px",
            padding: "50px",
          }}
          variant="contained"
          onClick={SignInWithFirebase}
        >
          Sign In With Google
        </Button>

        <Button
          style={{
            marginTop: "100px",
            padding: "50px",
          }}
          variant="contained"
        >
          <Link to="/homepage" style={{ color: "white" }}>
            Enter As Guest
          </Link>
        </Button>
      </div>
    </>
  );
};

export default SignUp;
