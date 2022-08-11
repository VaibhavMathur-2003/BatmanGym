import React, { useEffect, useState } from "react";
import { OutlinedInput, Button } from "@mui/material";

const Form = () => {
  
  const handleSave =()=>{
    localStorage.setItem("details", JSON.stringify(Details));
  }
  const handleInput = ()=>{
    setDisable(!Disable)
  }
  const [Name, setName] = useState();
  const [Email, setEmail] = useState();
  const [Age, setAge] = useState();
  const [Gender, setGender] = useState();
  const [Disable, setDisable] = useState(false);
  const Details = [{ Name: Name, Email: Email, Age: Age, Gender: Gender }];
  useEffect(()=>{
    localStorage.setItem("details", JSON.stringify(Details));
  },[Details])
  useEffect(() => {
    const Info = JSON.parse(localStorage.getItem("details"));
    if (Info[0].Name) {
      setName(Info[0].Name)
    }
    if (Info[0].Email) {
      setEmail(Info[0].Email)
    }
    if (Info[0].Age) {
      setAge(Info[0].Age)
    }
    if (Info[0].Gender) {
      setGender(Info[0].Gender)
    }
    console.log(Info[0].Name)
  }, []);
  return (
    <>
    <div style={{backgroundColor:"black",padding:"20px"}}>
      <div
        style={{
          color: "white",
          fontSize: "clamp(1.5rem, 0rem + 3.2vw, 2.5rem)",
          textAlign: "center",
          margin: "2rem",
        }}
      >
        Tell Us About Yourself
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "column",
          color: "white",
          fontSize: "clamp(1rem, 0rem + 2.2vw, 1.5rem)",
        }}
      >
        <div>
          <div>
            Name
            <OutlinedInput
              sx={{
                height: "clamp(2.5rem, 0rem + 4.2vw, 3rem)",
                width: "50vw",
                border: "0.15px solid #3183FF",
              }}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              value={Name}
              readOnly={Disable}
              style={{
                color: "#FCFCFF",
                textTransform: "none",
                borderRadius: "6px",
                fontFamily: "Inter",
                fontWeight: 400,
                margin: "10px",
                fontSize: "16px",
                textAlign: "center",
              }}
            />
          </div>
          <div>
            E-Mail
            <OutlinedInput
              sx={{
                height: "clamp(2.5rem, 0rem + 4.2vw, 3rem)",
                width: "50vw",
                border: "0.15px solid #3183FF",
              }}
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
              readOnly={Disable}
              value={Email}
              style={{
                color: "#FCFCFF",
                textTransform: "none",
                borderRadius: "6px",
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "16px",
                margin: "10px",
                textAlign: "center",
              }}
            />
          </div>
          <div>
            Age
            <OutlinedInput
              sx={{
                height: "clamp(2.5rem, 0rem + 4.2vw, 3rem)",
                width: "50vw",
                border: "0.15px solid #3183FF",
              }}
              placeholder="Age"
              onChange={(e) => setAge(e.target.value)}
              readOnly={Disable}
              value={Age}
              style={{
                color: "#FCFCFF",
                textTransform: "none",
                borderRadius: "6px",
                fontFamily: "Inter",
                fontWeight: 400,
                margin: "10px",
                fontSize: "16px",
                textAlign: "center",
              }}
            />
          </div>
          <div>
            Gender
            <OutlinedInput
              sx={{
                height: "clamp(2.5rem, 0rem + 4.2vw, 3rem)",
                width: "50vw",
                border: "0.15px solid #3183FF",
              }}
              placeholder="Gender"
              onChange={(e) => setGender(e.target.value)}
              readOnly={Disable}
              value={Gender}
              style={{
                color: "#FCFCFF",
                textTransform: "none",
                borderRadius: "6px",
                fontFamily: "Inter",
                fontWeight: 400,
                margin: "10px",
                fontSize: "16px",
                textAlign: "center",
              }}
            />
          </div>
        </div>
        <Button style={{marginTop:"20px"}} onClick={()=>{handleInput();handleSave()}} variant="contained">
          {Disable ? "Edit" : "Save"}
        </Button>
      </div>
      </div>
    </>
  );
};

export default Form;
