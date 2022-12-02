import React, { useState } from "react";
import NavBar from "../components/NavBar";
import "./ContactInfo.css";
function ContactInfo() {
  const [input, setInput] = useState("");
  const [textarea, setTextArea] = useState("");

  const handleInputChange = (data) => {
    setInput(data);
  };

  const handleTextArea = (data) => {
    setTextArea(data);
  };

  const handleSubmitButton = (e) => {
    e.preventDefault();
    console.log(
      "Your e-mail address is:" + input,
      " ",
      " ",
      "Your request is:" + textarea
    );
  };

  return (
    <div>
      <div className="navigationBarContainer">
        <NavBar />
      </div>
      <div className="aboutFaxMailContainer">
        <div className="locationAddressContent contactPage">Location</div>
        <div className="faxContent contactPage">Phone number</div>
        <div className="eMailContent contactPage"> Email</div>
      </div>
      <form
        onSubmit={(e) => {
          handleSubmitButton(e);
          handleInputChange("");
          handleTextArea("");
        }}
        className="laberFormContainer"
      >
        <input
          className="inputPlace content"
          type={"email"}
          required
          placeholder="Enter your e-mail..."
          value={input}
          onChange={(e) => handleInputChange(e.target.value)}
        />

        <textarea
          className="textAreaContent content"
          id="w3review"
          name="w3review"
          rows="1"
          cols="50"
          required
          placeholder="Text your additional request..."
          onChange={(e) => handleTextArea(e.target.value)}
          value={textarea}
        ></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ContactInfo;
