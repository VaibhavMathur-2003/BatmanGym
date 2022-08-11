import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export default function Doubts() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_s0ekci5",
        "template_ehdtdzi",
        form.current,
        "hB1avflehCGmUK6ks"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="container" id="Contact Us"> 
      <form spellCheck="false" ref={form} onSubmit={sendEmail}>
        <h1>Ask Us Anything</h1>
        <input
          type="text"
          id="name"
          spellCheck="false"
          placeholder="Your Name"
          required
          name="name"
        />
        <input
          type="email"
          id="email"
          spellCheck="false"
          placeholder="Email id"
          required
          name="email"
        />
        <textarea
        type="text"
          id="message"
          rows="10"
          spellCheck="False"
          autoCorrect="false"
          placeholder="Kya dikkat hai bro!!"
          name="message"
        ></textarea>
        <button className="submit" type="submit" value="Send">
          Send
        </button>
      </form>
    </div>
  );
}
