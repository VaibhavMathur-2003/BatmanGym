import React, { useEffect, useState } from "react";
import { OutlinedInput, Button } from "@mui/material";
function getFormValues() {
  const storedValues = localStorage.getItem("form");
  if (!storedValues)
    return {
      email: "",
      age: "",
      name: "",
      gender: "",
    };
  return JSON.parse(storedValues);
}
const Form = () => {
  const [Disable, setDisable] = useState(false);

  const [values, setValues] = useState(getFormValues);

  useEffect(() => {
    localStorage.setItem("form", JSON.stringify(values));
  }, [values]);

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleChange(event) {
    setValues((previousValues) => ({
      ...previousValues,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <>
      <div style={{ backgroundColor: "black", padding: "20px" }}>
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
          <form onSubmit={handleSubmit} style={{ textAlign: "center" , alignItems:"center"}}>
            <div>
              Name
              <OutlinedInput
                sx={{
                  height: "clamp(2.5rem, 0rem + 4.2vw, 3rem)",
                  width: "50vw",
                  border: "0.15px solid #3183FF",
                }}
                placeholder="Name"
                name="name"
                onChange={handleChange}
                value={values.name}
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
                name="email"
                onChange={handleChange}
                readOnly={Disable}
                value={values.email}
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
                onChange={handleChange}
                readOnly={Disable}
                value={values.age}
                name="age"
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
                onChange={handleChange}
                readOnly={Disable}
                value={values.gender}
                name="gender"
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
            <Button
              style={{ marginTop: "20px" }}
              type="submit"
              variant="contained"
              onClick={() => setDisable(!Disable)}
            >
              {Disable ? "Edit" : "Save"}
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
