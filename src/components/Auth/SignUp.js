import React from "react";
import { Button } from "@mui/material";
import { SignInWithGoogle } from "../firebase/firebase";
import { Link } from "react-router-dom";

const SignUp = () => {
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
          onClick={SignInWithGoogle}
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
